# Instalação — Squad `eloscope-os`

Como instalar a squad em um projeto novo ou existente da Eloscope.

## O que você está instalando

- **27 agents** do Claude Code organizados em 7 áreas (command, presales, engineering, ai, geo, delivery, success)
- **15 tasks**, 4 workflows, 5 templates, 5 checklists
- **Config** (coding-standards, tech-stack, source-tree), **schemas** e **data** (ICP)
- **7 invariantes** da operação Eloscope — veja [`README.md`](./README.md)

---

## TL;DR

```bash
# No projeto destino:
bash /caminho/para/squads/eloscope-os/install.sh
```

Isso copia a squad pra `./squads/eloscope-os/` e os agents pra `./.claude/agents/eloscope-os/`. Abre no Claude Code e já dá pra invocar `@regente`, `@orion`, etc.

---

## Pré-requisitos

- **Claude Code** instalado e rodando
- **bash** (macOS/Linux nativo; Windows via WSL)
- **~10MB** de disco no destino

---

## Métodos de instalação

### Método 1 — Script local (recomendado)

Se você tem este repo clonado:

```bash
# 1. Vá pro projeto destino
cd /path/to/projeto-cliente

# 2. Rode o install.sh apontando pro diretório da squad
bash /path/to/eloscope-agents/squads/eloscope-os/install.sh
```

Ou passando o destino como arg:

```bash
bash squads/eloscope-os/install.sh /path/to/projeto-cliente
```

### Método 2 — Cópia manual

Sem script, funciona em qualquer ambiente:

```bash
# 1. Copia a squad inteira
cp -R squads/eloscope-os /path/to/projeto-cliente/squads/

# 2. Copia agents pro Claude Code enxergar
mkdir -p /path/to/projeto-cliente/.claude/agents/eloscope-os
cp -R squads/eloscope-os/agents/* /path/to/projeto-cliente/.claude/agents/eloscope-os/

# 3. Cria diretórios-padrão (opcional mas recomendado)
cd /path/to/projeto-cliente
mkdir -p projects leads prospects propostas clientes prompts \
         ai/architecture ai/contracts workflows eval/suites eval/reports \
         compliance adr
```

### Método 3 — Git subtree (pra manter sync)

Se você versiona este repo e quer puxar atualizações da squad:

```bash
# No projeto destino, 1x só:
cd /path/to/projeto-cliente
git subtree add --prefix=squads/eloscope-os \
  git@github.com:eloscope/eloscope-agents.git main --squash

# Depois, pra atualizar:
git subtree pull --prefix=squads/eloscope-os \
  git@github.com:eloscope/eloscope-agents.git main --squash
```

Observação: essa sintaxe pega o repo inteiro. Se a squad mora dentro dele (`squads/eloscope-os/`), usa `git subtree split` primeiro pra extrair só o subdir — ou simplesmente aceita o custo e roda `install.sh` manualmente.

---

## Flags do install.sh

| Flag | O que faz |
|---|---|
| `--dry-run` | Mostra o que seria feito, sem escrever nada |
| `--force` | Sobrescreve squad/agents existentes sem perguntar |
| `--agents-only` | Copia só o `.claude/agents/`, ignora squad/tasks/templates |

Exemplo:

```bash
bash install.sh /path/to/projeto --dry-run
bash install.sh /path/to/projeto --force
```

---

## Estrutura no destino

Depois de instalar:

