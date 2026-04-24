---
name: send-contract-autentique
description: Envia contrato aprovado para assinatura digital via API GraphQL da Autentique
agent: notario
triggers:
  - Após Notário validar partes + documento + confirmação humana
inputs:
  - contract_pdf: caminho do PDF do contrato
  - contratante: { nome, cpf_cnpj, email, telefone }
  - contratado: { nome, cnpj, email }
  - testemunhas: [{ nome, cpf, email }] (opcional)
  - config: { mensagem, reminder, deadline, refusable, sandbox }
outputs:
  - document_id: UUID do documento na Autentique
  - signature_links: links de assinatura por parte
  - status: ENVIADO / ERRO
env:
  - AUTENTIQUE_KEY (obrigatório)
---

# Task: Enviar Contrato via Autentique

## Pré-requisitos
- `AUTENTIQUE_KEY` configurada no `.env`
- Contrato em formato PDF
- GO de Thêmis (closing-review)
- Validação de partes concluída (Notário)
- Confirmação humana do resumo de envio

## API — Referência rápida

| Item | Valor |
|------|-------|
| **Endpoint** | `POST https://api.autentique.com.br/v2/graphql` |
| **Auth** | `Authorization: Bearer {AUTENTIQUE_KEY}` |
| **Formato** | GraphQL via `multipart/form-data` |
| **Rate limit** | 60 req/min |
| **Sandbox** | `sandbox: true` no DocumentInput (não consome créditos) |

## Passos

### 1. Montar signatários

Mapear as partes do contrato para `SignerInput[]`:

```
Contratante → { email, action: "SIGN" }
Contratado  → { email, action: "SIGN" }
Testemunha  → { email, action: "SIGN_AS_A_WITNESS" } (se prevista)
```

**Ações disponíveis:**
| Ação | Uso |
|------|-----|
| `SIGN` | Assinatura com validade legal |
| `APPROVE` | Aprovação (sem validade legal) |
| `RECOGNIZE` | Reconhecimento |
| `SIGN_AS_A_WITNESS` | Assinatura como testemunha |

### 2. Executar mutation createDocument

```graphql
mutation CreateDocumentMutation(
  $document: DocumentInput!,
  $signers: [SignerInput!]!,
  $file: Upload!
) {
  createDocument(
    document: $document,
    signers: $signers,
    file: $file
  ) {
    id
    name
    created_at
    signatures {
      public_id
      name
      email
      action { name }
      link { short_link }
      viewed { created_at }
      signed { created_at }
      rejected { created_at }
    }
  }
}
```

**Variáveis:**
```json
{
  "document": {
    "name": "{nome do contrato}",
    "message": "{mensagem personalizada}",
    "reminder": "WEEKLY",
    "refusable": false,
    "sortable": true,
    "deadline_at": "{YYYY-MM-DD HH:MM:SS}"
  },
  "signers": [
    { "email": "{email_contratante}", "action": "SIGN" },
    { "email": "{email_contratado}", "action": "SIGN" },
    { "email": "{email_testemunha}", "action": "SIGN_AS_A_WITNESS" }
  ]
}
```

**Upload multipart (Node.js):**
```javascript
const form = new FormData();

form.append('operations', JSON.stringify({
  query: mutation,
  variables: { document, signers, file: null }
}));

form.append('map', JSON.stringify({ '0': ['variables.file'] }));

form.append('0', fs.createReadStream(contractPdfPath), {
  filename: 'contrato.pdf',
  contentType: 'application/pdf'
});

const response = await axios.post(
  'https://api.autentique.com.br/v2/graphql',
  form,
  {
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${process.env.AUTENTIQUE_KEY}`
    }
  }
);
```

### 3. Processar resposta

**Sucesso:**
```json
{
  "data": {
    "createDocument": {
      "id": "uuid-do-documento",
      "name": "Contrato de Prestação de Serviços",
      "signatures": [
        {
          "email": "cliente@empresa.com",
          "link": { "short_link": "https://app.autentique.com.br/s/XXXX" }
        }
      ]
    }
  }
}
```

Extrair e registrar:
- `document_id` → para consultas futuras
- `signatures[].link.short_link` → links de assinatura de cada parte
- `signatures[].public_id` → para reenvio/remoção

**Erro:**
```json
{
  "errors": [{ "message": "...", "extensions": { "category": "..." } }]
}
```

Tratar erros comuns:
| Erro | Causa | Ação |
|------|-------|------|
| `Unauthenticated` | AUTENTIQUE_KEY inválida | Verificar .env |
| `Validation failed` | Campo obrigatório faltando | Verificar inputs |
| `Rate limit exceeded` | >60 req/min | Aguardar 60s e retry |
| `File too large` | PDF > limite | Comprimir PDF |

### 4. Registrar resultado

Após envio bem-sucedido, criar registro:

```markdown
## Registro de Envio — {nome do contrato}

- **Document ID:** {uuid}
- **Plataforma:** Autentique
- **Enviado em:** {DD/MM/YYYY HH:MM}
- **Sandbox:** {sim/não}

### Signatários
| Parte | Email | Link | Status |
|-------|-------|------|--------|
| Contratante ({nome}) | {email} | {short_link} | Pendente |
| Contratado ({nome}) | {email} | {short_link} | Pendente |
| Testemunha ({nome}) | {email} | {short_link} | Pendente |

### Configurações
- Lembrete: {WEEKLY}
- Deadline: {DD/MM/YYYY}
- Recusável: {não}
```

## Operações complementares

### Verificar status de assinatura

```graphql
query {
  document(id: "{document_id}") {
    id
    name
    signatures {
      email
      signed { created_at ip }
      rejected { created_at }
      viewed { created_at }
    }
    files {
      signed
    }
  }
}
```

### Reenviar notificação para signatário

```graphql
mutation {
  resendDocument(
    document_id: "{document_id}",
    signer_id: "{signer_public_id}"
  )
}
```

### Adicionar signatário após envio

```graphql
mutation {
  createSigner(
    document_id: "{document_id}",
    signer: {
      email: "{novo_email}",
      action: "SIGN"
    }
  ) {
    public_id
    link { short_link }
  }
}
```

### Download do documento assinado

Após todos assinarem (`files.signed` != null):

```graphql
query {
  document(id: "{document_id}") {
    files {
      signed
      pades
    }
  }
}
```

- `files.signed` → URL do PDF com assinaturas
- `files.pades` → Versão PAdES (padrão europeu)

## Webhooks (configuração futura)

Eventos relevantes:
- `document.finished` → todos assinaram → download automático
- `signature.viewed` → signatário abriu o link
- `signature.rejected` → signatário recusou

Validação HMAC-SHA256 obrigatória para segurança.

## Sandbox

Para desenvolvimento/testes, adicionar `sandbox: true` no DocumentInput:
```json
{
  "document": {
    "name": "...",
    "sandbox": true
  }
}
```
- Não consome créditos
- Documento criado normalmente, mas sem validade
- Usar para testar fluxo completo antes de produção

## Definition of Done
- [ ] Mutation executada com sucesso
- [ ] Document ID recebido e registrado
- [ ] Links de assinatura extraídos para cada parte
- [ ] Resultado apresentado ao operador
- [ ] Registro de envio salvo
