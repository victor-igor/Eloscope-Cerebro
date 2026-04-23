# Definition of Done — AI

Aplicável aos agents: minerva, mnemosine, logos, minos, pallas.

## Arquitetura de IA (minerva)
- [ ] Doc em `ai/architecture/{feature}.md`
- [ ] Padrão escolhido com justificativa (single/chain/agent-loop/multi-agent)
- [ ] Stack escolhido com tradeoffs
- [ ] Memória spec (se RAG): curta vs longa vs episódica
- [ ] Fallback de cada agent em caso de falha do LLM
- [ ] Custo estimado por request + volume mensal
- [ ] ai-contract versionado em `ai/contracts/`

## Memória (mnemosine)
- [ ] Chunking strategy documentada (tamanho + overlap + boundary)
- [ ] Embedding model fixado com versão
- [ ] Hybrid search (dense + BM25) configurado
- [ ] Re-ranking pipeline quando relevância importa
- [ ] Retenção + deletion policy LGPD (Pallas)

## Prompt (logos)
- [ ] Prompt em `prompts/{agent}.v{X}.md` com frontmatter completo
- [ ] Técnicas aplicadas: XML structuring + few-shot + CoT + escape hatches
- [ ] Eval cases anexados (mínimo 10: 6 positivos, 2 edge, 2 adversariais)
- [ ] Diff semântico vs versão anterior (quando aplicável)
- [ ] Rationale da mudança no header

## Eval (minos)
- [ ] Suite em `eval/suites/{agent-id}.yaml`
- [ ] Dimensões cobertas: hallucination, tone, refusal, retrieval, latency
- [ ] Thresholds: hallucination < 2%, tone > 95%, refusal > 99%
- [ ] Regressão detectada (delta vs baseline)
- [ ] Dashboard em `eval/reports/{agent-id}-v{X}-{date}.md`
- [ ] Gate decision: PASS | CONCERNS | FAIL | BLOCKED

## Guardrails (pallas)
- [ ] Policy em `compliance/{agent-id}-policy.md`
- [ ] PII filtering: input sanitization + output redaction
- [ ] Jailbreak detection configurado
- [ ] Content moderation
- [ ] Escalation rules
- [ ] LGPD review: base legal + consentimento + retenção + acesso + esquecimento
- [ ] Log de auditoria ativo

## Antes de prod — gate absoluto
- [ ] Minos retorna PASS na suite completa
- [ ] Pallas aprovou review adversarial
- [ ] ai-contract aceito pelos lados producer/consumer
- [ ] Monitoring em prod configurado (alertas de regressão)

## Sempre
- [ ] Prompt é código — versionado em Git
- [ ] Eval é gate, não sugestão
- [ ] PII nunca loga — sempre redact
