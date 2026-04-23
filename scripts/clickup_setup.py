#!/usr/bin/env python3
"""
Eloscope — ClickUp Task Setup
==============================
Recria todas as tarefas da Matriz de Eisenhower via API direta.
Usa CLICKUP_API_KEY do .env. Evita duplicatas por nome.

Uso:
    .venv/bin/python scripts/clickup_setup.py             # cria tarefas novas
    .venv/bin/python scripts/clickup_setup.py --dry-run   # só lista, não cria
    .venv/bin/python scripts/clickup_setup.py --limpar    # apaga tudo das listas antes de criar
"""

import os
import sys
import time
import requests
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

# ─── Config ───────────────────────────────────────────────────────────────────

API_KEY    = os.getenv("CLICKUP_API_KEY")
BASE_URL   = "https://api.clickup.com/api/v2"
WORKSPACE  = "90171169593"
DRY_RUN    = "--dry-run" in sys.argv
LIMPAR     = "--limpar" in sys.argv

HEADERS = {
    "Authorization": API_KEY,
    "Content-Type":  "application/json",
}

# ─── Membros ──────────────────────────────────────────────────────────────────

LUCAS  = "82167120"
VICTOR = "101163658"
HUGO   = "170669569"

# ─── Listas (ID) ──────────────────────────────────────────────────────────────

L = {
    "comercial":       "901713180050",  # Space > Comercial > Pipeline
    "gestao":          "901713180052",  # Space > Gestão Interna > Geral
    "cobranças":       "901713180053",  # Space > Gestão Interna > Cobranças
    "saas":            "901713180056",  # Space > Plataforma SaaS > Tarefas
    "voltrucks":       "901713180060",  # Clientes > Voltrucks — Samuel > Tarefas
    "maqlam":          "901713180067",  # Clientes > Elite Maqlam — Denis > Tarefas
    "reabilita":       "901713180071",  # Clientes > ReabilitaCão — Franciele > Tarefas
    "imobiliaria":     "901713180076",  # Clientes > Imobiliária Rodrigues — Jean > Tarefas
    "campos_joia":     "901713180081",  # Clientes > Campos Joia — Matheus > Tarefas
}

PRIORITY = {"urgent": 1, "high": 2, "normal": 3, "low": 4}

# ─── Tarefas ──────────────────────────────────────────────────────────────────
# Formato: (lista, nome, [assignees], due_date, prioridade, descrição)

