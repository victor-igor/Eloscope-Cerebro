# Dossiê Técnico — API Autentique

> Pesquisa feita em 2026-04-24.

---

## 1. Visão Geral

A Autentique fornece **exclusivamente uma API GraphQL**. Não existe REST e, segundo a própria documentação, "if it ever exists we will remove this sentence." Toda a integração passa por um único endpoint.

**Endpoint único:**
```
POST https://api.autentique.com.br/v2/graphql
```

---

## 2. Autenticação

**Modelo:** Bearer token via header HTTP.

```http
Authorization: Bearer {AUTENTIQUE_KEY}
Content-Type: application/json
```

A API key é gerada no painel em: https://painel.autentique.com.br/perfil/api

No contexto do projeto, a variável de ambiente `AUTENTIQUE_KEY` já está no `.env` — basta injetá-la no header `Authorization`.

**Nota importante:** A API key é vinculada à conta. Ao usar `signDocument`, você só pode assinar como o titular da key. Para fluxos onde o contratante (Eloscope) é o único signatário ou quer assinar por último, isso é suficiente. Se o fluxo for "enviar para cliente assinar", a assinatura do cliente acontece pelo link — não pela API.

---

## 3. Rate Limits

- **60 requests por minuto** por API key.
- Sem documentação explícita sobre limites de burst ou quotas diárias.
- Para volume alto, usar webhooks ao invés de polling é obrigatório (a própria documentação adverte contra polling frequente).

---

## 4. Modelo GraphQL — Conceitos-chave

| Conceito | Descrição |
|----------|-----------|
| `DocumentInput` | Metadados do documento (nome, mensagem, prazo, lembretes) |
| `SignerInput` | Cada signatário (email, telefone, ação, verificações) |
| `Upload` | O arquivo PDF em si (multipart/form-data) |
| `files.signed` | URL do PDF assinado (disponível após todas as assinaturas) |
| `files.pades` | Versão PAdES do documento assinado |
| `signatures[].signed` | Objeto com `created_at` e `ip` — indica que aquele signatário assinou |

Upload de arquivo usa o **GraphQL multipart request spec** — não é um JSON puro, é `multipart/form-data`.

---

## 5. Queries Principais

### 5.1 Buscar usuário atual (health check / validação de token)

```graphql
query {
  me {
    id
    name
    email
    cpf
    cnpj
    subscription {
      premium
      documents
      credits
    }
    organization {
      id
      uuid
      name
    }
  }
}
```

**Uso:** validar que a AUTENTIQUE_KEY está funcional antes de enviar documentos em produção.

### 5.2 Buscar documento por ID (verificar status)

```graphql
query {
  document(id: "DOCUMENT_UUID") {
    id
    name
    created_at
    files {
      original
      signed
      pades
    }
    signatures {
      public_id
      name
      email
      action {
        name
      }
      link {
        short_link
      }
      viewed {
        created_at
        ip
      }
      signed {
        created_at
        ip
      }
      rejected {
        created_at
        ip
      }
    }
  }
}
```

**Lógica de status:**
- `signatures[n].signed != null` → esse signatário assinou
- `signatures[n].rejected != null` → esse signatário recusou
- `files.signed != null` → documento completamente assinado (todos assinaram)

### 5.3 Listar documentos (com paginação)

```graphql
query {
  documents(limit: 60, page: 1) {
    total
    data {
      id
      name
      created_at
      files {
        original
        signed
      }
      signatures {
        name
        email
        signed { created_at }
        rejected { created_at }
      }
    }
  }
}
```

---

## 6. Mutations Principais

### 6.1 Criar documento e enviar para assinatura (operação central)

