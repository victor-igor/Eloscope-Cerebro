#!/usr/bin/env bash
# install.sh — Instala a squad eloscope-os em um projeto destino.
#
# Uso:
#   ./install.sh                      # instala no diretório atual (./)
#   ./install.sh /path/to/project     # instala em um projeto específico
#   ./install.sh --dry-run            # mostra o que seria feito sem executar
#   ./install.sh --force              # sobrescreve agents existentes sem perguntar
#   ./install.sh --agents-only        # copia só os agents (.claude/agents/), ignora resto
#
# O que faz:
#   1. Copia squads/eloscope-os/ → TARGET/squads/eloscope-os/
#   2. Copia agents preservando áreas → TARGET/.claude/agents/eloscope-os/{area}/
#   3. Cria diretórios-padrão do source-tree (projects/, leads/, adr/, etc.)
#   4. Valida que Claude Code vai enxergar os 27 agents

set -euo pipefail

# ---------- config ----------
SQUAD_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SQUAD_NAME="eloscope-os"
SQUAD_VERSION="$(grep -E '^version:' "$SQUAD_DIR/squad.yaml" | awk '{print $2}')"
EXPECTED_AGENTS=27

# ---------- args ----------
TARGET_DIR="${1:-$(pwd)}"
DRY_RUN=0
FORCE=0
AGENTS_ONLY=0

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    --force) FORCE=1 ;;
    --agents-only) AGENTS_ONLY=1 ;;
  esac
done

# Se o primeiro arg começa com --, trata como flag e usa pwd como target
if [[ "${1:-}" == --* ]]; then
  TARGET_DIR="$(pwd)"
fi

TARGET_DIR="$(cd "$TARGET_DIR" && pwd)"

# ---------- helpers ----------
log()   { printf "\033[1;36m[install]\033[0m %s\n" "$*"; }
warn()  { printf "\033[1;33m[warn]\033[0m %s\n" "$*"; }
error() { printf "\033[1;31m[error]\033[0m %s\n" "$*" >&2; }
ok()    { printf "\033[1;32m[ok]\033[0m %s\n" "$*"; }

run() {
  if [[ $DRY_RUN -eq 1 ]]; then
    printf "  \033[90m(dry-run)\033[0m %s\n" "$*"
  else
    eval "$@"
  fi
}

confirm() {
  local prompt="$1"
  if [[ $FORCE -eq 1 ]]; then return 0; fi
  read -r -p "$prompt [y/N] " resp
  [[ "$resp" =~ ^[Yy]$ ]]
}

# ---------- validation ----------
log "Squad: $SQUAD_NAME v$SQUAD_VERSION"
log "Origem: $SQUAD_DIR"
log "Destino: $TARGET_DIR"
[[ $DRY_RUN -eq 1 ]] && log "Modo: DRY-RUN (nada será escrito)"
[[ $AGENTS_ONLY -eq 1 ]] && log "Modo: AGENTS-ONLY (só .claude/agents/)"
echo

if [[ ! -d "$SQUAD_DIR/agents" ]]; then
  error "Squad mal formada: $SQUAD_DIR/agents não existe"
  exit 1
fi

if [[ "$TARGET_DIR" == "$SQUAD_DIR" ]] || [[ "$TARGET_DIR" == "$SQUAD_DIR/.."* ]]; then
  error "Target não pode ser a própria squad ou seu pai. Escolha outro diretório."
  exit 1
fi

# Conta agents de origem
SOURCE_COUNT=$(find "$SQUAD_DIR/agents" -name "*.md" -type f | wc -l | tr -d ' ')
if [[ "$SOURCE_COUNT" != "$EXPECTED_AGENTS" ]]; then
  warn "Squad tem $SOURCE_COUNT agents, esperado $EXPECTED_AGENTS (não é bloqueante, mas investigue)"
fi

# ---------- step 1: copiar squad completa ----------
if [[ $AGENTS_ONLY -eq 0 ]]; then
  DEST_SQUAD="$TARGET_DIR/squads/$SQUAD_NAME"
  log "Step 1/3: copiando squad → $DEST_SQUAD"

  if [[ -d "$DEST_SQUAD" ]]; then
    EXISTING_VERSION="$(grep -E '^version:' "$DEST_SQUAD/squad.yaml" 2>/dev/null | awk '{print $2}' || echo 'desconhecida')"
    warn "Squad já existe no destino (versão $EXISTING_VERSION)"
    if ! confirm "Sobrescrever?"; then
      error "Abortado pelo usuário"
      exit 1
    fi
    run "rm -rf '$DEST_SQUAD'"
  fi

  run "mkdir -p '$TARGET_DIR/squads'"
  run "cp -R '$SQUAD_DIR' '$DEST_SQUAD'"
  ok "Squad copiada"
  echo