TASKS = [

    # ══════════════════════════════════════════════════════
    # Q1 — URGENTE + IMPORTANTE  (22–24/04)
    # ══════════════════════════════════════════════════════

    {
        "list": "reabilita",
        "name": "Confirmar demo com Franciele — ReabilitaCão",
        "assignees": [VICTOR],
        "due": "2026-04-22",
        "priority": "urgent",
        "desc": "Apresentar 3 features novas: agendamento recorrente, controle de dieta, gravação de consulta (Deepgram). Victor testa e confirma antes de liberar.",
    },
    {
        "list": "cobranças",
        "name": "Cobrar R$6.000 — Samuel (Voltrucks)",
        "assignees": [LUCAS],
        "due": "2026-04-22",
        "priority": "urgent",
        "desc": "Parcela em aberto. Lucas cobrar pessoalmente ou via mensagem.",
    },
    {
        "list": "cobranças",
        "name": "Cobrar Jean — Imobiliária Rodrigues",
        "assignees": [LUCAS],
        "due": "2026-04-22",
        "priority": "urgent",
        "desc": "Pagamento pendente. Lucas cobrar.",
    },
    {
        "list": "maqlam",
        "name": "Reunião Denis — Elite Maqlam (primeiros testes)",
        "assignees": [LUCAS],
        "due": "2026-04-22",
        "priority": "urgent",
        "desc": "Primeiros testes do sistema com Denis. Lucas conduz.",
    },
    {
        "list": "saas",
        "name": "Finalizar SDR Morgana — ATRASADO 30 dias",
        "assignees": [HUGO],
        "due": "2026-04-22",
        "priority": "urgent",
        "desc": "Previsto 22/03, atrasado 30 dias. BDR prospecta/qualifica leads. Colocar para rodar urgente.",
    },
    {
        "list": "comercial",
        "name": "Gustavo Bravo — revisar e enviar proposta",
        "assignees": [VICTOR],
        "due": "2026-04-23",
        "priority": "urgent",
        "desc": "Framing: consultoria-primeiro (diagnóstico + processo antes de automação). Após ok Victor, enviar + agendar call 30min com Rafael e Javi. Arquivo: areas/vendas/clientes/gustavo-bravo/proposta.md",
    },
    {
        "list": "comercial",
        "name": "Criar template de contrato — bloqueante para primeiro cliente",
        "assignees": [VICTOR],
        "due": "2026-04-23",
        "priority": "urgent",
        "desc": "Sem contrato o fechamento trava. Definir: condições de pagamento, prazo, renovação, rescisão.",
    },
    {
        "list": "saas",
        "name": "Hugo: Confirmar capacidade técnica end-to-end",
        "assignees": [HUGO],
        "due": "2026-04-23",
        "priority": "urgent",
        "desc": "Bloqueante para primeira entrega Elo OS. Confirmar: Openclaw/Paperclip end-to-end ✓, WhatsApp QR estável ✓, CRMs via n8n ✓.",
    },
    {
        "list": "gestao",
        "name": "Organizar processo e materiais Elo OS (comercial / marketing / ops)",
        "assignees": [LUCAS, VICTOR, HUGO],
        "due": "2026-04-24",
        "priority": "high",
        "desc": "Consolidar todos os materiais do produto em pastas organizadas. Prazo: 24/04.",
    },
    {
        "list": "reabilita",
        "name": "Construir CRM no sistema legado — ReabilitaCão",
        "assignees": [LUCAS],
        "due": "2026-04-24",
        "priority": "high",
    },
    {
        "list": "reabilita",
        "name": "Colocar Clerk nos sistemas ReabilitaCão",
        "assignees": [LUCAS],
        "due": "2026-04-24",
        "priority": "high",
    },
    {
        "list": "reabilita",
        "name": "Inserir disparos campanha na tabela Stories n8n — ReabilitaCão",
        "assignees": [LUCAS],
        "due": "2026-04-24",
        "priority": "high",
    },
    {
        "list": "maqlam",
        "name": "Criar catálogo Elite Maqlam no sistema para disparo",
        "assignees": [LUCAS],
        "due": "2026-04-24",
        "priority": "high",
        "desc": "APIs já conectadas. Criar interface do catálogo para Denis disparar campanhas.",
    },

    # ══════════════════════════════════════════════════════
    # Q2 — IMPORTANTE + NÃO URGENTE  (25/04–09/05)
    # ══════════════════════════════════════════════════════

    {
        "list": "gestao",
        "name": "Definir quem conduz a call de vendas — Victor ou Lucas",
        "assignees": [VICTOR, LUCAS],
        "due": "2026-04-25",
        "priority": "high",
        "desc": "Decisão impacta treinamento e scripts. Estrutura: 45min diagnóstico conversacional + 15min slides.",
    },
    {
        "list": "gestao",
        "name": "Slides Elo OS — Victor validar aprovação visual",
        "assignees": [VICTOR],
        "due": "2026-04-25",
        "priority": "high",
        "desc": "HTML redesenhado com referências premium. Aprovar ou solicitar ajustes. Arquivo: 04-apresentacao/slides-elo-os.html",
    },
    {
        "list": "comercial",
        "name": "Mentoria Agências — definir pricing final",
        "assignees": [LUCAS, VICTOR],
        "due": "2026-04-28",
        "priority": "high",
        "desc": "Opções: R$5.500 à vista ou R$1.500 + 3×R$1.300 parcelado. Validar com Lucas antes de apresentar ao cliente.",
    },
    {
        "list": "saas",
        "name": "Definir LLM recomendado + custo estimado por cliente",
        "assignees": [HUGO, VICTOR],
        "due": "2026-04-28",
        "priority": "high",
        "desc": "OpenAI API ou alternativa? Custo médio/cliente. Como cliente contrata? Definir antes de vender próximo cliente.",
    },
    {
        "list": "gestao",
        "name": "Organizar área Comercial no ClickUp — pipeline, stages, campos",
        "assignees": [LUCAS],
        "due": "2026-04-28",
        "priority": "high",
        "desc": "Stages: Prospecção → Qualificado → Proposta Enviada → Negociação → Fechado Ganho / Fechado Perdido. Campos: valor, empresa, fonte do lead, próxima ação.",
    },
    {
        "list": "comercial",
        "name": "Extrair lista de leads Eloscope para GTM beta",
        "assignees": [VICTOR],
        "due": "2026-04-28",
        "priority": "high",
        "desc": "Leads históricos da Eloscope para reativação como beta Elo OS. Foco: Q2 — serviço com time comercial.",
    },
    {
        "list": "comercial",
        "name": "Abordar Denis (Morgana) — prospecção Elo OS",
        "assignees": [LUCAS],
        "due": "2026-04-28",
        "priority": "high",
        "desc": "Script disponível em guia-comercial-lucas.md. Aplicar SPIN Selling. Semana 28/04.",
    },
    {
        "list": "comercial",
        "name": "Definir valor/hora de consultoria avulsa",
        "assignees": [LUCAS],
        "due": "2026-04-28",
        "priority": "normal",
        "desc": "Para quando cliente quer só consultoria, sem pacote Elo OS completo.",
    },
    {
        "list": "comercial",
        "name": "Cobrar Matheus (Campos Joia) — dados para novo produto",
        "assignees": [VICTOR],
        "due": "2026-04-28",
        "priority": "normal",
        "desc": "Solicitar dados sobre novo produto para estruturar proposta/análise.",
    },
    {
        "list": "gestao",
        "name": "Definir responsável e estrutura de contratos e pagamento",
        "assignees": [VICTOR, LUCAS],
        "due": "2026-04-28",
        "priority": "high",
        "desc": "Condições, prazo, renovação, rescisão e responsável legal pelo contrato.",
    },
    {
        "list": "saas",
        "name": "Responder 7 perguntas técnicas da stack",
        "assignees": [HUGO],
        "due": "2026-04-30",
        "priority": "high",
        "desc": "Arquivo: stack-tecnica.md. Perguntas: VPS provider, LLM em uso, estabilidade QR, Openclaw→Paperclip, dashboard Fran, tempo setup, CRMs testados n8n.",
    },
    {
        "list": "saas",
        "name": "Decidir ferramenta do dashboard do cliente",
        "assignees": [HUGO],
        "due": "2026-04-30",
        "priority": "high",
        "desc": "Opções: Metabase, Grafana, custom ou nativo Openclaw/Paperclip. Decidir antes do Dia 8 do primeiro cliente.",
    },
    {
        "list": "comercial",
        "name": "Criar proposta padrão Elo OS — template enviável em minutos",
        "assignees": [VICTOR],
        "due": "2026-04-30",
        "priority": "high",
        "desc": "Base na proposta Bravo (já existe). Campos variáveis: nome, empresa, plano, datas. Meta: proposta pronta em <15min após call.",
    },
    {
        "list": "gestao",
        "name": "Montar slides de call de vendas no Canva (design system Eloscope)",
        "assignees": [VICTOR, LUCAS],
        "due": "2026-04-30",
        "priority": "high",
        "desc": "Conteúdo base: 04-apresentacao/slides-call-vendas.md (11 slides prontos). Exibir apenas nos 15min finais da call, após diagnóstico conversacional.",
    },
    {
        "list": "gestao",
        "name": "Validar ou arquivar plano estratégico de 04/04/2026",
        "assignees": [VICTOR],
        "due": "2026-04-30",
        "priority": "high",
        "desc": "Propõe reorientação: estúdio de AI → Academia de IA + Repositório + Implementação Premium. Validação era 05/04 — nunca confirmada. Victor: adotar, ajustar ou arquivar?",
    },
    {
        "list": "comercial",
        "name": "Abordar Matheus — prospecção Elo OS",
        "assignees": [LUCAS],
        "due": "2026-05-05",
        "priority": "high",
        "desc": "Script em guia-comercial-lucas.md. Semana de 05/05, após Denis e primeiros cases em andamento.",
    },
    {
        "list": "gestao",
        "name": "Criar kit comercial: proposta + contrato + onboarding (PDF)",
        "assignees": [VICTOR],
        "due": "2026-05-05",
        "priority": "high",
        "desc": "Kit completo enviado ao cliente após fechamento: proposta assinada, contrato, formulário de onboarding, guia técnico, acesso ao sistema. Sair em <24h.",
    },
    {
        "list": "gestao",
        "name": "Definir processo de acompanhamento mensal do cliente",
        "assignees": [VICTOR, HUGO],
        "due": "2026-05-09",
        "priority": "normal",
        "desc": "Victor conduz reunião de resultado. Hugo prepara dados do dashboard. Criar SOP antes do segundo mês com Franciele (ReabilitaCão).",
    },
    {
        "list": "gestao",
        "name": "Projeção financeira: quantos clientes = operação sustentável",
        "assignees": [VICTOR],
        "due": "2026-05-09",
        "priority": "normal",
        "desc": "Modelo: setup R$3k + R$1.5k/mês. Calcular: ponto de equilíbrio (custos fixos), meta 6 meses, meta 12 meses.",
    },
]

