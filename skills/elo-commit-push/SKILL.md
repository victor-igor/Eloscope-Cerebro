---
name: elo-commit-push
description: >
  Padroniza o fluxo de commit e push no monorepo elosystem-v2, que usa git
  submodules (core-logic, ui-kit e os mod-*). Detecta submódulos modificados,
  mapeia em qual repositório cada push vai cair, pausa e confirma cada submódulo,
  gera commits semânticos em PT imperativo e bumpa os ponteiros no repo pai —
  seguindo a doc de arquitetura 15-documentation-and-deploy.md.
  Triggers: "commit e push", "faz commit e push", "/elo-commit-push",
  "commitar e pushar", "subir as mudanças", "push das mudanças", "sobe pro git".
---

# /elo-commit-push

Fluxo guiado de commit + push para o monorepo **elosystem-v2**. O repo é um
shell com **git submodules** — cada módulo (`packages/modules/*`), o `ui-kit` e
o `core-logic` vivem em repositórios git separados na org `eloscope-ai`. Um
commit "simples" quase sempre toca 2+ repositórios, e a ordem importa:
**primeiro commit+push dentro de cada submódulo, depois bumpa o ponteiro no
repo pai**. Esta skill executa essa coreografia pausando em cada repositório.

**Pré-requisito:** estar dentro de `~/elosystem-v2` (ou outro shell Elo OS com
`.gitmodules`), `gh`/`git` autenticados, acesso de push aos repos `eloscope-ai/*`.

**Fonte da verdade:** `docs/arquitetura/15-documentation-and-deploy.md` do repo
`eloscope-ai/elo-system-prompts` (padrão de branches, commits semânticos e
checklist de prontidão de deploy).

---

## Por que existe

No elosystem-v2 uma mudança em `packages/modules/finance/...` **não** vai pro
repo pai quando você dá `git add`/`commit` na raiz — ela mora no repo
`eloscope-ai/mod-finance`. Se você commitar só no pai, o ponteiro do submódulo
aponta pra um commit que **não existe no remoto**, e o próximo dev (ou a CI/CD)
quebra com "fatal: reference is not a tree".

Erros recorrentes que esta skill previne:
- Commitar no pai sem ter pushado o submódulo (ponteiro órfão).
- Commitar dentro do submódulo em **detached HEAD** (commit perdido, não vai
  pra branch nenhuma).
- Não saber em qual repositório cada arquivo vai parar.
- Commit direto em `main` (proibido pela doc — sempre branch + PR).
- Mensagem de commit fora do padrão semântico PT imperativo.
- Pushar sobre **base desatualizada** — push rejeitado no meio da coreografia
  (submódulo já foi, pai não) ou ponteiro sobre commit que outro dev sobrescreveu.

---

## Quando rodar

- Terminou uma feature/fix que tocou módulos (submódulos) + shell e quer subir.
- "Faz commit e push", "sobe isso pro git", "commita e pusha as mudanças".
- Antes de abrir PR (a skill roda o checklist de prontidão, mas **não abre o PR**).

Não rodar:
- Quando só quer ver o que mudou → use `git status` / `git diff` direto.
- Para abrir/mergear PR → isso é exclusividade do `@devops` (Gage); a skill
  para no push da branch e te entrega o checklist + comando sugerido de PR.
- Para reverter submódulo a versão anterior → fluxo diferente
  (`git submodule update`).

---

## Contract

**Input:** intenção em linguagem natural ("commita e pusha"), opcionalmente
um tipo/escopo de commit sugerido. Estado atual do working tree.
**Output:** commits semânticos em cada repositório afetado + push das branches;
um mapa de "o que foi pra qual repo"; o checklist de prontidão preenchido.
**Side effects:** escreve no histórico git e faz `git push` para os remotos
`eloscope-ai/*` (submódulos) e para o remoto do repo pai. **Não** abre PR,
**não** mergeia, **não** mexe em `main` diretamente.
**Guarantees:**
- Nunca commita em `main` — se a branch atual for `main`, para e pede branch.
- Nunca commita submódulo em detached HEAD — checa e resolve antes.
- **Sempre faz `fetch` e compara local × remoto (ahead/behind) antes de commitar
  cada repo** — integra o que falta antes de pushar; nunca pusha sobre base
  desatualizada e nunca usa `--force`.
