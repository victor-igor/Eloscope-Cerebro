---
tipo: nota-reuniao
categoria: alinhamento-cliente
cliente: ReabilitaCão
data: 2026-05-07
operador: Victor
fonte: areas/vendas/clientes/reabilita-cao/reuniões/transcrições/alinhamento-7-05
---

# Reunião de Alinhamento — ReabilitaCão (07/05/2026)

## TL;DR
- Reunião leve e produtiva (~55 min), clima de parceria. Cliente satisfeito com as últimas entregas (transcrição/resumo de consulta, proteção de memória da Maia, função de pausar).
- Maia (agente de IA) voltou a operar "certinha" após ter ficado desativada no dia anterior; Fran vai monitorar via Nath/veterinária de plantão.
- Vários ajustes operacionais combinados: roteamento de serviços por número de WhatsApp (Dieta/Cannabis/Biorressonância → celular da Cris; Fisio → celular da Nath), expansão da campanha para 100%, novo serviço/pacote "Academia" no catálogo e mensagem de follow-up pós-avaliação com link de review do Google.
- Bloqueios técnicos identificados: bug ao editar eventos recorrentes (transforma recorrente em evento único), eventos antigos criados antes da atualização que não somem do sistema, e atribuição de veterinário responsável saindo errada ao salvar.
- Ação recorrente: Victor vai excluir agendamentos órfãos/antigos direto pelo banco a partir de listas que a clínica enviar.

