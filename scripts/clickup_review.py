#!/usr/bin/env python3
"""
Eloscope — ClickUp Task Review & Eisenhower Update
====================================================
Aplica status, prioridade (Eisenhower) e datas em todos os tasks do workspace novo.

Regras:
  1. [CANCELADO] em qualquer task → marca como done
  2. Fases de setup/infra em projetos live (Fran/Voltrucks) → done
  3. 32 tasks criadas manualmente → skip (já têm prioridade e data corretas)
  4. Demais tasks → prioridade + data por contexto de lista e nome

Uso:
    .venv/bin/python scripts/clickup_review.py             # atualiza
    .venv/bin/python scripts/clickup_review.py --dry-run   # simula
"""

import os
import sys
import time
import requests
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

API_KEY  = os.getenv("CLICKUP_API_KEY")
BASE_URL = "https://api.clickup.com/api/v2"
DRY_RUN  = "--dry-run" in sys.argv
HEADERS  = {"Authorization": API_KEY, "Content-Type": "application/json"}

# ─── Listas do workspace novo (90171169593) ───────────────────────────────────

LISTS = {
    "comercial":   "901713180050",  # Comercial > Pipeline
    "gestao":      "901713180052",  # Gestão Interna > Geral
    "cobranças":   "901713180053",  # Gestão Interna > Cobranças
    "saas":        "901713180056",  # Plataforma SaaS > Tarefas
    "marketing":   "901713180288",  # Marketing & Conteúdo > Tarefas
    "financeiro":  "901713180286",  # Gestão Interna > Financeiro
    "voltrucks":   "901713180060",  # Clientes > Voltrucks — Samuel
    "maqlam":      "901713180067",  # Clientes > Elite Maqlam — Denis
    "reabilita":   "901713180071",  # Clientes > ReabilitaCão — Franciele
    "imobiliaria": "901713180076",  # Clientes > Imobiliária Rodrigues — Jean
    "campos_joia": "901713180081",  # Clientes > Campos Joia — Matheus
}

# ─── Projetos que já estão em produção ────────────────────────────────────────
# Fases de setup/infra dessas listas → done

LIVE_PROJECT_LISTS = {"reabilita", "voltrucks"}

# Nomes exatos de tarefas de setup/infra que são "done" nesses projetos
SETUP_DONE_NAMES = {
    "Reunião de Kickoff", "Reunião de Kickoff (2)",
    "Preparar Apresentação de Kickoff", "Fase 1 - Montar slides",
    "Definir agenda", "Definir cronograma macro", "Organizar escopo inicial",
    "Onboarding do Cliente", "Enviar formulário de onboarding",
    "Acompanhar preenchimento", "Documentar Stakeholders",
    "Mapear Projeto Completo", "Levantar processos", "Coletar requisitos",
    "Desenhar fluxogramas", "Organizar visão completa do sistema",
    "Reunião de Mapeamento Técnico", "Validação dos Fluxos",
    "Aprovar fluxos finais", "Relatório Executivo", "Plano de Suporte Contínuo",
    "Transição p/ Suporte Premium", "Criação e Configuração de Contas",
    "Criar conta Supabase", "Criar e configurar contas de e-mail",
    "Instalar n8n", "Criar e configurar VPS de homologação",
    "Configuração do Servidor de Homologação", "Instalar Chatwoot",
    "Instalar Krayin CRM", "Setup de Produção", "Provisionar VPS",
    "Configurar Supabase", "Instalar SSL", "Configurações de backup",
    "Migração Final", "Go-Live", "Comunicação Interna/Externa",
    "Monitoramento Pós-Go-Live", "Monitorar performance",
    "Checkpoint Pós-Go-Live", "Ajustes imediatos",
    "Preparação para UAT", "Gerar acessos de teste", "Revisar dados de teste",
    "Execução do UAT", "Ajustes pós-UAT", "Treinamento do Cliente",
    "Teste de Performance", "Teste End-to-End", "Testes de QA",
    "Pegar acesso Domínio Elitemaqlam", "Pegar acesso Domínio Elitemaqlam (2)",
    "Módulo 1: Visão Geral do Sistema", "Módulo 2: Chatwoot - Atendimento Manual",
    "Módulo 3: Krayin CRM", "Módulo 4: Google Calendar",
    "Módulo 5: Dashboard Executivo", "Módulo 6: Relatórios Automáticos",
    "Módulo 7: Casos Especiais e Exceções", "Módulo 8: Q&A e Prática",
}

# ─── 32 tasks criadas manualmente — skip (já têm prioridade e data corretas) ──