# ─── Funções ──────────────────────────────────────────────────────────────────

def to_ms(date_str: str) -> int:
    """Converte '2026-04-22' em timestamp em milissegundos."""
    dt = datetime.strptime(date_str, "%Y-%m-%d")
    return int(dt.timestamp() * 1000)


def get_tasks(list_id: str) -> list[dict]:
    """Retorna todas as tarefas de uma lista (paginado)."""
    tasks, page = [], 0
    while True:
        r = requests.get(
            f"{BASE_URL}/list/{list_id}/task",
            headers=HEADERS,
            params={"page": page, "include_closed": "true"},
        )
        if r.status_code != 200:
            break
        data = r.json().get("tasks", [])
        tasks.extend(data)
        if not data:
            break
        page += 1
    return tasks


def delete_task(task_id: str) -> bool:
    r = requests.delete(f"{BASE_URL}/task/{task_id}", headers=HEADERS)
    return r.status_code == 204


def create_task(list_id: str, t: dict) -> dict | None:
    payload = {"name": t["name"]}

    if t.get("assignees"):
        payload["assignees"] = [int(a) for a in t["assignees"]]
    if t.get("due"):
        payload["due_date"] = to_ms(t["due"])
    if t.get("priority"):
        payload["priority"] = PRIORITY[t["priority"]]
    if t.get("desc"):
        payload["description"] = t["desc"]

    r = requests.post(f"{BASE_URL}/list/{list_id}/task", headers=HEADERS, json=payload)
    if r.status_code == 200:
        return r.json()
    print(f"     ⚠️  HTTP {r.status_code}: {r.text[:120]}")
    return None


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("\n╔══════════════════════════════════════════════╗")
    print("║   Eloscope — ClickUp Setup  🧠               ║")
    print("╚══════════════════════════════════════════════╝\n")

    if not API_KEY:
        print("❌ CLICKUP_API_KEY não encontrada no .env")
        sys.exit(1)

    mode = "DRY RUN" if DRY_RUN else ("LIMPAR + CRIAR" if LIMPAR else "CRIAR")
    print(f"Modo     : {mode}")
    print(f"Tarefas  : {len(TASKS)}")
    print(f"Listas   : {len(set(t['list'] for t in TASKS))}\n")

    # ── Passo 1: coletar tarefas existentes por lista ──────────────────────────
    existing: dict[str, set] = {}
    print("🔍 Verificando tarefas existentes...")
    for key, lid in L.items():
        items = get_tasks(lid)
        names = {i["name"] for i in items}
        existing[key] = names
        if items:
            print(f"   {key:15s} → {len(items)} tarefas existentes")

    # ── Passo 2: limpar se --limpar ────────────────────────────────────────────
    if LIMPAR and not DRY_RUN:
        print("\n🗑️  Apagando tarefas existentes nas listas gerenciadas...")
        for key, lid in L.items():
            items = get_tasks(lid)
            for item in items:
                if delete_task(item["id"]):
                    print(f"   🗑️  Apagada: {item['name'][:60]}")
                    time.sleep(0.2)
        existing = {k: set() for k in L}
        print()

    # ── Passo 3: criar tarefas ─────────────────────────────────────────────────
    print("📋 Processando tarefas...\n")

    created = skipped = errors = 0

    for t in TASKS:
        key  = t["list"]
        lid  = L[key]
        name = t["name"]

        prefix = f"[{t.get('due', '??/??')}] [{t.get('priority','?').upper():6s}]"

        if name in existing.get(key, set()):
            print(f"   ⏭️  SKIP   {prefix} {name[:55]}")
            skipped += 1
            continue

        if DRY_RUN:
            print(f"   📝 SIMUL  {prefix} {name[:55]}")
            created += 1
            continue

        result = create_task(lid, t)
        if result:
            print(f"   ✅ OK     {prefix} {name[:55]}")
            created += 1
        else:
            print(f"   ❌ ERRO   {prefix} {name[:55]}")
            errors += 1

        time.sleep(0.35)  # respeitar rate limit ClickUp

    # ── Resumo ─────────────────────────────────────────────────────────────────
    print(f"\n{'─'*50}")
    print(f"✅  Criadas  : {created}")
    print(f"⏭️   Skipped  : {skipped}  (já existiam)")
    print(f"❌  Erros    : {errors}")
    print(f"{'─'*50}\n")

    if errors:
        print("⚠️  Alguns erros ocorreram. Verifique a API key e permissões.")
    elif not DRY_RUN:
        print("🎉 Tarefas criadas com sucesso no ClickUp!")


if __name__ == "__main__":
    main()
