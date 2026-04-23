#!/usr/bin/env bash
# Auto-sync — chamado pelo Stop hook quando há arquivos alterados
# Faz pull --rebase + commit + push silenciosamente

BRAIN="${SECOND_BRAIN_PATH:-/Users/lucasnegreiro/Documents/Projetos/Eloscope-Cerebro}"

cd "$BRAIN" || exit 0

# Nada para sincronizar? Sair silenciosamente
git status --porcelain 2>/dev/null | grep -q . || exit 0

# Pull antes de commitar (evita rejected)
git pull --rebase origin main -q 2>/dev/null || true

# Adicionar tudo
git add -q .

# Só commitar se houver diff staged
git diff --cached --quiet && exit 0

git commit -q -m "auto: sync $(date '+%Y-%m-%dT%H:%M')" 2>/dev/null

# Push
git push origin main -q 2>/dev/null || true