MANUAL_TASKS = {
    "Confirmar demo com Franciele — ReabilitaCão",
    "Cobrar R$6.000 — Samuel (Voltrucks)",
    "Cobrar Jean — Imobiliária Rodrigues",
    "Reunião Denis — Elite Maqlam (primeiros testes)",
    "Finalizar SDR Morgana — ATRASADO 30 dias",
    "Gustavo Bravo — revisar e enviar proposta",
    "Criar template de contrato — bloqueante para primeiro cliente",
    "Hugo: Confirmar capacidade técnica end-to-end",
    "Organizar processo e materiais Elo OS (comercial / marketing / ops)",
    "Construir CRM no sistema legado — ReabilitaCão",
    "Colocar Clerk nos sistemas ReabilitaCão",
    "Inserir disparos campanha na tabela Stories n8n — ReabilitaCão",
    "Criar catálogo Elite Maqlam no sistema para disparo",
    "Definir quem conduz a call de vendas — Victor ou Lucas",
    "Slides Elo OS — Victor validar aprovação visual",
    "Mentoria Agências — definir pricing final",
    "Definir LLM recomendado + custo estimado por cliente",
    "Organizar área Comercial no ClickUp — pipeline, stages, campos",
    "Extrair lista de leads Eloscope para GTM beta",
    "Abordar Denis (Morgana) — prospecção Elo OS",
    "Definir valor/hora de consultoria avulsa",
    "Cobrar Matheus (Campos Joia) — dados para novo produto",
    "Definir responsável e estrutura de contratos e pagamento",
    "Responder 7 perguntas técnicas da stack",
    "Decidir ferramenta do dashboard do cliente",
    "Criar proposta padrão Elo OS — template enviável em minutos",
    "Montar slides de call de vendas no Canva (design system Eloscope)",
    "Validar ou arquivar plano estratégico de 04/04/2026",
    "Abordar Matheus — prospecção Elo OS",
    "Criar kit comercial: proposta + contrato + onboarding (PDF)",
    "Definir processo de acompanhamento mensal do cliente",
    "Projeção financeira: quantos clientes = operação sustentável",
}

# ─── Datas por quadrante Eisenhower (base: 22/04/2026) ───────────────────────
#   Q1 Urgente+Importante  → esta semana (até 24/04)
#   Q2 Importante          → próximas 2 semanas (até 09/05)
#   Q3 Urgente/Delegar     → semana que vem (até 30/04)
#   Q4 Baixa prioridade    → sem data (ou maio)

DATE_Q1 = "2026-04-24"
DATE_Q2 = "2026-05-09"
DATE_Q3 = "2026-04-30"
DATE_Q4 = None

def date_ms(date_str: str) -> int:
    return int(datetime.strptime(date_str, "%Y-%m-%d").timestamp() * 1000)


# ─── Classificação por lista + nome ───────────────────────────────────────────

def classify(list_key: str, name: str) -> tuple[int, str | None]:
    """
    Retorna (priority_int, due_date_str | None)
    1=urgent · 2=high · 3=normal · 4=low
    """
    n = name.lower()

    # Cobranças → sempre urgent
    if list_key == "cobranças":
        return 1, DATE_Q1

    # Keywords de urgência universal
    if any(k in n for k in ["atrasado", "bloqueante", "urgente", "cobrar", "sdr morgana"]):
        return 1, DATE_Q1

    # Plataforma SaaS — Hugo
    if list_key == "saas":
        return 2, DATE_Q2

    # Financeiro
    if list_key == "financeiro":
        return 2, DATE_Q2

    # ── Clientes ─────────────────────────────────────────────────────────────

    if list_key == "reabilita":
        # Deliverables ativos da Fran
        active_kw = [
            "agendamento", "recorrente", "dieta", "gravação", "feedback",
            "cobrança automátic", "dashboard", "relatório", "nutri",
            "follow-up", "pós-consulta", "triag", "lembrete", "chatwoot",
            "krayin", "workflow", "uazapi", "whatsapp",
        ]
        if any(k in n for k in active_kw):
            return 2, DATE_Q2
        return 3, DATE_Q3

    if list_key == "maqlam":
        # Denis — fase inicial, alta prioridade
        return 2, DATE_Q2

    if list_key == "voltrucks":
        # Samuel — projeto em suporte, prioridade normal
        return 3, DATE_Q3

    if list_key == "campos_joia":
        return 3, DATE_Q2

    if list_key == "imobiliaria":
        return 3, DATE_Q2

    # ── Comercial ─────────────────────────────────────────────────────────────

    if list_key == "comercial":
        current_kw = [
            "gustavo", "bravo", "mentoria", "proposta padrão", "extrair lista",
            "abordar", "template de contrato", "kit comercial", "valor/hora",
            "criar proposta", "slides de call",
        ]
        if any(k in n for k in current_kw):
            return 2, DATE_Q2
        # Leads históricos → backlog
        return 4, DATE_Q4

    # ── Gestão Interna ────────────────────────────────────────────────────────

    if list_key == "gestao":
        important_kw = [
            "financ", "fluxo de caixa", "meta", "contrato", "pipeline",
            "onboarding", "processo", "organizar área", "slides", "canva",
        ]
        if any(k in n for k in important_kw):
            return 2, DATE_Q2
        return 3, DATE_Q3

    # ── Marketing ─────────────────────────────────────────────────────────────

    if list_key == "marketing":
        return 4, DATE_Q4

    return 3, None


