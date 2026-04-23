---
name: sync
description: >
  Sincronização rápida com git — pull + commit + push sem análise de sessão.
  Use quando quer salvar alterações sem fazer o flush completo do /salve.
  Triggers: "sync", "/sync", "sincronizar", "git sync", "atualiza git", "push".
---

# /sync

Sincronização leve com git. Sem análise de sessão, sem logs de contexto — só o push.

**Quando usar:**
- Depois de alterações pontuais que não precisam do flush completo do `/salve`
- Para garantir que o remoto está atualizado antes de continuar
- O Stop hook usa `scripts/auto-sync.sh` automaticamente (silencioso)

---

## Passo 1 — Verificar

```bash
cd "$SECOND_BRAIN_PATH"
git status --porcelain
```

Se vazio → responder "Repositório já sincronizado." e parar.

---

## Passo 2 — Pull rebase

```bash
git pull --rebase origin main
```

Se falhar com conflito → parar e informar o usuário.

---

## Passo 3 — Commit

```bash
git add .
git commit -m "sync: [o que mudou em 1 linha]"
```

Descrever brevemente o que foi alterado (ex: "sync: proposta Bravo + pendências atualizadas").

---

## Passo 4 — Push

```bash
git push origin main
```

Se falhar:
```bash
git pull --rebase origin main && git push origin main
```

---

## Passo 5 — Confirmar

```
✓ Sync — DD/MM/YYYY HH:MM
  Pushed para origin/main.
```

---

## Regras
- Nunca `push --force`
- Conflito → parar e informar o usuário
- Tom direto, sem preâmbulo