Esta é a mutation mais importante. Cria o documento, define os signatários e sobe o arquivo em uma única operação.

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
      link {
        short_link
      }
    }
  }
}
```

**Variáveis de exemplo (JSON):**
```json
{
  "document": {
    "name": "Contrato de Prestação de Serviços - Cliente X",
    "message": "Olá! Segue o contrato para sua assinatura digital.",
    "reminder": "WEEKLY",
    "refusable": false,
    "deadline_at": "2026-05-15 23:59:00"
  },
  "signers": [
    {
      "email": "cliente@empresa.com.br",
      "action": "SIGN"
    }
  ]
}
```

**Ações disponíveis para signatários (`action`):**

| Valor | Descrição |
|-------|-----------|
| `SIGN` | Assinar o documento |
| `APPROVE` | Aprovar (sem assinatura com validade legal) |
| `RECOGNIZE` | Reconhecer como testemunha |
| `SIGN_AS_A_WITNESS` | Assinar como testemunha |

**Opções de entrega para signatários:**

| Campo | Comportamento |
|-------|---------------|
| `email: "x@y.com"` | Envia link por email automaticamente |
| `phone` + `delivery_method: SMS` | Envia por SMS |
| `phone` + `delivery_method: WHATSAPP` | Envia por WhatsApp |
| `name: "Fulano"` | Gera link para distribuição manual (sem envio automático) |

**Verificações de segurança opcionais (`security_verifications`):**

```json
"security_verifications": [
  { "type": "SMS" },
  { "type": "UPLOAD" }
]
```

| Tipo | O que exige do signatário |
|------|--------------------------|
| `SMS` | Código via SMS |
| `UPLOAD` | Foto frente e verso do documento de identidade |
| `LIVE` | Foto do documento + selfie + prova de vida |
| `MANUAL` | Foto do documento com aprovação manual |
| `PF_FACIAL` | Biometria via SERPRO |

### 6.2 Assinar documento (com o token do titular da API key)

```graphql
mutation {
  signDocument(id: "DOCUMENT_UUID")
}
```

**Restrição:** só funciona se o titular da API key estiver listado como signatário no documento. Caso contrário, retorna `signature_not_found`.

### 6.3 Editar documento

```graphql
mutation {
  updateDocument(
    id: "DOCUMENT_UUID",
    document: {
      name: "Novo nome",
      message: "Nova mensagem"
    }
  ) {
    id
    name
  }
}
```

### 6.4 Adicionar signatário após criação

```graphql
mutation {
  createSigner(
    document_id: "DOCUMENT_UUID",
    signer: {
      email: "novo@signatario.com",
      action: "SIGN"
    }
  ) {
    public_id
    email
    link { short_link }
  }
}
```

### 6.5 Remover signatário

```graphql
mutation {
  deleteSigner(
    document_id: "DOCUMENT_UUID",
    signer_id: "SIGNER_PUBLIC_ID"
  )
}
```

### 6.6 Reenviar notificação para signatário

```graphql
mutation {
  resendDocument(
    document_id: "DOCUMENT_UUID",
    signer_id: "SIGNER_PUBLIC_ID"
  )
}
```

### 6.7 Deletar documento

```graphql
mutation {
  deleteDocument(id: "DOCUMENT_UUID")
}
```

---

## 7. Implementação em JavaScript/Node.js

### 7.1 Exemplo completo — criar e enviar documento

```javascript
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const AUTENTIQUE_URL = 'https://api.autentique.com.br/v2/graphql';
const AUTENTIQUE_KEY = process.env.AUTENTIQUE_KEY;

const mutation = `
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
        link {
          short_link
        }
      }
    }
  }
`;

async function enviarContrato({ filePath, nomeDocumento, signatarios, mensagem }) {
  const form = new FormData();

  // Parte 1: operação GraphQL
  form.append('operations', JSON.stringify({
    query: mutation,
    variables: {
      document: {
        name: nomeDocumento,
        message: mensagem || 'Por favor, assine o documento.',
        reminder: 'WEEKLY',
        refusable: false,
      },
      signers: signatarios.map(s => ({
        email: s.email,
        action: s.action || 'SIGN',
      })),
      file: null, // placeholder — será mapeado abaixo
    }
  }));

  // Parte 2: map para o GraphQL multipart spec
  form.append('map', JSON.stringify({ '0': ['variables.file'] }));

  // Parte 3: o arquivo em si
  form.append('0', fs.createReadStream(filePath), {
    filename: filePath.split('/').pop(),
    contentType: 'application/pdf',
  });

  const response = await axios.post(AUTENTIQUE_URL, form, {
    headers: {
      ...form.getHeaders(),
      Authorization: `Bearer ${AUTENTIQUE_KEY}`,
    },
  });

  if (response.data.errors) {
    throw new Error(JSON.stringify(response.data.errors));
  }

  return response.data.data.createDocument;
}

// Uso:
const resultado = await enviarContrato({
  filePath: '/tmp/contrato-cliente-x.pdf',
  nomeDocumento: 'Contrato de Prestação de Serviços',
  signatarios: [
    { email: 'cliente@empresa.com.br', action: 'SIGN' },
  ],
  mensagem: 'Olá! Segue o contrato para assinatura.'
});