# ─── Funções API ──────────────────────────────────────────────────────────────

def get_closed_status(list_id: str) -> str:
    r = requests.get(f"{BASE_URL}/list/{list_id}", headers=HEADERS)
    if r.status_code != 200:
        return "complete"
    for s in r.json().get("statuses", []):
        if s.get("type") == "closed":
            return s["status"]
    statuses = r.json().get("statuses", [])
    return statuses[-1]["status"] if statuses else "complete"


def get_tasks(list_id: str) -> list[dict]:
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


def update_task(task_id: str, payload: dict) -> bool:
    r = requests.put(f"{BASE_URL}/task/{task_id}", headers=HEADERS, json=payload)
    return r.status_code == 200


# ─── Processar lista ──────────────────────────────────────────────────────────

def process_list(list_key: str, list_id: str, closed_status: str) -> tuple[int, int, int, int]:
    tasks = get_tasks(list_id)
    print(f"\n   📂 {list_key}  ({len(tasks)} tasks)")

    n_done = n_set = n_skip = n_err = 0

    for task in tasks:
        name     = task["name"]
        task_id  = task["id"]

        # ── Skip tasks manuais ─────────────────────────────────────────────
        if name in MANUAL_TASKS:
            n_skip += 1
            continue

        # ── Regra 1: [CANCELADO] → done ───────────────────────────────────
        if "[CANCELADO]" in name or name.lower().startswith("cancelado"):
            if DRY_RUN:
                print(f"      ✓ DONE      {name[:68]}")
                n_done += 1
            else:
                ok = update_task(task_id, {"status": closed_status})
                if ok:
                    print(f"      ✓ DONE      {name[:68]}")
                    n_done += 1
                else:
                    print(f"      ❌ ERR-DONE {name[:68]}")
                    n_err += 1
                time.sleep(0.25)
            continue

        # ── Regra 2: setup/infra em projetos live → done ───────────────────
        if list_key in LIVE_PROJECT_LISTS and name in SETUP_DONE_NAMES:
            if DRY_RUN:
                print(f"      ✓ INFRA-OK  {name[:68]}")
                n_done += 1
            else:
                ok = update_task(task_id, {"status": closed_status})
                if ok:
                    n_done += 1
                else:
                    n_err += 1
                time.sleep(0.25)
            continue

        # ── Regra 3: Eisenhower ────────────────────────────────────────────
        priority_int, due_date_str = classify(list_key, name)

        payload: dict = {"priority": priority_int}
        if due_date_str:
            payload["due_date"] = date_ms(due_date_str)

        label_p = {1: "URGENT", 2: "HIGH  ", 3: "NORMAL", 4: "LOW   "}.get(priority_int, "?")
        label_d = due_date_str or "sem data"

        if DRY_RUN:
            print(f"      📝 [{label_p}][{label_d}] {name[:50]}")
            n_set += 1
        else:
            ok = update_task(task_id, payload)
            if ok:
                n_set += 1
            else:
                print(f"      ❌ ERR-SET  {name[:68]}")
                n_err += 1
            time.sleep(0.25)

    print(f"      → done:{n_done} prioridade:{n_set} skip:{n_skip} erros:{n_err}")
    return n_done, n_set, n_skip, n_err


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("\n╔══════════════════════════════════════════════╗")
    print("║  Eloscope — Task Review & Eisenhower  🔍     ║")
    print("╚══════════════════════════════════════════════╝\n")

    if not API_KEY:
        print("❌ CLICKUP_API_KEY não encontrada no .env")
        sys.exit(1)

    print(f"Modo     : {'DRY RUN' if DRY_RUN else 'ATUALIZAR'}")
    print(f"Workspace: 90171169593\n")

    print("Detectando status 'closed' em cada lista...")
    closed = {}
    for key, lid in LISTS.items():
        cs = get_closed_status(lid)
        closed[key] = cs
        print(f"   {key:15s} → '{cs}'")

    print()

    td = ts = tsk = te = 0
    for key, lid in LISTS.items():
        d, s, sk, e = process_list(key, lid, closed[key])
        td += d; ts += s; tsk += sk; te += e

    print(f"\n{'─' * 52}")
    print(f"✓  Marcadas done   : {td}")
    print(f"📋 Prioridade/data : {ts}")
    print(f"⏭️  Skip (manuais)  : {tsk}")
    print(f"❌ Erros           : {te}")
    print(f"{'─' * 52}\n")
    if not DRY_RUN and te == 0:
        print("🎉 Revisão concluída!")


if __name__ == "__main__":
    main()
