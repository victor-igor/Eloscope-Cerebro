---
tipo: referencia
tags: [design, skills, ui, frontend, brandbook]
atualizado: 2026-04-29
---

# Skills de Design — Menu de Referência

Skills do pacote [taste-skill](https://github.com/Leonxlnx/taste-skill), instaladas em `~/Eloscope-IA/.agents/skills/`.

> Invoke com `/nome-da-skill` antes de pedir qualquer tarefa de design ou UI.

---

## Identidade Visual / Branding

### `/brandkit`
**Para que serve:** Gera conceitos de identidade visual — logo systems, brand boards, decks de identidade, paletas, mockups de marca. Estilo premium: minimalista, dark-tech, editorial, cinematic.

**Usar quando:** criar ou revisar identidade de marca, montar brand board, gerar variações de logo, preparar apresentação visual de marca.

**Não usar para:** desenvolvimento de componentes de UI, landing pages, código CSS.

---

## Referência e Direção Visual

### `/high-end-visual-design`
**Para que serve:** Aplica padrões de agência premium ao design — fontes certas, espaçamento, sombras, estrutura de cards, animações. Bloqueia padrões genéricos de AI (aquele look "barato" de Tailwind padrão).

**Usar quando:** qualquer tarefa de UI/web onde o resultado precisa parecer caro e intencional, não genérico.

**Não usar para:** protótipos rápidos onde fidelidade visual não importa.

---

### `/gpt-taste`
**Para que serve:** Direção de UX/UI com GSAP avançado. Força estrutura AIDA, tipografia editorial larga, grids bento sem gap, ScrollTriggers com pin/stack/scrub, micro-imagens inline, espaçamento generoso entre seções.

**Usar quando:** landing pages com animações GSAP, sites editoriais, páginas de produto com scroll storytelling.

**Não usar para:** apps simples, dashboards, interfaces sem animação.

---

### `/stitch-design-taste`
**Para que serve:** Gera um `DESIGN.md` semântico que serve como spec de design system para agentes — tipografia, cor, layout assimétrico, micro-animações, performance CSS.

**Usar quando:** iniciar um projeto do zero e querer definir o design system antes de codar. Ótimo para passar como contexto para outros agentes.

**Não usar para:** projetos já em andamento com design system definido.

---

## UI / Frontend (Geração de Código)

### `/design-taste-frontend`
**Para que serve:** Engenheiro sênior de UI/UX. Corrige vieses padrão de LLM em interfaces — regras baseadas em métricas, arquitetura de componentes, CSS com aceleração de hardware, design engineering balanceado.

**Usar quando:** implementar componentes de UI, refatorar CSS, garantir que o código gerado siga padrões reais de design (não o padrão genérico de AI).

**Não usar para:** geração de imagens, identidade de marca, documentação.

---

### `/minimalist-ui`
**Para que serve:** Interfaces editoriais clean — paleta monocromática quente, contraste tipográfico, grids bento flat, pastéis suaves. Zero gradientes, zero sombras pesadas.

**Usar quando:** UI com estética editorial, minimalista, sóbria. Blogs, portfólios, dashboards clean.

**Não usar para:** interfaces dark-tech, brutalismo, estilos com muito contraste ou animação.

---

### `/industrial-brutalist-ui`
**Para que serve:** Interfaces mecânicas brutalistas — tipografia suíça + estética de terminal militar. Grids rígidos, contraste extremo de escala tipográfica, cor utilitária, efeitos de degradação analógica.

**Usar quando:** dashboards de dados, portfólios alternativos, sites editoriais que precisam parecer "plantas técnicas classificadas".

**Não usar para:** marcas comerciais, interfaces amigáveis, B2C convencional.

---

## Geração de Imagens de UI (Referência Visual)

### `/imagegen-frontend-web`
**Para que serve:** Gera imagens de referência de design para sites — hero sections, landing pages, comps multi-seção. Combinação variada para evitar estética repetitiva de AI. Para desenvolvedores usarem como referência fiel de implementação.

**Usar quando:** querer ver como a página vai ficar ANTES de codar, ou passar referência visual para outro agente implementar.

**Não usar para:** geração de código direto.

---

### `/imagegen-frontend-mobile`
**Para que serve:** Gera conceitos de telas de app mobile — iOS, Android, cross-platform. Hierarquia clean, consistência entre telas, mockup de iPhone/Android com frame sutil. Só gera imagens, não código.

**Usar quando:** conceptualizar fluxos de app mobile, apresentar ideia de UI para cliente, direção de arte mobile.

**Não usar para:** geração de código React Native / Flutter.

---

### `/image-to-code`
**Para que serve:** Gera imagem de design, analisa profundamente, depois implementa o código para bater com a imagem. Evita cards dentro de cards, hero limpo e legível, imagens grandes e seccionadas.

**Usar quando:** querer o ciclo completo — design → código — em uma só chamada, com fidelidade visual alta.

**Não usar para:** quando já tem o design pronto e só precisa do código.

---

## Utilitário

### `/full-output-enforcement`
**Para que serve:** Elimina truncamentos. Força o modelo a gerar código completo, sem placeholders ("// resto do código aqui"), sem omissões. Divide em partes limpas se necessário.

**Usar quando:** pedir geração de arquivos longos (HTML completo, CSS inteiro, componentes grandes) e não querer output cortado.

**Usar sempre que:** o output for código que precisa ser colado diretamente em produção.

---

### `/redesign-existing-projects`
**Para que serve:** Faz upgrade de sites/apps existentes para qualidade premium. Audita o design atual, identifica padrões genéricos de AI, aplica padrões de alto nível sem quebrar funcionalidade. Funciona com qualquer framework CSS.

**Usar quando:** pegar um projeto já feito (inclusive gerado por AI) e elevar a qualidade visual sem reescrever do zero.

**Não usar para:** projetos novos (use `/high-end-visual-design` ou `/design-taste-frontend`).

---

## Combinações Recomendadas

| Tarefa | Skills a combinar |
|--------|------------------|
| Landing page nova do zero | `/gpt-taste` + `/full-output-enforcement` |
| Componente UI premium | `/design-taste-frontend` + `/high-end-visual-design` |
| Identidade visual / brandbook | `/brandkit` |
| Redesign de site existente | `/redesign-existing-projects` + `/full-output-enforcement` |
| Conceptualizar app mobile | `/imagegen-frontend-mobile` |
| Ver referência antes de codar | `/imagegen-frontend-web` → depois `/design-taste-frontend` |
| Design system do zero | `/stitch-design-taste` |
| Dashboard austero / técnico | `/industrial-brutalist-ui` |
| Interface editorial clean | `/minimalist-ui` |
