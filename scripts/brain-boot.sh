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

echo "</segundo-cerebro>"
