---
name: contract-patterns
description: Padrões de cláusulas obrigatórias para contratos de serviços de IA/tecnologia da Eloscope. Extraídos de contratos reais e validados. Referência para Thêmis na análise contratual.
area: legal
---

# Padrões de Cláusulas — Contratos Eloscope

> Checklist de cláusulas que Thêmis deve verificar em TODO contrato de serviço de IA/tecnologia.
> Extraído de contratos reais assinados + boas práticas jurídicas B2B.

## Cláusulas obrigatórias por categoria

### 1. Natureza da obrigação
- [ ] **Obrigação de MEIO, não de resultado** — Contratada se compromete com melhor esforço técnico, não com resultado comercial
- [ ] **IA não garante resultado** — sistema é ferramenta de apoio, resultados dependem de fatores humanos/mercado
- [ ] **IA pode errar** — Contratante reconhece que IA pode gerar respostas inadequadas/imprecisas; supervisão é do Contratante

### 2. Limitações técnicas
- [ ] **Dependência de terceiros** — sistema depende de APIs externas (OpenAI, servidores, provedores)
- [ ] **Instabilidades externas** — não geram direito a desconto, multa ou rescisão
- [ ] **Compatibilidade futura não garantida** — atualizações de plataformas podem gerar custos adicionais
- [ ] **Custos de APIs são do Contratante** — separar claramente

### 3. Dependências do Contratante
- [ ] **Obrigação de fornecer info/acessos** — com prazo (ex: 5 dias úteis)
- [ ] **Participação em reuniões** — Contratante deve comparecer a discovery/validação/treinamento
- [ ] **Aprovação em prazo** — templates/configurações aprovados em X dias úteis
- [ ] **Suspensão de prazos** — se Contratante não cumprir dependências, prazos ficam suspensos sem penalidade ao Contratado

### 4. Obrigações formais
- [ ] **Obrigações do Contratante** — lista detalhada (info, participação, pagamento, sigilo, conformidade legal)
- [ ] **Obrigações do Contratado** — lista detalhada (implementar, cronograma, suporte, LGPD, treinamento, backup)

### 5. Pagamento robusto
- [ ] **Multa + juros + correção** — 2% multa, 1% a.m. juros, IPCA
- [ ] **Cláusula resolutiva** — suspensão por inadimplência (prazo definido: 10-15 dias)
- [ ] **Vencimento antecipado** — inadimplência >30 dias = todas parcelas vencem
- [ ] **Confissão de dívida** — valores reconhecidos como dívida líquida, certa e exigível
- [ ] **Título executivo** — 2 testemunhas OU assinatura digital (CPC art. 784, III)

### 6. Limitação de responsabilidade
- [ ] **Limite de danos** — responsabilidade limitada ao valor pago
- [ ] **Exclusão de danos indiretos** — lucros cessantes, perda de oportunidade, dano reputacional
- [ ] **Exceção dolo/culpa grave** — limitação não se aplica nesses casos
- [ ] **Perda de dados é do Contratante** — backup é responsabilidade dele

### 7. Proteções operacionais
- [ ] **Caso fortuito e força maior** — inclui instabilidades de internet, APIs, energia, ataques cyber
- [ ] **Comunicações oficiais** — via email, com domicílio eletrônico válido
- [ ] **Aceite tácito** — silêncio por X dias úteis = aceite
- [ ] **Prevalência contratual** — contrato > propostas/emails/conversas

### 8. Formalidades
- [ ] **Assinatura digital válida** — MP 2.200-2/2001 e Lei 14.063/2020
- [ ] **Legislação aplicável explícita** — B2B, CC, não CDC (salvo vulnerabilidade)
- [ ] **Foro preenchido** — comarca definida
- [ ] **Testemunhas** — 2, com nome e CPF

## Adaptação por porte de contrato

| Porte | Ticket | Cláusulas recomendadas |
|-------|--------|----------------------|
| **Micro** | < R$2k | Essenciais (1-4 de cada categoria) |
| **Pequeno** | R$2k-10k | Todas acima |
| **Médio** | R$10k-50k | Todas + SLA + reembolso proporcional por módulo |
| **Grande** | > R$50k | Todas + revisão jurídica externa obrigatória |

O contrato Bravo (R$3.900) é porte **Pequeno** — precisa de todas as cláusulas acima.