```
projeto-cliente/
├── .claude/
│   └── agents/
│       └── eloscope-os/          ← 27 agents organizados por área
│           ├── command/regente.md
│           ├── presales/{orion,sirius,andromeda,halley}.md
│           ├── engineering/{hefesto,dedalo,...}.md
│           ├── ai/{minerva,mnemosine,...}.md
│           ├── geo/{helio,nova,cometa}.md
│           ├── delivery/{mentor,temis,clio}.md
│           └── success/elo.md
│
├── squads/
│   └── eloscope-os/              ← squad completa (tasks, templates, config)
│       ├── squad.yaml
│       ├── agents/
│       ├── tasks/
│       ├── templates/
│       ├── workflows/
│       ├── checklists/
│       ├── config/
│       ├── schemas/
│       └── data/
│
├── projects/                     ← Regente
├── leads/                        ← Órion
├── prospects/                    ← Sírius
├── propostas/                    ← Andrômeda
├── clientes/                     ← Elo
├── prompts/                      ← Logos
├── ai/
│   ├── architecture/             ← Minerva (ADRs)
│   └── contracts/                ← contratos IA versionados
├── workflows/                    ← Ariadne (n8n JSON)
├── eval/                         ← Minos
├── compliance/                   ← Pallas
└── adr/                          ← Hefesto
```

**Por que duas cópias dos agents?** O Claude Code só enxerga agents em `.claude/agents/` — então os 27 `.md` ficam lá. A cópia em `squads/eloscope-os/agents/` é a **fonte canônica** (auditada pelo `squad-validator`, versionada com a squad). Se você editar um agent, edite nos dois lugares — ou melhor, edite na squad e rode `install.sh --force` pra resincar.

---

## Precedência de agents

Se o projeto destino já tem agents em `.claude/agents/{nome}.md` (top-level) com nome conflitante, o Claude Code usa o top-level — não o da squad em `eloscope-os/`. O install.sh avisa em caso de conflito.

Pra forçar o uso do agent da squad, renomeie ou remova o top-level.

---

## Verificação pós-instalação

```bash
cd /path/to/projeto-cliente

# 1. Conta agents
find .claude/agents/eloscope-os -name "*.md" | wc -l
# Esperado: 27

# 2. Lista áreas
ls .claude/agents/eloscope-os/
# Esperado: ai command delivery engineering geo presales success

# 3. Checa a squad
cat squads/eloscope-os/squad.yaml | head -10

# 4. Abre no Claude Code e testa
#    Prompt: "@regente me dá o status dos projetos ativos"
```

---

## Atualização

Quando sair uma nova versão da squad:

```bash
cd /path/to/projeto-cliente
bash /path/to/eloscope-agents/squads/eloscope-os/install.sh --force
```

A versão atual tá em `squad.yaml` (`version: 1.0.0`). Changelog: veja commits do repo da squad.

**Atenção:** `--force` sobrescreve `squads/eloscope-os/` e `.claude/agents/eloscope-os/` no destino. Se você fez customizações locais naqueles diretórios, elas se perdem. Pra customizações por cliente, use:

- `.claude/agents/{nome}.md` (top-level) — override que vence o da squad
- `squads/eloscope-os-{cliente}/` — fork da squad com nome próprio

---

## Desinstalação

```bash
cd /path/to/projeto-cliente
rm -rf .claude/agents/eloscope-os
rm -rf squads/eloscope-os
# Diretórios de artefato (projects/, leads/, etc.) ficam — apague se quiser
```

---

## Troubleshooting

**"Claude Code não mostra os agents"**
→ Confira se os arquivos estão em `.claude/agents/` (não `.claude/agents/eloscope-os/agents/`). Rode `ls -la .claude/agents/eloscope-os/`.

**"O agent responde mas ignora minhas invariantes"**
→ Abra o arquivo do agent e confira a seção "Invariants"/"Princípios". Se estiver corrompido/incompleto, rode `install.sh --force` pra resetar.

**"Conflito: já existe um agent com esse nome"**
→ O install.sh avisa. Decide: mantém o top-level (custom) ou apaga pra usar o da squad.

**"Tenho 2 projetos e quero versões diferentes da squad"**
→ Cada projeto tem sua cópia em `squads/eloscope-os/`. Versionamento é por projeto.

---

## Suporte

- Docs: `./README.md`
- Invariantes: `./README.md#invariantes`
- Schema da squad: `./squad.yaml`
- Issues: `eloscope.coo@gmail.com`
