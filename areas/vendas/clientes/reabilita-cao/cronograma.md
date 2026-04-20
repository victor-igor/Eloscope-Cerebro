# Cronograma — ReabilitaCao (Dra. Fran)

> **Stub.** Base: [`Cronograma_Cliente_Template.md`](../../templates/Cronograma_Cliente_Template.md). Preencher datas firmes após aceite.

**Versão:** 0.1
**Data de emissão:** 2026-04-19
**Kickoff previsto:** 2026-04-{TODO}
**Caminho:** B — 6OS Beta
**Vertical:** Clínica multi (fisioterapia)

## Marcos

| # | Marco | Data alvo | Dias úteis | Dono | Pré-requisito |
|---|---|---|---|---|---|
| 1 | Kickoff + acessos | S0 | 1d | Lucas | Contrato assinado |
| 2 | Fase 1 Diagnóstico (adaptada — cliente ativo) | S1 | 4d | Lucas | Acessos Meta, CRM custom atual |
| 3 | Gate 1 (go/no-go) | S1-fim | 0d | Dra. Fran | Devolutiva Loom entregue |
| 4 | Playbook customizado | S2-4 | 15d | Lucas + Victor | Gate 1 aprovado |
| 5 | Gate 2 (aprovação playbook) | S4-fim | 0d | Dra. Fran | Playbook entregue |
| 6 | WABA + agente rodando | S5-7 | 15d | Hugo + Lucas | Gate 2 + WABA approval (5d) |
| 7 | Treinamento secretária | S7 | 3d | Lucas | Agente em produção |
| 8 | Go-live + Fase 3 começa | S8 | 0d | Lucas | Aceite operacional |

## Dependências críticas

- **WABA approval (5d)** — iniciar paralelo ao playbook (S2)
- **Migração do custom atual** — dados de paciente + histórico de WhatsApp precisam ser exportados sem perda

## Gantt resumido

Ver [Cronograma_Cliente_Template.md](../../templates/Cronograma_Cliente_Template.md) pro formato Mermaid completo. Preencher com datas firmes após kickoff.

## Notas

- Cliente ativo → diagnóstico comprimido (4d vs 7-10d padrão).
- Migração de dados do custom antigo é marco extra (adicionar em S2).
