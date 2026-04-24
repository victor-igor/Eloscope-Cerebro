---
name: check-signature-status
description: Verifica status de assinatura de documento na Autentique — quem assinou, quem falta, download do assinado
agent: notario
triggers:
  - Verificação manual de status
  - Halley solicita status para follow-up
inputs:
  - document_id: UUID do documento na Autentique
outputs:
  - status_report: relatório com status de cada signatário
  - signed_pdf_url: URL do PDF assinado (se completo)
env:
  - AUTENTIQUE_KEY (obrigatório)
---

# Task: Verificar Status de Assinatura

## Pré-requisitos
- `document_id` do envio anterior
- `AUTENTIQUE_KEY` configurada

## Passos

### 1. Consultar documento

```graphql
query {
  document(id: "{document_id}") {
    id
    name
    created_at
    signatures {
      public_id
      name
      email
      action { name }
      viewed { created_at ip }
      signed { created_at ip }
      rejected { created_at ip reason }
      link { short_link }
    }
    files {
      original
      signed
      pades
    }
  }
}
```

### 2. Interpretar status de cada signatário

| Campo | Significado |
|-------|-------------|
| `viewed != null` | Abriu o link (visualizou) |
| `signed != null` | Assinou |
| `rejected != null` | Recusou |
| Todos `null` | Ainda não abriu |

### 3. Determinar status geral

| Condição | Status |
|----------|--------|
| Todos `signed != null` | ✅ COMPLETO — todos assinaram |
| Algum `rejected != null` | ❌ RECUSADO — signatário recusou |
| Algum `signed`, outros pendentes | ⏳ PARCIAL — falta assinar |
| Nenhum `signed` ou `viewed` | 📨 ENVIADO — ninguém abriu ainda |

### 4. Se COMPLETO — extrair PDF assinado

`files.signed` → URL do PDF assinado para download.

### 5. Se pendente — opções

- **Reenviar:** mutation `resendDocument` para signatário específico
- **Follow-up:** handoff para Halley com dados do signatário pendente

## Output

```markdown
# Status de Assinatura — {nome do documento}

**Document ID:** {uuid}
**Status geral:** {COMPLETO / PARCIAL / ENVIADO / RECUSADO}

| Signatário | Tipo | Visualizou | Assinou | Recusou |
|-----------|------|-----------|---------|---------|
| {nome} | SIGN | {data/—} | {data/—} | {data/—} |
| {nome} | SIGN | {data/—} | {data/—} | {data/—} |
| {nome} | WITNESS | {data/—} | {data/—} | {data/—} |

## PDF Assinado
- URL: {url ou "Aguardando todas as assinaturas"}

## Ações disponíveis
- Reenviar para {nome}: `resendDocument({doc_id}, {signer_id})`
- Encaminhar para follow-up (Halley)
```