## Participantes
- **Victor** (victor.igr10@gmail.com) — Eloscope, Product Owner / Dev Lead.
- **Fran** — veterinária responsável (rotulada "Reabilitacão Veterinária" na transcrição); faz dietas, cannabis e biorressonância. Está nos EUA até ~setembro.
- **Cris** — equipe da clínica (rotulada "ReabilitaCão FisioVet"); cuida da agenda/lançamentos e do dia a dia operacional.
- Mencionados (não presentes): Nath (atendimento/WhatsApp, também atende a Let's Talk), Angélica/"Andy", Milena, Danila (Dani), e a Maia (agente de IA).

## Pauta / Temas tratados
- Status das últimas entregas (transcrição/resumo de consulta, recuperação de dados, proteção de memória da Maia, função de pausar).
- Comportamento da Maia: lembretes de slots não vinculados, roteamento de serviços por WhatsApp.
- Cadastro do pet: edição do campo de raça ("vira-lata").
- Catálogo: novo serviço/pacote "Academia" e precificação por sessão (avulso vs. pacote).
- Dietas no sistema e campanha de WhatsApp da Nath (expandir para 100%).
- Mensagem de follow-up pós-avaliação + link de avaliação do Google.
- Exames (comparação entre exames) — sem pendência, cliente satisfeito.
- Agendamentos: eventos órfãos/antigos, atribuição de veterinário responsável, e bug em eventos recorrentes.

## Como foi a reunião (narrativa)
Conversa descontraída, começando com bate-papo pessoal (Fran está nos EUA, jogo da Copa em Miami) e seguindo direto para o feedback das entregas. O tom geral foi positivo: Fran elogiou repetidamente as melhorias ("ficou bem legal", "achei ótimo", "tá muito bom"), e a maior parte da reunião foi de validação de funcionalidades já entregues, não de reclamação. Victor aproveitou um episódio em que Fran perdeu uma consulta (fechou o Chrome sem querer) para confirmar que o sistema provavelmente salva tudo no banco e dá para recuperar.

O bloco central foi operacional: como a Maia deve rotear mensagens por serviço e por número de WhatsApp. Ficou claro que dieta, cannabis e biorressonância são agendadas/atendidas pela Cris (celular dela), enquanto fisio fica com a Nath. Surgiu o cuidado de não duplicar mensagens (Maia + atendente humano mandando confirmação) e de filtrar para a Maia só enviar lembrete de avaliação, não de sessões de manutenção/dieta. Combinaram montar juntos, na semana seguinte, o contexto da mensagem de follow-up pós-avaliação com pedido de review no Google — Fran vê valor disso para posicionamento da clínica.

A parte final concentrou os pontos técnicos mais espinhosos, levantados principalmente pela Cris. Há eventos antigos (criados antes da atualização de recorrência) que continuam aparecendo no sistema/Maia mesmo após exclusão no Google Calendar, porque não estavam vinculados como recorrentes. Há também um bug em que, ao editar um evento recorrente, o sistema o transforma em evento único e "tira tudo da agenda". E um caso de atribuição de veterinário responsável saindo errada ao salvar (puxando Fran em vez de Dani/Danila). Victor reconheceu cada um, propôs testar e corrigir, e ofereceu fazer exclusões em lote pelo banco para poupar a equipe.

## Decisões tomadas
- Maia passa a enviar lembretes diários para slots de agenda não vinculados; Nath/veterinária de plantão monitora no fim do dia se as mensagens saíram. (linhas ~63-79)
- Roteamento de serviços por WhatsApp: Dieta, Cannabis e Biorressonância → celular da Cris; Fisio → celular da Nath. Cris fica responsável por verificar mesmo quando outra pessoa atende. (linhas ~466-520)
- Campanha de WhatsApp da Nath será expandida para 100% dos contatos. (linha ~227)
- Novo serviço/pacote "Academia" será adicionado ao catálogo, com precificação por sessão; Cris lançou como "Reabilitação Movimento". (linhas ~172, ~622)
- Precificação: usar os modos flexíveis do sistema para definir preço diferente entre avulso e pacote (pedido anterior da Cristian/financeiro). (linhas ~155-167)
- Mensagem de follow-up pós-avaliação será criada: no dia seguinte à avaliação, Maia pergunta como o cão está e envia link de review do Google. Victor monta o contexto da mensagem com a clínica. (linhas ~280-300)
- Eventos antigos órfãos serão excluídos por Victor direto pelo banco, a partir de listas que a clínica enviar. (linhas ~577, ~796)

## Pedidos / Expectativas do cliente
- Que o sistema salve/permita recuperar a consulta mesmo quando a aba é fechada por engano. (Fran)
- Garantir que a Maia NÃO deixe de enviar lembretes para clientes que precisam marcar — senão "a gente volta pro manual". (Fran)
- Diferenciar o número de telefone de envio por tipo de serviço para evitar mensagens trocadas/duplicadas. (Fran)
- Poder editar o campo de raça do pet (ex.: "vira-lata" cadastrado antes). (Fran)
- Aplicar descontos de irmãos (mais de um cão por tutor) na precificação de pacotes. (Fran)
- Resolver eventos recorrentes que dão "dor de cabeça" ao editar e eventos antigos que não somem. (Cris)

## Pendências e bloqueios
- **Bug de evento recorrente:** ao editar, o sistema transforma o recorrente em evento único e remove da agenda. Victor vai testar e corrigir; avisar o grupo ao concluir. (linha ~750)
- **Eventos pré-recorrência:** agendamentos criados antes da atualização não foram vinculados como recorrentes; excluídos no Google Calendar, permanecem no sistema/Maia. Solução: enviar lista para Victor excluir pelo banco. (linha ~796)
- **Atribuição de veterinário responsável:** ao salvar, alguns pets (ex.: Luna do Giovanni) saíram atribuídos à Fran em vez de Dani/Danila. Victor vai investigar a origem do agendamento (possível herança do Google Calendar). (linha ~653)
- **Edição do campo de raça:** confirmar editabilidade do campo. (linha ~111)
- **Transcrição do chat com erros:** Fran atribui ao novo computador (HP); no sistema funciona, no chat sai errado. Victor: parte é transcrição normal. Fran vai testar de novo. [sem ação técnica fechada]
- **Lembretes de dieta:** mandados por outro número; risco de lembrete errado. Definido não criar lembrete automático para dieta por ora, dependendo de a Cris registrar pelo sistema. (linhas ~241-256)

## Próximos passos / Ações
| Ação | Responsável | Prazo |
|------|-------------|-------|
| Configurar Maia: lembretes diários de slots não vinculados + roteamento de serviços + conectar WhatsApp da Cris | Victor | [não definido] |
| Corrigir editabilidade do campo de raça do pet | Victor | [não definido] |
| Adicionar serviço/pacote "Academia" no catálogo com preço por sessão | Cris (lançamento) / Victor (suporte) | [não definido] |
| Expandir campanha de WhatsApp da Nath para 100% | Victor | [não definido] |
| Montar e compartilhar mensagem de follow-up pós-avaliação com link de review do Google | Victor (contexto) + Fran/Cris | Semana seguinte |
| Excluir agendamentos antigos/órfãos (ex.: Belinha qui 14h, Pico/Ana Beatriz qui 08h) pelo banco | Victor (a clínica envia lista) | [não definido] |
| Investigar e corrigir atribuição de veterinário responsável | Victor | [não definido] |
| Corrigir bug de edição de evento recorrente e avisar o grupo ao concluir | Victor | [não definido] |
| Enviar lista de eventos pré-recorrência para exclusão em lote | Cris/Fran → Victor | [não definido] |
| Garantir que números de WhatsApp da Cris (dietas) e Nath (fisio) estejam configurados/respondendo 100% | Cris/Fran (avisar equipe) | [não definido] |

## Citações relevantes
- **Fran:** "A Maia voltou, agora achei muito bom, ela voltou pra a questão mais certinha dela mesmo... hoje os que eu vi, ela estava passando certinho, contatos e tudo mais." (~5:38)
- **Fran:** "Os que realmente precisam ter, que são os clientes que têm que marcar, esse não pode deixar de mandar... senão a gente vai voltar manual." (sobre lembretes da Maia)
- **Fran:** "A gente pode pôr Cannabis e Dieta no seu [celular da Cris], e aí o Fisio com a Nath." (definição de roteamento)
- **Cris:** "Quando tem uns que eu vou excluir como recorrente no Google, e aí eu excluo todos os eventos... exclui do Google, mas na Maia não exclui." (bug de eventos antigos)
- **Victor:** "Ele tirou de recorrente e transformou o evento em normal... ele está tirando tudo da agenda, não está nem deixando como normal." (diagnóstico do bug de recorrência)
