# Task: Update Seller Profile — CSO

```yaml
task: update-seller-profile()
responsavel: "@cso"
responsavel_type: Agent
atomic_layer: Task
elicit: false
triggered_by: analyze-meeting-sales
auto_execute: true

Entrada:
  - campo: seller_name
    tipo: string
    origem: analyze-meeting-sales output
    obrigatorio: true
    default: "Lucas"
  - campo: meeting_analysis
    tipo: object
    origem: analyze-meeting-sales output
    obrigatorio: true
    description: "Output completo da task analyze-meeting-sales"
  - campo: profile_path
    tipo: string
    origem: Obsidian (06 - Time/{seller_name}/Perfil de Vendedor — {seller_name}.md)
    obrigatorio: false
    description: "Se não existir, criar a partir do template perfil-vendedor.md"

Saida:
  - campo: updated_profile
    tipo: markdown
    destino: Obsidian (06 - Time/{seller_name}/Perfil de Vendedor — {seller_name}.md)
    persistido: true
  - campo: pattern_alerts
    tipo: array
    destino: Console (avisos ao usuário se novo padrão detectado)
    persistido: false

Checklist:
  - "[ ] Perfil do vendedor localizado ou criado"
  - "[ ] Nova linha adicionada ao histórico de reuniões"
  - "[ ] Scores por etapa atualizados nas médias"
  - "[ ] Padrões negativos recalculados"
  - "[ ] Pontos fortes recalculados"
  - "[ ] Tendências de evolução atualizadas"
  - "[ ] Plano de desenvolvimento revisado se necessário"
  - "[ ] Alertas emitidos se novo padrão crítico detectado"
  - "[ ] Link da reunião adicionado à seção de reuniões analisadas"
```

---

## Phase 1: Localizar ou Criar Perfil

**Se perfil existe** em `06 - Time/{seller_name}/Perfil de Vendedor — {seller_name}.md`:
→ Ler perfil atual para contexto antes de atualizar

**Se perfil não existe:**
→ Criar a partir do template `templates/perfil-vendedor.md`
→ Preencher campos iniciais com dados da primeira reunião
→ Avisar o usuário: "Primeiro perfil de {seller_name} criado. As análises de padrão ficarão mais precisas a partir da 3ª reunião."

---

## Phase 2: Atualizar Histórico

Adicionar nova linha na tabela de histórico:

```markdown
| {n} | {date} | {prospect} | {tipo} | {score_geral} | {score_discovery} | {score_bant} | {score_fechamento} | {deal_avancou} |
```

Atualizar campo `total_meetings_analyzed` no frontmatter.
Atualizar campo `updated` no frontmatter.

---

## Phase 3: Recalcular Padrões

### 3.1 Padrões Negativos Recorrentes

Para cada etapa com score <6 na reunião atual:
- Verificar se já existe na tabela de padrões
- Se existe: incrementar contagem de ocorrências, atualizar "última vez"
- Se não existe e é a 3ª ocorrência no histórico: **adicionar como novo padrão**
- Se não existe mas é 1ª ou 2ª ocorrência: não registrar ainda (aguardar padrão)

**Trigger de alerta ao usuário** quando padrão atinge:
- 3 ocorrências: "⚠️ Padrão identificado: Lucas está com dificuldade recorrente em {etapa}"
- 5 ocorrências: "🔴 Padrão crítico: {etapa} aparece em {n}/{total} reuniões do Lucas — coaching urgente"
- 8+ ocorrências: "⛔ Padrão estrutural: {etapa} não melhorou após {n} reuniões — reavaliar abordagem de coaching"

### 3.2 Pontos Fortes Consolidados

Para cada etapa com score ≥7 na reunião atual:
- Calcular percentual de ocorrência no histórico total
- Se ≥70% das reuniões: marcar/manter como ponto forte consolidado
- Se estava como ponto forte mas caiu: atualizar status para "em queda"

---

## Phase 4: Atualizar Evolução por Etapa

Recalcular médias de score por faixa de reuniões para cada etapa:
- M1-M3, M4-M6, M7-M9, M10+
- Calcular tendência: ↑ (melhora), → (estável), ↓ (piora)

---

## Phase 5: Revisar Plano de Desenvolvimento

**Se reunião atual mostrou melhora em prioridade ativa:**
- Incrementar "Progresso: X/Y reuniões com melhora observada"
- Se atingiu meta: marcar como conquistado, promover próxima prioridade

**Se novo padrão crítico detectado e não está no plano:**
- Avaliar se deve substituir uma prioridade atual
- Notificar usuário: "Novo padrão identificado — considere ajustar o foco de coaching"

---

## Phase 6: Registrar Alertas

Se alerta para Victor foi emitido na `analyze-meeting-sales`:
- Adicionar linha na tabela de alertas do perfil
- Formato: `| {data} | {motivo} | {deal} | Não |`

---

## Phase 7: Adicionar Link da Reunião

Na seção `## 🔗 Reuniões Analisadas`, adicionar:
```markdown
- [[{caminho/nota-da-reunião}|{data} — {prospect} — Score: {score}]]
```

---

## Output ao Usuário (console)

Após atualizar o perfil, exibir síntese:

```markdown
### 📋 Perfil do Lucas atualizado

**Reunião #{n} registrada** | Score: {score}/10
**Total analisadas:** {total} | **Média geral:** {media}/10

{se novo padrão detectado:}
⚠️ **Novo padrão identificado:** {etapa} com score <6 em {n} reuniões seguidas

{se padrão melhorou:}
✅ **Melhora detectada:** {etapa} subiu de {score_anterior} para {score_atual} — coaching está funcionando

{se padrão crítico persistente:}
🔴 **Padrão crítico persistente:** {etapa} não melhorou em {n} reuniões — acionar sessão de coaching

→ Perfil completo: [[Perfil de Vendedor — {seller_name}]]
```

---

## Completion Criteria

- [ ] Histórico da reunião registrado
- [ ] Padrões negativos recalculados (trigger em 3+ ocorrências)
- [ ] Pontos fortes atualizados
- [ ] Evolução por etapa recalculada
- [ ] Plano de desenvolvimento revisado
- [ ] Alertas registrados
- [ ] Link da reunião adicionado
- [ ] Síntese exibida ao usuário no console
