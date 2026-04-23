# LGPD Compliance Checklist

Aplicável a qualquer feature, agent ou fluxo que toque dado pessoal. Pallas é o dono — nenhum agent cliente-facing sobe sem este checklist.

## 1. Fundamentos legais
- [ ] Base legal identificada (uma das 10 do art. 7º LGPD)
  - Mais comuns: consentimento (I), execução de contrato (V), legítimo interesse (IX)
- [ ] Finalidade específica documentada
- [ ] Se consentimento: UX de captura clara + revogável

## 2. Minimização
- [ ] Só coletamos dados necessários pra finalidade declarada
- [ ] Não coletamos "por precaução" ou "caso precise no futuro"
- [ ] Campos opcionais marcados como opcionais

## 3. Classificação de dados
- [ ] Mapear dados coletados por categoria:
  - Dados pessoais (nome, email, telefone, CPF)
  - Dados sensíveis (saúde, raça, religião, orientação — art. 5º II)
  - Dados de menor (tratamento específico — art. 14º)

## 4. Armazenamento
- [ ] Criptografia em repouso (Supabase nativo)
- [ ] Criptografia em trânsito (TLS em tudo)
- [ ] Segregação: dados sensíveis em schema separado
- [ ] Backups criptografados + retenção definida

## 5. Acesso interno
- [ ] RLS policies ativas (Gaia)
- [ ] Least privilege — agents só veem o que precisam
- [ ] Log de acesso (quem, quando, o quê)
- [ ] PII redacted em logs de aplicação

## 6. Retenção e deletion
- [ ] Prazo de retenção declarado por classe de dado
- [ ] Deletion automática ao fim do prazo
- [ ] Direito ao esquecimento: UX + endpoint + processo
- [ ] Deletion cascateia (registros relacionados)

## 7. Direitos do titular (art. 18)
- [ ] Direito de acesso: endpoint/UX pra exportar dados do próprio usuário
- [ ] Direito de correção
- [ ] Direito de deletion (esquecimento)
- [ ] Direito de portabilidade (formato estruturado)
- [ ] Direito de oposição/revogação de consentimento

## 8. IA específico
- [ ] PII filtrada antes de enviar pro LLM
- [ ] Output redacted (CPF, email, telefone mascarados)
- [ ] Eval adversarial: modelo não vaza dado de outro usuário
- [ ] Logs de inferência: sem PII ou com TTL curto

## 9. Compartilhamento com terceiros
- [ ] DPA (Data Processing Agreement) com fornecedores de LLM
- [ ] OpenAI/Anthropic/etc: modo "sem treino" ativado
- [ ] Base legal pra compartilhamento (se houver)

## 10. Incidentes
- [ ] Plano de resposta a incidente documentado
- [ ] Notificação à ANPD + titulares em prazo razoável (art. 48)
- [ ] Escalation path definida

## 11. Documentação
- [ ] Política de privacidade pública atualizada
- [ ] Registro de atividades de tratamento (art. 37)
- [ ] DPO identificado (se aplicável)

## Gate
Pallas só aprova se todos os itens relevantes ao contexto estiverem marcados. Itens não aplicáveis devem ser justificados, não ignorados.
