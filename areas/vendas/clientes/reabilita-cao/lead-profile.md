# Lead Profile — ReabilitaCao (Dra. Fran)

> Dossiê padrão Eloscope. Cliente ativo (verde no Pipeline). Stub com dados conhecidos — completar no próximo touch.

## Identificação

- **Nome fantasia / razão social:** ReabilitaCao
- **Setor / vertical Q2:** Clínica multi-profissional (fisioterapia)
- **Porte observado (faturamento mensal estimado):** {TODO — validar com Dra. Fran}
- **Tamanho do time comercial:** {TODO — secretária + profissionais}
- **Cidade / base de operação:** {TODO}
- **Site:** {TODO}
- **LinkedIn da empresa:** {TODO}

## Decisor

- **Nome do dono / decisor primário:** Dra. Fran
- **Cargo:** Fisioterapeuta / dona
- **LinkedIn:** {TODO}
- **WhatsApp / canal preferido:** WhatsApp (grupo Fran-style já estabelecido)
- **Perfil:** Operacional / técnica (profissional da saúde)
- **Decisor-2:** {TODO — sócio?}

## Origem e timing

- **Canal de origem:** Cliente antigo (modelo pré-6OS)
- **Data do primeiro contato:** {TODO — anterior a 2026-04}
- **Quem está conduzindo:** Lucas
- **Status no `docs/Pipeline.md`:** `ativo-upsell` → migrar custom atual pra 6OS Beta

## Contexto do discovery

- **Dor declarada pelo cliente (fala dela):**
  > "{TODO — capturar fala original em próxima call}"
- **Dor real mapeada (nossa leitura):** Agendamento manual + follow-up de paciente inexistente; WhatsApp desorganizado
- **Métrica que ela quer mudar em 90 dias:** {TODO — no-show rate? receita por paciente?}
- **Ciclo de venda médio:** Curto (paciente converte em 1-7 dias se follow-up correto)
- **Ticket médio real:** {TODO}
- **CRM atual:** Custom Eloscope (migrar pra 6OS multi-tenant)
- **Volume mensal de lead por canal principal:** {TODO — Instagram? indicação?}

## Caminho candidato 6OS

- [x] **6OS Beta** — migração do custom atual pra produto padrão, case clínica-multi
- [ ] Diagnóstico standalone
- [ ] 6OS Real
- [ ] Fora-de-escopo

**Justificativa:** cliente ativo, time comercial pequeno mas existente (secretária + Fran), ticket compatível, abertura pra IA já provada via custom atual. Prioritária como **case oficial vertical clínica Q2** no primeiro ciclo Beta.

## Sinais de risco (Cassandra)

- [ ] Ciclo longo sem próximo-passo — N/A (ativa)
- [ ] Decisor não identificado — N/A
- [ ] Objeção de preço não resolvida — monitorar na migração (custom → R$ 1.500/mês Beta)
- [ ] CRM do cliente não padronizado — N/A (já no Eloscope)
- [ ] Expectativa de "resolver tudo com IA" — baixo risco (já experiente)
- [ ] Promessa implícita que a gente não pode cumprir — revisar escopo antigo vs 6OS novo

## Arquivos relacionados

- **Pasta do lead:** `docs/clientes/reabilita-cao/`
- **Transcrições Fathom/Fireflies:** {TODO — buscar GDrive `1mu3QF8Wre20-bFQsXRpq3s_NZ972jUvY`}
- **Orçamento antigo no GDrive:** {TODO — buscar em `1b0jSBvRaMzx91PDgGoCGgCHkJSDpWxqu`}

## Próximos passos

- [ ] Agendar call migração custom → 6OS Beta — Lucas — 2026-04-26
- [ ] Baixar transcrições Fathom históricas — Lucas — 2026-04-22
- [ ] Rodar Fase 1 Diagnóstico adaptada (confirmar métricas atuais) — Lucas — 2026-04-30

## Log de interação

| Data | Canal | Quem Eloscope | Resumo | Próxima ação |
|---|---|---|---|---|
| 2026-04-19 | — | Lucas | Pasta criada + lead identificado como Q2 prioritário | Agendar migração |

## Observações livres

- Cliente serve de **case-referência** pra fechar outras clínicas Q2 (Dra Cecilia, Femina, Eduarda El Clinic).
- Migração custom → 6OS Beta deve ser transparente — cliente não pode sentir downgrade.