- Sempre pausa e pede confirmação **por submódulo** antes de commit+push.
- Sempre pusha o submódulo **antes** de bumpar o ponteiro no pai, e **verifica
  que o commit existe no remoto** antes do bump (nunca cria ponteiro órfão).
- Em conflito de rebase, **PARA** e devolve pro usuário — nunca resolve sozinho
  nem segue a coreografia num estado meio-feito.
- Idempotente: rodar de novo com nada mudado não cria commits vazios.

---

## Tools Used

- **External / shell:** `git` (status, diff, branch, checkout, add, commit,
  push, submodule, **fetch**, **rev-list**, **rev-parse**), `gh` (criar repo de
  módulo novo no Passo 2.5; sugerir comando de PR no fim).
- **Files:** lê `.gitmodules` (mapa path→repo), `docs/arquitetura/15-*` quando
  disponível localmente.
- **MCP:** nenhum.

---

## Sincronia com o remoto (regra que vale para TODO repo)

Antes de commitar/pushar **qualquer** repositório (o pai e cada submódulo),
checar se o local tem tudo que o remoto já tem. É isso que evita push rejeitado
no meio da coreografia, perda de trabalho e ponteiro apontando pra commit que
outro dev sobrescreveu. Aplicar este helper em cada repo:

```bash
# sync_check <repo_dir>  →  imprime "no-upstream" | "behind=<n> ahead=<n>"
d="<repo_dir>"
branch=$(git -C "$d" rev-parse --abbrev-ref HEAD)
# fetch falhou (rede/auth)? PARAR — não dá pra garantir base atualizada
git -C "$d" fetch origin "$branch" --quiet 2>/dev/null || git -C "$d" fetch --quiet || { echo "FETCH-FAIL"; exit 1; }
if git -C "$d" rev-parse --abbrev-ref --symbolic-full-name @{u} >/dev/null 2>&1; then
  set -- $(git -C "$d" rev-list --left-right --count @{u}...HEAD)   # "$1"=behind  "$2"=ahead
  echo "behind=$1 ahead=$2"
else
  echo "no-upstream"   # branch nova — push -u depois
fi
```

### Matriz de decisão

| Resultado | Significado | Ação |
|---|---|---|
| `no-upstream` | Branch nova, sem rastreamento remoto | Seguir; no push usar `git push -u origin <branch>` |
| `behind=0 ahead=*` | Local tem tudo do remoto | Seguir — push será fast-forward |
| `behind>0 ahead=0` | Faltam commits do remoto, nenhum local | `git -C <d> pull --rebase` e reavaliar (em geral nada a pushar) |
| `behind>0 ahead>0` | **Divergiu** | **PAUSAR**. `git -C <d> -c rebase.autostash=true pull --rebase origin <branch>`. Conflito → PARAR e devolver pro usuário. Sem conflito → reavaliar e seguir |

- **Nunca** `git push --force` / `--force-with-lease` aqui (fora de escopo —
  divergência se resolve por rebase, com confirmação).
- `FETCH-FAIL` (rede/auth/`gh`) → **PARAR** com mensagem clara; não commitar às cegas.

---

## Passo 1 — Pré-flight (branch e localização)

1. Confirmar que está na raiz de um shell com `.gitmodules`:
   ```bash
   git rev-parse --show-toplevel && test -f .gitmodules
   ```
2. Ler a branch atual do **pai**:
   ```bash
   git -C . rev-parse --abbrev-ref HEAD
   ```
