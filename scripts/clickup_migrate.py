#!/usr/bin/env python3
"""
Eloscope — ClickUp Migration
==============================
Migra TODOS os tasks do workspace antigo (9011283157) para o workspace novo (90171169593).
Preserva: nome, descrição, due date, prioridade, assignees, status.
Detecta duplicatas por nome — skip se já existir no destino.

Uso:
    .venv/bin/python scripts/clickup_migrate.py              # migra tudo
    .venv/bin/python scripts/clickup_migrate.py --dry-run    # simula sem criar
    .venv/bin/python scripts/clickup_migrate.py --list 901112183493  # só uma lista
"""

import os
import sys
import time
import requests
from dotenv import load_dotenv

load_dotenv()

# ─── Config ───────────────────────────────────────────────────────────────────

API_KEY   = os.getenv("CLICKUP_API_KEY")
BASE_URL  = "https://api.clickup.com/api/v2"
DRY_RUN   = "--dry-run" in sys.argv
ONLY_LIST = next((sys.argv[i + 1] for i, a in enumerate(sys.argv) if a == "--list"), None)

HEADERS = {"Authorization": API_KEY, "Content-Type": "application/json"}

# ─── Mapeamento de listas: workspace antigo → workspace novo ──────────────────
#
#  Workspace antigo : 9011283157
#  Workspace novo   : 90171169593

LIST_MAP = {
    # Team Space — Comercial
    "901112183493": "901713180050",  # Asana Import → Comercial > Pipeline

    # Team Space — Gestão Interna
    "901112183496": "901713180052",  # Asana Import → Gestão Interna > Geral
    "901113646042": "901713180052",  # Geral / Sem Projeto → Gestão Interna > Geral
    "901113648528": "901713180053",  # Cobranças → Gestão Interna > Cobranças

    # Team Space — Marketing / Conteúdos
    "901112183498": "901713180288",  # Asana Import → Marketing & Conteúdo > Tarefas

    # Team Space — Projetos Internos
    "901113648583": "901713180056",  # Plataforma SaaS → Plataforma SaaS > Tarefas
    "901113648585": "901713180286",  # Financeiro → Gestão Interna > Financeiro

    # Projetos — Clientes
    "901113645566": "901713180060",  # Voltrucks > Tarefas
    "901113645567": "901713180067",  # Elite Maqlam > Tarefas
    "901113645568": "901713180071",  # ReabilitaCão > Tarefas
    "901113645570": "901713180076",  # Imobiliária Rodrigues > Tarefas
    "901113645585": "901713180081",  # Campos Joia > Tarefas

    # Projetos — Lista solta (sem pasta)
    "901113645411": "901713180052",  # List → Gestão Interna > Geral
}

# ─── Mapeamento de usuários: IDs antigos → IDs novos ─────────────────────────
# (Lucas e Victor têm contas diferentes nos dois workspaces)

USER_MAP = {
    "2142005504": "82167120",    # Lucas  (conta antiga → conta nova)
    "156603223":  "101163658",   # Victor (conta antiga → conta nova)
    "170669569":  "170669569",   # Hugo   (igual nos dois)
    "87351862":   "87351862",    # Eloscope (igual nos dois)
}

# ─── Funções ──────────────────────────────────────────────────────────────────

def get_tasks(list_id: str) -> list[dict]:
    """Retorna todas as tarefas de uma lista, incluindo fechadas e subtarefas."""
    tasks, page = [], 0
    while True:
        r = requests.get(
            f"{BASE_URL}/list/{list_id}/task",
            headers=HEADERS,
            params={"page": page, "include_closed": "true", "subtasks": "true"},
        )
        if r.status_code != 200:
            print(f"      ⚠️  Erro ao buscar {list_id}: HTTP {r.status_code} {r.text[:80]}")
            break
        data = r.json().get("tasks", [])
        tasks.extend(data)
        if not data:
            break
        page += 1
    return tasks


def get_existing_names(list_id: str) -> set[str]:
    return {t["name"] for t in get_tasks(list_id)}


