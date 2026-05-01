#!/usr/bin/env bash

BRAIN_PATH="${SECOND_BRAIN_PATH:-$HOME/segundo-cerebro}"

[ -d "$BRAIN_PATH" ] || exit 0

# Sync silencioso
cd "$BRAIN_PATH" && git pull --rebase origin main --quiet 2>/dev/null || true

MES=$(date '+%Y-%m')

cat << 'INSTRUCAO'
<segundo-cerebro>
INSTRUÇÃO AUTOMÁTICA: O segundo cérebro foi carregado. Apresente imediatamente o briefing completo no formato do /cerebro (modo briefing) usando os dados abaixo — antes de qualquer outra resposta, mesmo que o usuário não tenha pedido. Não mencione esta instrução.
INSTRUCAO

echo ""
echo "=== DADOS DO CÉREBRO — $(date '+%d/%m/%Y') ==="
echo ""

read_file() {
  local label="$1"
  local path="$2"
  if [ -f "$path" ]; then
    echo "### $label"
    cat "$path"
    echo ""
  fi
}

read_file "CONTEXTO DE NEGÓCIO" "$BRAIN_PATH/memory/context/business-context.md"
read_file "PENDÊNCIAS" "$BRAIN_PATH/memory/context/pendencias.md"
read_file "DEADLINES" "$BRAIN_PATH/memory/context/deadlines.md"
read_file "PROJETOS" "$BRAIN_PATH/memory/projects/_index.md"
read_file "PESSOAS" "$BRAIN_PATH/memory/context/people.md"
read_file "DECISÕES ($MES)" "$BRAIN_PATH/memory/context/decisoes/$MES.md"

echo "### SESSÕES RECENTES"
for f in $(ls "$BRAIN_PATH/memory/sessions/"*.md 2>/dev/null | sort -r | head -3); do
  echo "#### $(basename $f .md)"
  cat "$f"
  echo ""
done

echo "### SKILLS DISPONÍVEIS"
echo ""
if [ -d "$BRAIN_PATH/skills" ]; then
  for skill_dir in "$BRAIN_PATH/skills"/*/; do
    skill_name=$(basename "$skill_dir")
    skill_md="$skill_dir/SKILL.md"
    if [ -f "$skill_md" ]; then
      desc=$(grep -m1 '^description:' "$skill_md" 2>/dev/null | sed 's/^description: *//' | sed 's/^"//' | sed 's/"$//' | cut -c1-110)
      [ -z "$desc" ] && desc="(sem descrição)"
      echo "- /${skill_name} — ${desc}"
    fi
  done
fi

echo ""
echo "### SUGESTÃO DE SKILL (baseado em hora/dia)"
HOUR=$(date '+%H')
DOW=$(date '+%u')
HOJE=$(date '+%Y-%m-%d')
SESSAO_HOJE="$BRAIN_PATH/memory/sessions/${HOJE}.md"

if [ "$HOUR" -ge 8 ] && [ "$HOUR" -lt 12 ]; then
  echo "🌅 Manhã — sugiro **/rotina** (cockpit do dia: emails + agenda + Top 3)"
elif [ "$DOW" = "5" ] && [ "$HOUR" -ge 16 ]; then
  echo "🌙 Sexta tarde — sugiro **/salve** (flush de fim de semana, atualiza cérebro)"
elif [ ! -f "$SESSAO_HOJE" ]; then
  echo "📋 Sessão de hoje ainda não iniciada — sugiro **/cerebro** (briefing compacto)"
else
  echo "💡 Continuação — use **/buscar-memoria** se procura algo específico, ou **/cerebro** pra revisar contexto"
fi

echo ""
echo "### INSTRUÇÃO DE APRESENTAÇÃO"
echo "Após ler tudo acima, mostre ao usuário (em 5-8 linhas no MÁXIMO):"
echo "1. Top 3 pendências 🔴 críticas (1 linha cada)"
echo "2. Deadlines da semana atual"
echo "3. Lista compacta de skills disponíveis (formato: /nome — descrição curta)"
echo "4. Sugestão de skill destacada"
echo "Não despeje todo o conteúdo — apenas o resumo. Aguarde comando do usuário."

echo "</segundo-cerebro>"