console.log('Documento criado:', resultado.id);
console.log('Link para assinatura:', resultado.signatures[0].link.short_link);
```

### 7.2 Verificar status de um documento

```javascript
async function verificarStatus(documentId) {
  const query = `
    query {
      document(id: "${documentId}") {
        id
        name
        files { original signed pades }
        signatures {
          name
          email
          signed { created_at }
          rejected { created_at }
          viewed { created_at }
        }
      }
    }
  `;

  const response = await axios.post(
    AUTENTIQUE_URL,
    { query },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTENTIQUE_KEY}`,
      },
    }
  );

  const doc = response.data.data.document;

  const todos_assinaram = doc.signatures.every(s => s.signed !== null);
  const alguem_recusou = doc.signatures.some(s => s.rejected !== null);

  return {
    id: doc.id,
    nome: doc.name,
    status: alguem_recusou ? 'RECUSADO' : todos_assinaram ? 'ASSINADO' : 'PENDENTE',
    url_assinado: doc.files.signed,
    url_pades: doc.files.pades,
    signatarios: doc.signatures.map(s => ({
      email: s.email,
      nome: s.name,
      assinou: s.signed !== null,
      recusou: s.rejected !== null,
      visualizou: s.viewed !== null,
      assinou_em: s.signed?.created_at,
    })),
  };
}
```

### 7.3 Cliente GraphQL genérico (sem multipart — para queries e mutations sem arquivo)

```javascript
async function graphql(query, variables = {}) {
  const response = await axios.post(
    AUTENTIQUE_URL,
    { query, variables },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTENTIQUE_KEY}`,
      },
    }
  );

  if (response.data.errors) {
    throw new Error(`Autentique GraphQL error: ${JSON.stringify(response.data.errors)}`);
  }

  return response.data.data;
}
```

---

## 8. Sandbox (Modo Teste)

Para desenvolver sem consumir créditos, passe `sandbox: true` na mutation:

```graphql
mutation CreateDocumentMutation(
  $document: DocumentInput!,
  $signers: [SignerInput!]!,
  $file: Upload!
) {
  createDocument(
    sandbox: true,       # <-- ativa o modo teste
    document: $document,
    signers: $signers,
    file: $file
  ) {
    id
    name
  }
}
```

**Comportamento do sandbox:**
- Documentos não consomem créditos.
- São deletados automaticamente após alguns dias.
- Aparecem no dashboard somente se você habilitar "mostrar documentos sandbox" nas configurações da API key.
- Para listar apenas documentos sandbox na query: adicionar `onlySandbox: true` nos parâmetros de `documents`.

---

## 9. Webhooks

### 9.1 Configuração
Registrar a URL de destino no painel da Autentique. O endpoint deve:
- Aceitar `POST` via HTTPS.
- Responder `2xx` rapidamente (antes de processar a lógica).
- Validar a assinatura HMAC-SHA256 via header `x-autentique-signature`.

### 9.2 Eventos disponíveis

| Evento | Quando dispara |
|--------|---------------|
| `document.created` | Documento criado |
| `document.updated` | Documento editado |
| `document.deleted` | Documento deletado |
| `document.finished` | Todos os signatários completaram (equivale a "assinado por todos") |
| `signature.created` | Novo signatário adicionado |
| `signature.viewed` | Signatário abriu o documento |
| `signature.accepted` | Signatário assinou |
| `signature.rejected` | Signatário recusou |
| `signature.biometric_approved` | Biometria aprovada |
| `signature.biometric_rejected` | Biometria recusada |
| `member.created` | Membro adicionado à organização |
| `member.deleted` | Membro removido da organização |

### 9.3 Payload (formato JSON)

```json
{
  "id": "evt_xxxxx",
  "object": "event",
  "name": "signature.accepted",
  "format": "json",
  "url": "https://suaapp.com/webhooks/autentique",
  "event": {
    "id": "sig_xxxxx",
    "document_id": "doc_xxxxx",
    "created_at": "2026-04-24T10:30:00Z"
  },
  "data": {
    "id": "doc_xxxxx",
    "name": "Contrato de Prestação de Serviços",
    "signatures": [ ... ]
  }
}
```

**Nota sobre versão antiga:** existe documentação legada que menciona payload em `x-www-form-urlencoded`. A versão atual usa JSON.

### 9.4 Política de retry

| Tentativa | Delay após falha |
|-----------|-----------------|
| 1 | 60 segundos |
| 2 | 120 segundos |
| 3 | 300 segundos |

Eventos ficam no log por **14 dias**.

### 9.5 Validação HMAC (Node.js)

```javascript
import crypto from 'crypto';

