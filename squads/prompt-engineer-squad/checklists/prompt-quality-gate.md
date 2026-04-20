# Prompt Quality Gate — XML+Markdown Híbrido

**Threshold:** 100% BLOCKING + 80% RECOMMENDED = PASS

---

## BLOCKING — Veto se qualquer item falhar

- [ ] **8 seções presentes:** Papel, Tom de Voz, Memória, Saudação, Roteamento, Protocolos, Ferramentas, Restrições
- [ ] **Formato correto:** Cada seção usa `# Nome` + `<tag>` XML como wrapper
- [ ] **Papel em 1 frase** com fronteira explícita (o que o agente NÃO faz)
- [ ] **Roteamento completo** — toda intenção mapeada tem destino (protocolo ou ação)
- [ ] **Roteamento antes de tool** — instrução "identifique intenção ANTES de qualquer tool" presente
- [ ] **Memória com 5 sub-seções:** LEITURA, GRAVACAO, ATUALIZACAO, FORMATO, PROATIVO
- [ ] **Cada protocolo tem condição de acionamento** explícita
- [ ] **Tool calls com pré-condições** — nenhuma tool é chamada sem checklist ou gate
- [ ] **Protocolo de escalação para humano** presente com gatilhos definidos
- [ ] **PROIBIDO mencionar tools/prompts/IA** presente nas restrições
- [ ] **PROIBIDO confirmar/executar sem retorno de tool** presente
- [ ] **PROIBIDO inventar dados/IDs/valores** presente
- [ ] **Saudação com 5 faixas de tempo**

---

## RECOMMENDED — Warning se falhar

- [ ] **Regra de emojis** com contextos permitidos e proibidos explícitos
- [ ] **Memória longa** — instrução para chamar `memorylong` quando aplicável
- [ ] **GATE explícito** antes de cada tool call crítica (checklist □ antes de chamar)
- [ ] **Passos numerados** (①②③) em protocolos com múltiplas etapas
- [ ] **Casos de borda** cobertos (resposta parcial, intenção ambígua, tool vazia)
- [ ] **Limite de caracteres** por mensagem definido (se canal WhatsApp)
- [ ] **Regra de formatação** (bullets, quebras de linha)

---

## Score

| Resultado | Critério |
|-----------|----------|
| **PASS** | 100% BLOCKING + ≥ 80% RECOMMENDED |
| **CONDITIONAL** | 100% BLOCKING + 60-79% RECOMMENDED |
| **FAIL** | Qualquer BLOCKING falhou |