3. **Se a branch for `main` (ou `master`/`develop` protegida):** PARAR.
   A doc proíbe commit direto em `main`. Perguntar o nome da branch e o tipo:
   ```bash
   git checkout -b <prefixo>/<descricao-curta>   # feat/, fix/, refactor/, chore/, docs/, test/, hotfix/, release/
   ```
   O **prefixo da branch deve casar com o tipo do commit** que será feito.
4. Validar o prefixo da branch atual contra a tabela (Convenções). Se não bater,
   avisar mas deixar o usuário decidir.
5. **Rodar o `sync_check` no repo pai** (ver "Sincronia com o remoto"). Se
   `behind>0`, integrar antes de seguir; se divergiu ou `FETCH-FAIL`, PARAR.

---

## Passo 2 — Mapear o que mudou e em qual repositório

Construir o **mapa de destinos** dinamicamente a partir de `.gitmodules`
(nunca hardcodar — novos módulos entram sozinhos):

```bash
# Submódulos com mudanças (working tree sujo OU ponteiro/branch movido)
git submodule foreach --quiet 'test -n "$(git status --porcelain)" && echo "DIRTY  $sm_path" || true'
git status --porcelain | grep -E "^.M packages/" || true   # ponteiros já movidos
# Mapa path -> url
git config --file .gitmodules --get-regexp '^submodule\..*\.(path|url)$'
```

Apresentar uma tabela clara ANTES de tocar em qualquer coisa:

```
📍 Mapa de push — o que vai pra onde:

REPOSITÓRIO (submódulo)                        BRANCH      ARQUIVOS MUDADOS
eloscope-ai/mod-finance   (packages/modules/finance)   <branch>    N arquivos
eloscope-ai/ui-kit        (packages/ui-kit)            <branch>    N arquivos
...
eloscope-ai/<repo-pai>    (raiz / shell)               <branch>    ponteiros + M arquivos do shell

Ordem de execução: submódulos primeiro (um a um, com confirmação) → repo pai por último.
```

Referência atual dos submódulos do elosystem-v2 (validar sempre via `.gitmodules`):
`core-logic`, `ui-kit`, `mod-crm`, `mod-tasks`, `mod-scheduling`, `mod-finance`,
`mod-agents`, `mod-projects`, `mod-contacts`, `mod-campaigns`, `mod-catalog`,
`mod-real-estate` — todos em `git@github.com:eloscope-ai/*`.

---

## Passo 2.5 — Módulo fora do `.gitmodules` (criado do zero)

Pela arquitetura (`75-module-migration-ownership.md`), **todo módulo deve ser um
submódulo próprio** `eloscope-ai/mod-<nome>`. Um módulo recém-criado pode ainda
não estar registrado. Detectar pastas com mudanças em `packages/modules/*`,
`packages/ui-kit`, `packages/core-logic` que **não** aparecem no `.gitmodules`:

```bash
# Paths já registrados como submódulo
registered=$(git config --file .gitmodules --get-regexp '\.path$' | awk '{print $2}')
# Pastas de módulo presentes no working tree
for d in packages/ui-kit packages/core-logic packages/modules/*; do
  [ -d "$d" ] || continue
  echo "$registered" | grep -qx "$d" && continue
  if [ -e "$d/.git" ]; then echo "ÓRFÃO(repo próprio): $d"; else echo "SOLTO(no pai): $d"; fi
done
```

Classificar e **PARAR para confirmar com o usuário** antes de agir:

### Caso A — Pasta solta no pai (sem `.git` próprio)
Arquivos rastreados direto pelo shell. Viola a arquitetura (módulo tem que ser
submódulo). Perguntar a intenção:
- **Promover a submódulo** (recomendado) → fluxo de promoção abaixo.
- **Commitar no pai mesmo** (só se for intencional/temporário) → segue no Passo 4
  como arquivo do shell, com aviso de que fere o padrão de módulos.

### Caso B — Pasta com `.git` próprio mas não no `.gitmodules`
Repo aninhado órfão (git avisa *embedded repository*; o pai não rastreia o
conteúdo). **Sempre** formalizar como submódulo antes de prosseguir.