fi

# ---------- step 2: copiar agents pro .claude/agents/ ----------
CLAUDE_AGENTS="$TARGET_DIR/.claude/agents/$SQUAD_NAME"
log "Step 2/3: instalando agents → $CLAUDE_AGENTS/"

if [[ -d "$CLAUDE_AGENTS" ]]; then
  warn "Agents da squad já instalados em $CLAUDE_AGENTS"
  if ! confirm "Sobrescrever?"; then
    log "Pulando step 2"
  else
    run "rm -rf '$CLAUDE_AGENTS'"
  fi
fi

run "mkdir -p '$CLAUDE_AGENTS'"

# Checa colisão com agents top-level existentes (conflito de nome)
if [[ -d "$TARGET_DIR/.claude/agents" ]] && [[ $DRY_RUN -eq 0 ]]; then
  while IFS= read -r agent_file; do
    agent_name="$(basename "$agent_file")"
    if [[ -f "$TARGET_DIR/.claude/agents/$agent_name" ]]; then
      warn "Conflito de nome: $TARGET_DIR/.claude/agents/$agent_name já existe (top-level)"
      warn "  → Claude Code vai usar o top-level, não o da squad. Renomeie um dos dois se quiser o da squad."
    fi
  done < <(find "$SQUAD_DIR/agents" -name "*.md" -type f)
fi

# Copia preservando estrutura de áreas (Claude Code lê recursivo)
for area_dir in "$SQUAD_DIR/agents"/*/; do
  area_name="$(basename "$area_dir")"
  run "mkdir -p '$CLAUDE_AGENTS/$area_name'"
  run "cp '$area_dir'*.md '$CLAUDE_AGENTS/$area_name/'"
done

INSTALLED_COUNT=$(find "$CLAUDE_AGENTS" -name "*.md" -type f 2>/dev/null | wc -l | tr -d ' ')
if [[ $DRY_RUN -eq 0 ]]; then
  if [[ "$INSTALLED_COUNT" == "$EXPECTED_AGENTS" ]]; then
    ok "$INSTALLED_COUNT agents instalados"
  else
    error "Esperado $EXPECTED_AGENTS agents, instalados $INSTALLED_COUNT"
    exit 1
  fi
fi
echo

# ---------- step 3: diretórios-padrão do source-tree ----------
if [[ $AGENTS_ONLY -eq 0 ]]; then
  log "Step 3/3: criando diretórios-padrão do source-tree"

  DIRS=(
    "projects"       # Regente (kickoff, status, handoffs)
    "leads"          # Órion/Atlas
    "prospects"      # Sírius
    "propostas"      # Andrômeda
    "clientes"       # Elo (CS)
    "prompts"        # Logos
    "ai/architecture"
    "ai/contracts"
    "workflows"      # Ariadne (n8n JSON)
    "eval/suites"    # Minos
    "eval/reports"
    "compliance"     # Pallas
    "adr"            # Hefesto
  )

  for d in "${DIRS[@]}"; do
    if [[ ! -d "$TARGET_DIR/$d" ]]; then
      run "mkdir -p '$TARGET_DIR/$d'"
    fi
  done
  ok "Diretórios-padrão prontos"
  echo
fi

# ---------- summary ----------
if [[ $DRY_RUN -eq 1 ]]; then
  log "DRY-RUN concluído. Nenhum arquivo foi escrito."
  exit 0
fi

cat <<EOF

╔══════════════════════════════════════════════════════════════╗
║  ✅ Squad $SQUAD_NAME v$SQUAD_VERSION instalada               ║
╚══════════════════════════════════════════════════════════════╝

Destino: $TARGET_DIR

Agents instalados ($INSTALLED_COUNT):
  command/     → regente
  presales/    → orion, sirius, andromeda, halley
  engineering/ → hefesto, dedalo, pigmento, argos, vesta,
                 gaia, cerbero, ariadne, hermes, lyra
  ai/          → minerva, mnemosine, logos, minos, pallas
  geo/         → helio, nova, cometa
  delivery/    → mentor, temis, clio
  success/     → elo

Próximos passos:
  1. cd $TARGET_DIR
  2. Abra o projeto no Claude Code
  3. Invoque um agent: "@regente kickoff do projeto X"
  4. Se quiser checar: ls .claude/agents/$SQUAD_NAME/

Docs da squad: $TARGET_DIR/squads/$SQUAD_NAME/README.md
Invariantes: veja o README — 7 regras não-negociáveis.

EOF
