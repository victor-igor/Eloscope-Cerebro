# Como Usar — Eloscope Cerebro

Guia de setup para qualquer pessoa que clonar este repositório.

---

## 1. Clonar o repositório

```bash
git clone git@github.com:victor-igor/Eloscope-Cerebro.git
```

Pode clonar em qualquer pasta. Exemplo:
```bash
~/Documents/Eloscope-Cerebro
```

---

## 2. Configurar SECOND_BRAIN_PATH

Adicione no seu `~/.zshrc` (ou `~/.bashrc`):

```bash
export SECOND_BRAIN_PATH="/caminho/onde/voce/clonou/Eloscope-Cerebro"
```

Exemplo:
```bash
export SECOND_BRAIN_PATH="$HOME/Documents/Eloscope-Cerebro"
```

Depois recarregue:
```bash
source ~/.zshrc
```

---

## 3. Instalar as Skills no Claude Code

Copie as skills para o diretório global do Claude Code:

```bash
cp -r "$SECOND_BRAIN_PATH/skills/"* ~/.claude/skills/
```

As skills disponíveis após a instalação:

| Skill | O que faz |
|-------|-----------|
| `/cerebro` | Carrega briefing completo da sessão |
| `/salve` | Salva decisões e log da sessão no git |
| `/rotina` | Cockpit do dia — pendências + deadlines |
| `/carrossel-eloscope` | Skill de criação de carrosseis |

---

## 4. Instalar os Squads (opcional)

Se quiser usar os squads com o framework AIOX:

```bash
cp -r "$SECOND_BRAIN_PATH/squads/"* /caminho/do/seu/projeto/squads/
```

> Os squads requerem o framework AIOX instalado no projeto.

---

## 5. Configurar o hook de SessionStart (opcional)

Para o cerebro carregar automaticamente ao iniciar o Claude Code, adicione em `~/.claude/settings.json`:

```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [{
          "type": "command",
          "command": "bash \"$SECOND_BRAIN_PATH/scripts/brain-boot.sh\"",
          "timeout": 20,
          "statusMessage": "Sincronizando segundo cérebro..."
        }]
      }
    ]
  }
}
```

---

## 6. Fluxo de trabalho colaborativo

Cada pessoa tem seu próprio `SECOND_BRAIN_PATH` apontando para onde clonou. O conteúdo dos arquivos `.md` não tem paths absolutos — tudo funciona via a variável de ambiente.

```
Pessoa A: SECOND_BRAIN_PATH=~/Documents/Eloscope-Cerebro
Pessoa B: SECOND_BRAIN_PATH=~/projetos/Eloscope-Cerebro
```

### Antes de commitar
```bash
cd $SECOND_BRAIN_PATH
git pull --rebase origin main   # sempre puxar antes de commitar
git add .
git commit -m "sessao: [resumo]"
git push origin main
```

### Se houver conflito
```bash
git pull --rebase origin main
git push origin main
```

---

## Estrutura do repositório

```
Eloscope-Cerebro/
├── memory/          ← contexto operacional (pendências, decisões, sessões)
├── empresa/         ← projetos e contexto da empresa
├── areas/           ← áreas funcionais (vendas, marketing, design...)
├── squads/          ← agentes e squads de IA
├── skills/          ← skills do Claude Code (/salve, /cerebro, /rotina...)
├── agentes/         ← registry e configuração dos agentes
├── seguranca/       ← permissões por agente
├── CLAUDE.md        ← instruções para o Claude Code
├── PROPAGATION.md   ← protocolo de atualização dos arquivos
└── MAPA.md          ← índice navegável
```

---

*Eloscope — 2026*