### Fluxo de promoção a submódulo (convenção Eloscope)
Confirmar nome do repo (`mod-<nome>`) e executar:
```bash
# 1. Criar repo remoto na org (pular se já existe)
gh repo create eloscope-ai/mod-<nome> --private

# 2. Inicializar o módulo (se não tem .git), commit inicial e push
git -C packages/modules/<nome> init -q
git -C packages/modules/<nome> add -A
git -C packages/modules/<nome> commit -q -m "feat(mod-<nome>): estrutura inicial do módulo"
git -C packages/modules/<nome> branch -M main
git -C packages/modules/<nome> remote add origin git@github.com:eloscope-ai/mod-<nome>.git
git -C packages/modules/<nome> push -u origin main

# 3. No pai: remover do tracking direto e registrar como submódulo
git rm -r --cached packages/modules/<nome>
git submodule add git@github.com:eloscope-ai/mod-<nome>.git packages/modules/<nome>
```

### Estrutura obrigatória do módulo (validar antes do commit inicial)
```
packages/modules/<nome>/
├── migrations/            ← 001_initial_schema.sql, ...
├── module.manifest.json   ← contrato de versão + migrations (name, version, migrations[])
├── src/
└── index.ts
```
Se faltar `module.manifest.json` ou `migrations/`, avisar — o `provision.sh`
depende deles para aplicar o schema em novos clientes.

Depois da promoção, o módulo entra no `.gitmodules` e segue normalmente pelo
Passo 3. O registro do submódulo + `.gitmodules` é commitado no pai no Passo 4.

---

## Passo 3 — Por submódulo: PAUSAR, confirmar, commit + push

Para **cada** submódulo modificado, na ordem do mapa, executar este ciclo e
**aguardar confirmação do usuário antes de commitar/pushar**:

### 3.a — Mostrar contexto do submódulo
```bash
git -C <path> status --short
git -C <path> --no-pager diff --stat
```

### 3.b — Garantir que NÃO está em detached HEAD
```bash
git -C <path> symbolic-ref -q HEAD || echo "DETACHED"
```
Se `DETACHED`:
- Criar/entrar numa branch antes de commitar (commit em detached vira órfão):
  ```bash
  git -C <path> checkout -b <prefixo>/<descricao>     # nova branch de trabalho
  # ou, se a mudança deve ir pra uma branch já existente:
  git -C <path> checkout <branch> && git -C <path> stash pop   # se necessário
  ```
- Nunca commitar submódulo em `main` direto (mesma regra do pai).

### 3.c — Sincronizar com o remoto (antes de commitar)
Rodar o `sync_check` neste submódulo (ver "Sincronia com o remoto"). Tratar o
resultado pela matriz de decisão — integrar se `behind>0`, PAUSAR se divergiu,
PARAR se `FETCH-FAIL`. Só prosseguir com a base atualizada.

### 3.d — Propor mensagem semântica e confirmar
Sugerir `<tipo>(<escopo>): <descrição PT imperativo>` com o escopo do módulo
(`mod-fin`, `ui-kit`, `core`, etc.). **PAUSAR** e mostrar:
```
Submódulo: eloscope-ai/mod-finance  (branch <branch>)
Commit sugerido: fix(mod-fin): corrigir conciliação de installments importados
Push: git@github.com:eloscope-ai/mod-finance.git → <branch>

Confirmar? [s / editar mensagem / pular este submódulo]
```

### 3.e — Executar (só após "s")
```bash
git -C <path> add -A
git -C <path> commit -m "<tipo>(<escopo>): <descrição>"
git -C <path> push origin <branch>      # use -u se a branch for nova (no-upstream)
```
Se o push for **rejeitado** (alguém pushou entre o `sync_check` e agora):
voltar ao 3.c (re-sincronizar) e re-pushar — nunca `--force`.
Registrar o hash + repo no resumo final. Repetir para o próximo submódulo.

---

## Passo 4 — Repo pai: bumpar ponteiros + mudanças do shell