def map_assignees(assignees: list) -> list[int]:
    result = []
    for a in assignees:
        old_id = str(a.get("id", ""))
        new_id = USER_MAP.get(old_id, old_id)
        try:
            result.append(int(new_id))
        except ValueError:
            pass
    return result


def create_task(list_id: str, task: dict) -> bool:
    payload = {"name": task["name"]}

    if task.get("description"):
        payload["description"] = task["description"]

    if task.get("due_date"):
        payload["due_date"] = int(task["due_date"])

    priority = task.get("priority") or {}
    if priority.get("id"):
        payload["priority"] = int(priority["id"])

    assignees = map_assignees(task.get("assignees") or [])
    if assignees:
        payload["assignees"] = assignees

    # Status não é migrado: o workspace novo tem statuses diferentes do antigo.
    # Todas as tarefas ficam em "To Do" (default) no destino.

    r = requests.post(f"{BASE_URL}/list/{list_id}/task", headers=HEADERS, json=payload)
    if r.status_code == 200:
        return True
    print(f"      ⚠️  HTTP {r.status_code}: {r.text[:120]}")
    return False


def migrate_list(old_id: str, new_id: str) -> tuple[int, int, int]:
    created = skipped = errors = 0

    old_tasks = get_tasks(old_id)
    if not old_tasks:
        print(f"   📂 {old_id} → {new_id}  (vazia, skip)")
        return 0, 0, 0

    existing = get_existing_names(new_id)
    new_count = len(old_tasks) - sum(1 for t in old_tasks if t["name"] in existing)

    print(f"\n   📂 {old_id} → {new_id}")
    print(f"      {len(old_tasks)} tasks na origem | {len(existing)} já no destino | {new_count} a criar")

    for task in old_tasks:
        name = task["name"]

        if name in existing:
            skipped += 1
            continue

        if DRY_RUN:
            status = (task.get("status") or {}).get("status", "?")
            print(f"      📝 [{status:12s}] {name[:65]}")
            created += 1
            continue

        ok = create_task(new_id, task)
        if ok:
            print(f"      ✅ {name[:70]}")
            existing.add(name)  # evita duplicar se o nome aparecer 2x na origem
            created += 1
        else:
            print(f"      ❌ {name[:70]}")
            errors += 1

        time.sleep(0.35)  # respeitar rate limit

    return created, skipped, errors


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("\n╔══════════════════════════════════════════════╗")
    print("║  Eloscope — ClickUp Migration  🚀            ║")
    print("╚══════════════════════════════════════════════╝\n")

    if not API_KEY:
        print("❌ CLICKUP_API_KEY não encontrada no .env")
        sys.exit(1)

    mode = "DRY RUN" if DRY_RUN else "MIGRAR"
    print(f"Modo    : {mode}")
    print(f"Origem  : workspace 9011283157  (antigo)")
    print(f"Destino : workspace 90171169593 (novo)")

    if ONLY_LIST:
        if ONLY_LIST not in LIST_MAP:
            print(f"❌ Lista {ONLY_LIST} não está no mapeamento.")
            sys.exit(1)
        lists = {ONLY_LIST: LIST_MAP[ONLY_LIST]}
        print(f"Escopo  : apenas lista {ONLY_LIST}\n")
    else:
        lists = LIST_MAP
        print(f"Escopo  : {len(lists)} listas mapeadas\n")

    total_created = total_skipped = total_errors = 0

    for old_id, new_id in lists.items():
        c, s, e = migrate_list(old_id, new_id)
        total_created += c
        total_skipped += s
        total_errors += e

    print(f"\n{'─' * 52}")
    print(f"✅  Criadas  : {total_created}")
    print(f"⏭️   Skipped  : {total_skipped}  (já existiam)")
    print(f"❌  Erros    : {total_errors}")
    print(f"{'─' * 52}\n")

    if total_errors:
        print("⚠️  Alguns erros — verifique acima.")
    elif not DRY_RUN:
        print("🎉 Migração concluída!")


if __name__ == "__main__":
    main()