function validarWebhook(payload, signature, secret) {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  return hash === signature;
}

// Express handler
app.post('/webhooks/autentique', (req, res) => {
  const sig = req.headers['x-autentique-signature'];
  if (!validarWebhook(req.body, sig, process.env.AUTENTIQUE_WEBHOOK_SECRET)) {
    return res.status(401).send('Assinatura inválida');
  }

  res.sendStatus(200); // responde imediatamente

  // processa de forma assíncrona
  processarEvento(req.body).catch(console.error);
});
```

---

## 10. Fluxo Completo — Passo a Passo

### Caso de uso: enviar contrato para cliente assinar e baixar quando pronto

```
1. [UPLOAD + CRIAR]
   mutation createDocument(file, document, signers)
   → retorna: document.id, signatures[].link.short_link

2. [AGUARDAR ASSINATURA]
   Opção A (recomendada): webhook signature.accepted / document.finished
   Opção B (fallback): polling a cada N minutos em query document(id)

3. [VERIFICAR STATUS]
   query document(id) { files { signed } signatures { signed { created_at } } }
   → se files.signed != null: todos assinaram

4. [DOWNLOAD]
   HTTP GET em files.signed (URL pública do PDF assinado)
   ou files.pades para versão PAdES
```

**Diagrama sequencial:**

```
Eloscope App          Autentique API         Cliente
     |                      |                    |
     |-- createDocument ---> |                    |
     |<-- { id, link } ------| ---- email ------> |
     |                      |                    |
     |                      |<--- assina link --- |
     |<-- webhook signed ----|                    |
     |                      |                    |
     |-- query document(id)->|                    |
     |<-- { files.signed } --|                    |
     |                      |                    |
     |-- GET files.signed -->| (download PDF)     |
```

---

## 11. Erros Comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `signature_not_found` | Tentou assinar com `signDocument` mas a API key não é signatária | Garantir que o email do titular da key está nos `signers` |
| `Unauthenticated` | Header `Authorization` ausente ou token inválido | Verificar variável `AUTENTIQUE_KEY` |
| `Rate limit exceeded` | Mais de 60 req/min | Implementar fila com backoff exponencial |
| `document not found` | ID incorreto ou documento deletado | Validar UUID antes de consultar |

---

## 12. Ferramentas de Desenvolvimento

| Ferramenta | URL | Para que serve |
|------------|-----|----------------|
| Altair (IDE GraphQL) | https://altair.autentique.com.br | Testar queries/mutations com schema introspectado |
| Postman Collection | Link na documentação oficial | Exemplos prontos em múltiplas linguagens |
| SDK Node.js (comunidade) | `npm i @thiago.zampieri/autentique-v2-nodejs` | Wrapper pronto, configura via `.env` |
| SDK PHP (comunidade) | `composer require sysborg/autentiquev2` | Wrapper PHP 8+ |
| Documentação oficial | https://docs.autentique.com.br/api | Referência completa |

---

## 13. Checklist de Implementação

- [ ] `AUTENTIQUE_KEY` presente no `.env`
- [ ] Testar autenticação com query `me { id name email }` antes de subir em produção
- [ ] Usar `sandbox: true` durante desenvolvimento
- [ ] Implementar webhook para `document.finished` ao invés de polling
- [ ] Validar assinatura HMAC nos webhooks
- [ ] Tratar resposta de `files.signed` como nullable (null enquanto não assinado)
- [ ] Armazenar o `document.id` retornado pelo `createDocument` para consultas futuras
- [ ] Implementar retry com backoff para erros 429 (rate limit)

---

## 14. Fontes

- [Documentação oficial — Introdução](https://docs.autentique.com.br/api)
- [Criando um documento](https://docs.autentique.com.br/api/mutations/criando-um-documento)
- [Assinando um documento](https://docs.autentique.com.br/api/mutations/assinando-um-documento)
- [Resgatando documentos](https://docs.autentique.com.br/api/queries/resgatando-documentos)
- [Sobre o GraphQL](https://docs.autentique.com.br/api/sobre-o-graphql)
- [Webhooks](https://docs.autentique.com.br/api/integracao/webhooks)
- [Sandbox/testes](https://docs.autentique.com.br/api/integracao/sandbox-testes)
- [SDK Node.js — thiagozampieri](https://github.com/thiagozampieri/autentique-v2-nodejs)
- [SDK PHP — sysborg](https://github.com/sysborg/autentiquev2)
- [llms.txt — índice completo da API](https://docs.autentique.com.br/api/llms.txt)