Só depois que **todos os submódulos confirmados foram pushados** (ponteiros já
existem no remoto). No pai:

1. **Guard anti-ponteiro-órfão** — para cada submódulo bumpado, confirmar que o
   commit apontado existe no remoto **antes** de stageá-lo:
   ```bash
   sha=$(git -C <path> rev-parse HEAD)
   git -C <path> branch -r --contains "$sha" | grep -q . || echo "ÓRFÃO: $path ($sha) não está em nenhum remoto"
   ```
   Se aparecer `ÓRFÃO`, voltar e pushar o submódulo antes de prosseguir.
2. **Re-sincronizar o pai** com `sync_check` (alguém pode ter pushado no shell
   enquanto você mexia nos submódulos). Integrar/parar conforme a matriz.
3. Revisar o que entra:
   ```bash
   git status --short        # ' M packages/...' = ponteiro movido; demais = arquivos do shell
   ```
4. Stage dos ponteiros dos submódulos pushados + arquivos do shell relevantes
   (`supabase/`, `docs/`, `.planning/`, configs). **Confirmar com o usuário** o
   conjunto, não dar `add -A` cego (o working tree costuma ter ruído).
5. Commit semântico no pai. Quando o commit é só bump de ponteiros, deixar claro:
   ```bash
   git commit -m "chore(shell): atualizar ponteiros de submódulos (mod-finance, ui-kit)"
   # ou, se o pai também tem mudança funcional:
   git commit -m "feat(shell): integrar nova tela X + bump mod-finance"
   ```
6. Push da branch do pai (se rejeitado → re-sincronizar e re-pushar, nunca `--force`):
   ```bash
   git push origin <branch>     # -u na primeira vez
   ```

---

## Passo 5 — Checklist de prontidão (antes de sugerir PR)

Rodar o checklist da doc `15-documentation-and-deploy.md` e marcar o que se
aplica. **Não abrir PR** — apenas reportar e entregar o comando sugerido:

- [ ] Comentários `⚠ CONFIGURAÇÃO MANUAL` documentados em `docs/guides/`.
- [ ] `docs/PRD.md` / `docs/sessoes/<domínio>.md` atualizados se o escopo mudou.
- [ ] `packages/<módulo>/docs/CHANGELOG.md` atualizado (Regra 16).
- [ ] Se bump no `module.manifest.json`: versão do CHANGELOG local bate.
- [ ] Migrations SQL nomeadas `YYYYMMDDHHMMSS_<zona>_<módulo>_<descrição>.sql`.
- [ ] Testes E2E criados/atualizados em `docs/tests-e2e.md`.
- [ ] Branch e commits seguem o padrão semântico.

Encerrar com o comando de PR sugerido (execução fica a cargo do `@devops`):
```bash
gh pr create --base main --head <branch> --title "<tipo>(<escopo>): <título>" --body "..."
```

---

## Tratamento de falhas

| Situação | Sinal | Resposta da skill |
|---|---|---|
| Remoto à frente (local desatualizado) | `sync_check` → `behind>0 ahead=0` | `pull --rebase` no repo, reavaliar; em geral nada a pushar |
| Histórico divergiu | `sync_check` → `behind>0 ahead>0` | PAUSA → `pull --rebase` (autostash); conflito → PARA e devolve |
| Conflito de rebase/merge | `CONFLICT (...)` no rebase | PARA tudo, lista os arquivos em conflito, devolve pro usuário; **não** segue a coreografia |
| Fetch falhou (rede / auth / `gh`) | `FETCH-FAIL` | PARA antes de commitar — não dá pra garantir base atualizada |
| Push rejeitado (corrida entre devs) | `! [rejected]` / `non-fast-forward` | Re-sincroniza (sync_check) e re-pusha; **nunca** `--force` |
| Ponteiro do pai aponta pra commit sem remoto | guard `branch -r --contains` vazio | Volta, pusha o submódulo, só então bumpa no pai |
| Submódulo em detached HEAD | `symbolic-ref` falha | Cria/entra em branch antes de commitar |
| Nada mudou | working tree limpo no repo | Pula o repo — não cria commit vazio |
| Branch sem upstream | `sync_check` → `no-upstream` | `git push -u origin <branch>` |
| Módulo novo fora do `.gitmodules` | Passo 2.5 (solto/órfão) | Promove a submódulo (ou commita no pai por decisão explícita) |

