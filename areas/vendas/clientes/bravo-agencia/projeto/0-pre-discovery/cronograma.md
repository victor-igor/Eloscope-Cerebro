# Bravo Agency — Cronograma de Entrega

> **Opção B — Sistema Completo · R$3.900**
> Cliente: Gustavo Bravo · Bravo Agency
> Fechamento: 23/04/2026
> Início: 26/04/2026 (discovery)

---

## Timeline

| Fase         | Período     | Entrega                                | Status |
| ------------ | ----------- | -------------------------------------- | ------ |
| Discovery    | 26/04 (sáb) | Sessão 1h — mapear fluxo atual         | [ ]    |
| Setup infra  | 26/04–02/05 | VPS + OpenClaw + GitHub em paralelo    | [ ]    |
| Documento    | 28/04–02/05 | Processo módulo a módulo + prioridades | [ ]    |
| Skills v1    | 28/04–02/05 | Primeiras skills no Claude Code        | [ ]    |
| Skills final | 05/05–09/05 | Até 3 skills testadas e documentadas   | [ ]    |
| Treinamento  | 05/05–09/05 | 4 módulos (5h total)                   | [ ]    |
| Suporte      | 10/05–08/06 | 30 dias pós-entrega                    | [ ]    |

---

## Checklist por fase

### 1. Discovery — 26/04 (sábado)

**Participantes:** Gustavo + Rafael + Javi + Lucas (Eloscope)

- [ ] Agendar horário com Gustavo (confirmar disponibilidade sábado)
- [ ] Preparar roteiro de discovery (perguntas por módulo)
- [ ] Mapear fluxo atual: onboarding → planejamento → criação → aprovação → postagem
- [ ] Identificar gargalos reais (onde o time perde mais tempo)
- [ ] Definir quais 3 skills priorizar
- [ ] Gravar sessão (referência para documento)
- [ ] Definir automações por skill (máx 5/skill, até 3 etapas)

### 2. Setup da infraestrutura — 26/04 a 02/05

> Em paralelo ao discovery e documentação.

- [ ] Provisionar VPS (~R$80/mês)
- [ ] Instalar OpenClaw no VPS
- [ ] Configurar GitHub (repo da Bravo)
- [ ] Conectar WhatsApp (QR code)
- [ ] Testar acesso a arquivos
- [ ] Configurar Claude Code no ambiente
- [ ] Documentar credenciais e acessos (entregar ao time)

### 3. Documento de processo — 28/04 a 02/05

- [ ] Transcrever discovery em fluxograma
- [ ] Documentar cada módulo: entrada → processo → saída
- [ ] Marcar onde a IA entra em cada etapa
- [ ] Definir ordem de automação (o que primeiro)
- [ ] Validar documento com Gustavo (async, WhatsApp)
- [ ] Versão final aprovada

### 4. Skills — 28/04 a 09/05

- [ ] Skill 1: [definir no discovery] — configurar + testar
- [ ] Skill 2: [definir no discovery] — configurar + testar
- [ ] Skill 3: [definir no discovery] — configurar + testar
- [ ] Documentar cada skill (como chamar, input, output esperado)
- [ ] Testar skills com dados reais de 1 cliente da Bravo
- [ ] Ajustar com feedback do Rafael/Javi

### 5. Treinamento — 05/05 a 09/05

| Módulo | Duração | Conteúdo | Status |
|--------|---------|----------|--------|
| 01 — Fundamentos | 1h | Sistema end-to-end, quando IA atua vs. time decide | [ ] |
| 02 — Operando skills | 2h | Cada skill ao vivo: chamar, input, validar output, erros | [ ] |
| 03 — Uso no dia a dia | 1h | WhatsApp, arquivos, memória persistente, dicas | [ ] |
| 04 — Quando algo muda | 1h | Ajustar skill, documentar novo processo, suporte vs. interno | [ ] |

- [ ] Agendar calls com Rafael e Javi (até 3 pessoas)
- [ ] Gravar todas as calls
- [ ] Preparar material escrito de referência
- [ ] Confirmar que o time opera sem ajuda ao final

### 6. Suporte pós-entrega — 10/05 a 08/06

- [ ] Canal de suporte definido (WhatsApp Lucas)
- [ ] Dúvidas respondidas em até 24h úteis
- [ ] Pequenos ajustes nas skills sem custo
- [ ] Ao final: encerrar suporte ou oferecer plano contínuo

---

## Escopo fixo (não muda)

**Incluído:**
- Até 3 skills (definidas no discovery)
- Até 5 automações por skill (fluxos lineares, até 3 etapas)
- Treinamento de até 3 pessoas
- Processos de texto e análise
- Stack: OpenClaw + Claude Code + GitHub
- 30 dias de suporte pós-entrega

**Fora do escopo:**
- APIs customizadas ou conectores proprietários
- Integração com ERPs, CRMs proprietários
- Fluxos n8n ou automações externas
- Skills com lógica condicional complexa (>3 etapas)
- Skills além das 3 definidas
- Operação contínua do sistema
- Manutenção após os 30 dias (plano separado)

---

## Custos recorrentes (responsabilidade Bravo)

| Item | Custo/mês |
|------|-----------|
| VPS | ~R$80 |
| API de IA (OpenAI/Claude) | R$50–200 |
| OpenClaw / Claude Code / GitHub | Gratuito |
| **Total estimado** | **~R$130–280** |

---

*Criado: 23/04/2026*
