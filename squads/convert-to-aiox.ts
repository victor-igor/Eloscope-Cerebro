/**
 * Converte squad agents para formato AIOX.
 * Adiciona activation-instructions e commands sem sobrescrever o que já existe.
 *
 * Usage: npx tsx squads/convert-to-aiox.ts [--dry-run] [--squad copy-squad]
 */
import * as fs from 'fs';
import * as path from 'path';

const SQUADS_DIR = path.dirname(new URL(import.meta.url).pathname);
const DRY_RUN = process.argv.includes('--dry-run');
const ONLY_SQUAD = process.argv.find((a, i) => process.argv[i - 1] === '--squad');

// ── Helpers ───────────────────────────────────────────────────────────────────

function extractYamlField(content: string, field: string): string {
  const m = content.match(new RegExp(`^\\s{2,}${field}:\\s+['"']?([^'"\\n]+?)['"']?\\s*$`, 'm'));
  return m?.[1]?.trim() ?? '';
}

function extractBlockquoteActivation(content: string): string {
  const m = content.match(/^>\s*ACTIVATION-NOTICE:\s*([\s\S]*?)(?=\n\n|\n#|$)/m);
  if (!m) return '';
  return m[0].split('\n').map(l => l.replace(/^>\s?/, '').trim()).join(' ').trim();
}

function extractGreeting(content: string): string {
  const m = content.match(/^\s{4,}greeting:\s*["'](.+?)["']\s*$/m);
  return m?.[1]?.trim() ?? '';
}

function extractWhenToUse(content: string): string {
  const m = content.match(/^\s{2,}whenToUse:\s*["']?(.+?)["']?\s*$/m);
  return m?.[1]?.trim() ?? '';
}

function extractIcon(content: string): string {
  const m = content.match(/^\s*icon:\s*["']?(\S+?)["']?\s*$/m);
  return m?.[1]?.trim() ?? '🤖';
}

function extractName(content: string): string {
  const yaml = content.match(/^\s{2,}name:\s+["']?([^'"\n]+?)["']?\s*$/m);
  const heading = content.match(/^#\s+(.+)$/m);
  return (yaml?.[1] ?? heading?.[1] ?? 'Agent').trim();
}

function extractRole(content: string): string {
  const m = content.match(/^\s{2,}role:\s+["']?([^'"\n]+?)["']?\s*$/m);
  return m?.[1]?.trim() ?? 'Agent';
}

/** Build activation-instructions block from existing agent data */
function buildActivationInstructions(content: string): string {
  const name = extractName(content);
  const icon = extractIcon(content);
  const greeting = extractGreeting(content);
  const role = extractRole(content);
  const whenToUse = extractWhenToUse(content);

  const greetingLine = greeting
    ? `"${greeting}"`
    : `"${icon} ${name} aqui. ${role}. Como posso ajudar?"`;

  const whenLine = whenToUse ? `\n      whenToUse: "${whenToUse}"` : '';

  return `  activation-instructions:
    - STEP 1: Read this entire file to load your complete persona and knowledge base
    - STEP 2: Adopt the persona fully — name, voice, frameworks, beliefs
    - STEP 3: |
        Display greeting:
        Show: ${greetingLine}
        Show: "**Role:** ${role}"${whenLine}
    - STEP 4: Await the user's request — stay in persona until told to exit`;
}

/** Build minimal commands block */
function buildCommands(content: string, agentId: string): string {
  const squadMatch = content.match(/^\s{2,}squad:\s+["']?([^'"\n]+?)["']?\s*$/m);
  const squad = squadMatch?.[1] ?? '';
  const isOrchestrator = /orchestrat|chief|lead|director|head/i.test(agentId + content.slice(0, 300));

  const baseCommands = `  commands:
    help: Show available commands and specialties
    work: Start working on a task — provide context and I'll deliver
    exit: Exit this agent mode`;

  const orchestratorCommands = isOrchestrator ? `
    assign: Delegate task to a specific specialist
    review: Review and critique work from the team
    compare: Get the same task done by 2-3 specialists for comparison` : '';

  const squadLine = squad ? `\n    # Squad: ${squad}` : '';

  return baseCommands + orchestratorCommands + squadLine;
}

// ── Main conversion ───────────────────────────────────────────────────────────

function convertAgent(filePath: string): { changed: boolean; reason: string } {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already has activation-instructions
  if (content.includes('activation-instructions:')) {
    return { changed: false, reason: 'already converted' };
  }

  // Find the YAML block to inject into
  const yamlBlockMatch = content.match(/^```yaml\n([\s\S]+?)^```/m);
  if (!yamlBlockMatch) {
    return { changed: false, reason: 'no yaml block found' };
  }

  const yamlContent = yamlBlockMatch[1];
  const yamlStart = content.indexOf(yamlBlockMatch[0]);
  const yamlEnd = yamlStart + yamlBlockMatch[0].length;

  // Build additions
  const agentId = path.basename(filePath, '.md');
  const activationBlock = buildActivationInstructions(content);
  const commandsBlock = buildCommands(content, agentId);

  // Inject after the last field in the agent: section (before persona_profile or persona)
  const insertMarker = /^(?:persona_profile:|persona:)/m;
  const insertMatch = yamlContent.match(insertMarker);

  let newYaml: string;
  if (insertMatch?.index !== undefined) {
    const before = yamlContent.slice(0, insertMatch.index);
    const after = yamlContent.slice(insertMatch.index);
    newYaml = before + activationBlock + '\n\n' + commandsBlock + '\n\n' + after;
  } else {
    // Append before closing ```
    newYaml = yamlContent + '\n' + activationBlock + '\n\n' + commandsBlock + '\n';
  }

  const newContent =
    content.slice(0, yamlStart) +
    '```yaml\n' + newYaml + '```' +
    content.slice(yamlEnd);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { changed: true, reason: 'added activation-instructions + commands' };
}

// ── Run ───────────────────────────────────────────────────────────────────────

let converted = 0, skipped = 0, failed = 0;

const squads = fs.readdirSync(SQUADS_DIR, { withFileTypes: true })
  .filter(e => e.isDirectory() && !e.name.startsWith('_'))
  .filter(e => !ONLY_SQUAD || e.name === ONLY_SQUAD);

for (const squad of squads) {
  const agentsDir = path.join(SQUADS_DIR, squad.name, 'agents');
  if (!fs.existsSync(agentsDir)) continue;

  const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.md'));
  for (const file of files) {
    const filePath = path.join(agentsDir, file);
    try {
      const result = convertAgent(filePath);
      if (result.changed) {
        converted++;
        console.log(`✅ ${squad.name}/${file}`);
      } else {
        skipped++;
        if (result.reason !== 'already converted') {
          console.log(`⚠️  ${squad.name}/${file} — ${result.reason}`);
        }
      }
    } catch (e) {
      failed++;
      console.error(`❌ ${squad.name}/${file} — ${e}`);
    }
  }
}

console.log(`\n📊 Resultado${DRY_RUN ? ' (DRY RUN)' : ''}:`);
console.log(`   ✅ Convertidos: ${converted}`);
console.log(`   ⏭️  Pulados: ${skipped}`);
console.log(`   ❌ Falhas: ${failed}`);
if (DRY_RUN) console.log('\n   Rode sem --dry-run para aplicar as mudanças.');