Princípio geral: **em qualquer dúvida ou falha, PARAR e devolver pro usuário com
o estado exato** — nunca deixar a coreografia num estado meio-feito (submódulo
pushado + pai não, ou vice-versa).

---

## Anti-Patterns

- ❌ Commitar/`add` na raiz achando que pega mudança do submódulo — não pega;
  ela vai pro repo do submódulo, a raiz só guarda o ponteiro.
- ❌ Commitar o ponteiro do pai **antes** de pushar o submódulo → ponteiro órfão,
  CI/CD e outros devs quebram.
- ❌ Commitar dentro de um submódulo em **detached HEAD** → commit órfão, perdido
  no próximo `submodule update`.
- ❌ `git add -A` no pai sem revisar → arrasta ruído de working tree e ponteiros
  de submódulos que você não pushou.
- ❌ Commit direto em `main` (pai ou submódulo).
- ❌ Commitar um módulo novo (`packages/modules/<nome>`) direto no pai como pasta
  solta em vez de promover a submódulo `eloscope-ai/mod-<nome>` (viola a arquitetura).
- ❌ Deixar um repo aninhado órfão (`.git` próprio sem entry no `.gitmodules`) —
  o pai não rastreia o conteúdo e o próximo clone vem vazio.
- ❌ Abrir/mergear PR aqui — isso é do `@devops` (Gage).

---

## Regras

- ✅ Submódulo **sempre antes** do pai. Push do submódulo **antes** do bump do ponteiro.
- ✅ Módulo fora do `.gitmodules` → classificar (solto / órfão) e promover a
  submódulo antes de commitar, salvo decisão explícita do usuário (Passo 2.5).
- ✅ **Pausar e confirmar por submódulo** — nunca commitar/pushar todos em lote silencioso.
- ✅ Garantir branch (não-detached, não-`main`) em cada repo antes de commitar.
- ✅ Mostrar o **mapa de destinos** (qual arquivo → qual repo) antes de agir.
- ✅ Mensagem semântica em **PT imperativo**, minúscula inicial, sem ponto final,
  com escopo do módulo.
- ✅ Prefixo da branch casa com o tipo do commit.
- ✅ Parar no push — entregar checklist + comando de PR, sem abrir PR.

---

## Convenções

### Tipos de commit / prefixo de branch
| Tipo | Quando | Branch |
|---|---|---|
| `feat` | Nova funcionalidade | `feat/` |
| `fix` | Correção de bug | `fix/` |
| `refactor` | Refatoração sem mudar comportamento | `refactor/` |
| `chore` | Manutenção (deps, config, CI, bump de ponteiros) | `chore/` |
| `docs` | Só documentação | `docs/` |
| `test` | Só testes | `test/` |
| `style` | Formatação sem lógica | — |
| `perf` | Performance | — |
| `ci` | Pipelines CI/CD | — |
| `hotfix` | Correção emergencial em produção | `hotfix/` |
| `release` | Preparar versão | `release/` |

### Escopos recomendados
`core`, `mod-crm`, `mod-fin`, `mod-campaigns`, `mod-channels`, `ext-olist`,
`supabase`, `shell`, `ui-kit`, `infra`, `docs`.

### Formato da mensagem
```
<tipo>(<escopo>): <descrição em PT, imperativo>

[corpo opcional: contexto, motivação, breaking changes]

[rodapé opcional: ⚠ CONFIGURAÇÃO MANUAL: ...; Closes #issue]
```
Breaking change → `!` após o escopo: `feat(mod-crm)!: remover campo legado`.
