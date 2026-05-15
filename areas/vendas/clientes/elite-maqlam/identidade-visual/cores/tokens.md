# Tokens e Componentes — Identidade Visual Maqlam

> Fonte da verdade: `src/index.css` + `DESIGN_SYSTEM.md`

---

## Border Radius

| Token | Valor | Pixel | Uso |
|---|---|---|---|
| `--radius` | `0.5rem` | 8px | Base do sistema |
| `rounded-lg` | `0.5rem` | 8px | Botões, inputs, badges |
| `rounded-xl` | `0.75rem` | 12px | Cards, painéis, modais |
| `rounded-full` | `9999px` | — | Botões de ícone, avatares, pills |
| `rounded-md` | `0.375rem` | 6px | Elementos menores (tags) |

---

## Sombras

| Classe Tailwind | Uso |
|---|---|
| `shadow-sm` | Cards padrão, botões primários |
| `shadow-md` | Painéis elevados, dropdowns |
| `shadow-lg` | Modais, tooltips |
| Sem sombra | Elementos embutidos no fundo |

---

## Espaçamento (Padrões de Layout)

| Contexto | Valor | Classe |
|---|---|---|
| Padding de página | 24px | `p-6` |
| Gap entre seções | 24px | `space-y-6` |
| Padding de card | 24px | `p-6` |
| Gap entre cards | 16px | `gap-4` |
| Gap em headers | 12px | `gap-3` |
| Gap com ícone + texto | 8px | `gap-2` |
| Max-width do conteúdo | 1600px | `max-w-[1600px] mx-auto` |

---

## Ícones

**Biblioteca:** Lucide React

| Tamanho | Classe | Uso |
|---|---|---|
| 16px | `w-4 h-4` | Ícones dentro de botões com texto |
| 20px | `w-5 h-5` | Botões apenas com ícone |
| 24px | `w-6 h-6` | Ícones em títulos de página (H1) |

**Cor padrão de ícones:**
- Ativo / destaque: `text-primary`
- Inativo / suporte: `text-gray-400`
- Em botão branco: `text-gray-500`
- Em botão primário: `text-white`

---

## Botões

### Primary
```tsx
<button className="bg-primary hover:bg-primary/90 text-white font-medium text-sm px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 transition-colors">
  <Icon className="w-4 h-4" />
  Ação Principal
</button>
```
| Propriedade | Valor |
|---|---|
| Background | `#0E0069` → hover `#0E0069/90` |
| Texto | `white` |
| Peso | `font-medium` |
| Padding | `px-4 py-2` |
| Radius | `rounded-lg` |
| Sombra | `shadow-sm` |

---

### Secondary
```tsx
<button className="bg-white dark:bg-card-dark border border-gray-200 dark:border-border-dark hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300 font-medium text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
  <Icon className="w-4 h-4" />
  Ação Secundária
</button>
```

---

### Ghost / Icon Button
```tsx
<button className="text-gray-400 hover:text-primary hover:bg-gray-100 dark:hover:bg-white/10 rounded-full p-2 transition-colors">
  <Icon className="w-5 h-5" />
</button>
```

---

### Danger
```tsx
<button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium text-sm px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
  <Icon className="w-4 h-4" />
  Excluir
</button>
```

---

## Cards

### Card Padrão
```tsx
<div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark shadow-sm">
  <div className="p-6">
    {/* conteúdo */}
  </div>
</div>
```

### Card com Header
```tsx
<div className="bg-white dark:bg-card-dark rounded-xl border border-gray-200 dark:border-border-dark shadow-sm">
  <div className="p-6 border-b border-gray-200 dark:border-border-dark">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Título</h3>
  </div>
  <div className="p-6">
    {/* conteúdo */}
  </div>
</div>
```

---

## Inputs

### Input Padrão
```tsx
<input
  className="w-full px-4 py-2 bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-gray-900 dark:text-white placeholder:text-gray-400"
/>
```

### Select
```tsx
<select className="w-full px-4 py-2 bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-gray-900 dark:text-white" />
```

---

## Badges / Pills

| Tipo | Classes |
|---|---|
| Default / Neutro | `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium px-2 py-0.5 rounded-full` |
| Primário | `bg-primary/10 text-primary text-xs font-medium px-2 py-0.5 rounded-full` |
| Sucesso | `bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium px-2 py-0.5 rounded-full` |
| Aviso | `bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium px-2 py-0.5 rounded-full` |
| Erro | `bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-medium px-2 py-0.5 rounded-full` |
| Info | `bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium px-2 py-0.5 rounded-full` |

---

## Ambient Background (fundo premium)

Aplicado nas páginas principais para efeito de profundidade:

```tsx
<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
  <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[120px]" />
</div>
```

> O container de conteúdo deve ter `relative z-10` para ficar sobre os blobs.

---

## Layout de Página (estrutura obrigatória)

```tsx
<div className="min-h-screen bg-gray-50 dark:bg-background-dark p-6 space-y-6">
  <div className="mx-auto max-w-[1600px]">

    {/* Header */}
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
          <Icon className="w-6 h-6 text-primary" />
          Título da Página
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Descrição funcional.
        </p>
      </div>
      <div className="flex items-center gap-3">
        {/* Ações */}
      </div>
    </header>

    {/* Conteúdo */}

  </div>
</div>
```

---

## Tabelas

```tsx
<table className="w-full text-sm">
  <thead>
    <tr className="border-b border-gray-200 dark:border-border-dark">
      <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        Coluna
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-100 dark:divide-border-dark">
    <tr className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
      <td className="py-3 px-4 text-gray-900 dark:text-white">
        Dado
      </td>
    </tr>
  </tbody>
</table>
```

---

## Scrollbar Customizada

Já aplicada globalmente via `src/index.css`:

| Propriedade | Light | Dark |
|---|---|---|
| Largura / altura | `6px` | `6px` |
| Track | `transparent` | `transparent` |
| Thumb | `#333333` | `#444444` |
| Border radius do thumb | `3px` | `3px` |

---

## Referências de Implementação

| Componente | Arquivo |
|---|---|
| Lista / Tabela completa | `src/features/sales/components/PedidosList.tsx` |
| Dashboard com cards e métricas | `src/features/sales/components/SalesGoalsPage.tsx` |
| Variáveis CSS completas | `src/index.css` |
| Design system completo | `DESIGN_SYSTEM.md` |
