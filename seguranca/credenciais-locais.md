---
title: Credenciais Locais — Guia Operacional
type: politica
tags: [seguranca, credenciais, secrets, gitignore]
sensibilidade: alta
---

# Credenciais Locais — Guia Operacional

> **Regra inegociável:** tokens, API keys, senhas e qualquer credencial **NUNCA** entram em arquivo versionado. Mesmo o cérebro sendo repositório privado. Cada pessoa do time mantém suas próprias credenciais localmente na sua máquina — o git só conhece **metadados** (qual serviço, qual conta, propósito).

---

## Por que essa regra existe

1. **Repo privado hoje pode virar público amanhã** — fork errado, share por engano, vazamento de acesso a colaborador externo, conta do GitHub comprometida
2. **Token em git history é praticamente impossível de remover** — mesmo `git filter-branch` deixa rastros em forks, clones e cache do GitHub
3. **Cada membro do time usa as próprias credenciais** — Lucas tem o token X dele, Victor tem o dele, Hugo o dele. Centralizar no git força compartilhamento desnecessário e abre vetor de ataque
4. **Compliance** — usuários, OAuth, integrações pagas frequentemente proíbem em contrato compartilhar tokens em repositórios

---

## O que **PODE** ir pro git (metadados)

| Categoria | Exemplo |
|---|---|
| URL do servidor | `https://eloscope.uazapi.com` |
| Identificadores não-secretos | Instance ID `r2ee1c8d2536831`, número de telefone, project ID Supabase |
| Nome do serviço/propósito | "uazapi — Lucas pessoal — comercial" |
| Caminho da config local (referência) | "token em `~/.config/eloscope/uazapi.env`" |
| Instruções de obtenção | "pedir ao Lucas / regerar no painel uazapi" |

## O que **NUNCA** vai pro git (secrets)

| Categoria | Por quê |
|---|---|
| Tokens API (`Bearer`, JWT, OAuth, PAT) | Acesso direto ao serviço |
| API keys (Anthropic, OpenAI, Supabase service role, Stripe) | Custo + acesso |
| Senhas | Óbvio |
| Chaves privadas (`*.key`, `*.pem`) | Já no `.gitignore` |
| Connection strings com senha embutida | `postgres://user:senha@host` — separar credencial |
| Webhook URLs com token na URL | `?token=abc123` — tratar como secret |
| Refresh tokens, session cookies | Renovam acesso |

---

## Onde **guardar** credenciais (em ordem de preferência)

### 1. Gerenciador de senhas (recomendado pra time)
- **1Password / Bitwarden / Vaultwarden** — secrets compartilháveis com auditoria de acesso
- Quando um membro novo entra, recebe acesso a vault específico do papel dele
- Tokens rotacionáveis com histórico

### 2. Variáveis de ambiente no shell (single-user)
- `~/.zshrc` / `~/.bashrc` / `~/.config/eloscope/<servico>.env`
- Carregadas no boot do shell, disponíveis para qualquer script local
- **Não compartilhar arquivo nem commit acidental** — colocar em `~/` fora de qualquer repo

### 3. `.env` na raiz do projeto (já gitignored)
- `.env`, `.env.local`, `.env.*.local` — todos cobertos pelo `.gitignore` deste cérebro
- Bom pra credenciais específicas do projeto (ex.: token Supabase do elosystem-v2)
- Sempre conferir `git status` antes de commit pra garantir que não vaiu

### 4. macOS Keychain (single-user)
- Pra credenciais críticas pessoais — chamado via `security` CLI
- Acesso protegido pelo login do macOS

### 5. Config local do MCP (caso uazapi)
- MCPs como `claude-uazapi-elo` aceitam tokens via parâmetro de instalação / env var na máquina
- Cada máquina mantém sua lista local de tokens, não vai pro repo do plugin

---

## Cobertura atual do `.gitignore` deste cérebro

```gitignore
# Environment & Secrets (AIOX)
.env
.env.local
.env.*.local
*.key
*.pem

# MCP local (contém tokens)
.mcp.local.json
```

✅ Padrão `.env*` coberto · ✅ chaves coberto · ✅ MCP local coberto

**Se precisar de novo padrão** (ex.: `*.token`, `secrets/`, `credenciais-*.local.md`), editar `.gitignore` e adicionar regra **antes** de criar o arquivo.

---

## Checklist antes de commitar arquivo novo em `seguranca/`

- [ ] Tem token? → **remover**, deixar só metadados
- [ ] Tem URL com `?token=` ou `?api_key=`? → **mascarar**: `?token=<LOCAL>`
- [ ] Tem connection string com senha? → **dividir**: host/user no md, senha em `.env`
- [ ] Tem `git status` confirmando que o arquivo será trackeado conscientemente?
- [ ] Indica claramente "onde está a credencial real" (ex.: "1Password vault Eloscope/uazapi" ou "config local MCP")?

---

## Fluxo recomendado pra credencial nova

1. **Obter** token/key no serviço (painel uazapi, console OpenAI, etc.)
2. **Salvar** no seu gerenciador de senhas (1Password) com tag identificando o uso
3. **Configurar** localmente:
   - `.env` no projeto, OU
   - `~/.config/eloscope/<servico>.env` pessoal, OU
   - Parâmetro de instalação do MCP/serviço
4. **Documentar no cérebro** apenas: server URL, ID público, número, propósito, *onde* (não *qual*) está o token
5. **Compartilhar** com outro membro do time via vault do 1Password — nunca por chat/git

---

## Exemplo concreto — uazapi (referência viva)

Ver `seguranca/uazapi-instancias.md` — guarda apenas:
- URL do servidor (`https://eloscope.uazapi.com`)
- Números e IDs públicos das instâncias
- Indicação "inserir manualmente na config local do MCP `claude-uazapi-elo`"

**Tokens reais ficam:**
- 1Password (vault Eloscope / uazapi)
- Config local do MCP em cada máquina do time
- Painel uazapi (regerar se necessário)

---

## Em caso de vazamento acidental

Se um token cair em commit:

1. **Rotacionar imediatamente** — regerar no painel do serviço (token comprometido é token morto)
2. **Atualizar todas as máquinas/serviços** que usavam o token antigo
3. **Considerar limpar history** se vazou pra repo público (`git filter-repo` + force-push + avisar todos a re-clonar)
4. **Logar o incidente** em `memory/context/decisoes/YYYY-MM.md`

---

## Histórico desta política

- **18/05/2026** — política formalizada após Lucas corrigir salvamento de tokens uazapi em arquivo versionado. Tokens foram removidos antes de qualquer commit (auditado via `git log -S`). Sem rotação necessária.
