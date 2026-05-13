#!/usr/bin/env node
/**
 * Converte agents formato AIOX/xquads → formato nativo Claude Code
 * Uso: node convert-to-native.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SQUADS_DIR = join(ROOT, 'squads');
const OUTPUT_DIR = join(ROOT, '.claude', 'agents');

// Ferramentas por tipo de squad
const TOOLS_BY_SQUAD = {
  'advisory-board':       'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch',
  'brand-squad':          'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch',
  'c-level-squad':        'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch',
  'claude-code-mastery':  'Read, Write, Edit, Bash, Grep, Glob',
  'copy-squad':           'Read, Write, Edit, Grep, Glob',
  'cybersecurity':        'Read, Write, Edit, Bash, Grep, Glob, WebFetch, WebSearch',
  'data-squad':           'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch',
  'design-squad':         'Read, Write, Edit, Grep, Glob, WebFetch',
  'hormozi-squad':        'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch',
  'movement':             'Read, Write, Edit, Grep, Glob',
  'prompt-engineer-squad':'Read, Write, Edit, Grep, Glob',
  'storytelling':         'Read, Write, Edit, Grep, Glob, WebFetch',
  'traffic-masters':      'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch',
};

function extractYamlBlock(content) {
  const match = content.match(/```ya?ml\n([\s\S]*?)```/);
  return match ? match[1] : null;
}

function extractField(yaml, field, multiline = false) {
  if (!yaml) return null;

  // Handle quoted strings: field: "value" or field: 'value'
  const quotedMatch = yaml.match(new RegExp(`${field}:\\s*["']([\\s\\S]*?)["']`));
  if (quotedMatch) return quotedMatch[1].trim();

  // Handle pipe (|) multiline
  const pipeMatch = yaml.match(new RegExp(`${field}:\\s*\\|\\n([\\s\\S]*?)(?=\\n\\s*\\w+:|$)`));
  if (pipeMatch) return pipeMatch[1].replace(/^    /gm, '').trim();

  // Handle simple inline
  const inlineMatch = yaml.match(new RegExp(`${field}:\\s*(.+)`));
  if (inlineMatch) return inlineMatch[1].trim();

  return null;
}

function extractBlockContent(yaml, startField) {
  if (!yaml) return null;
  const idx = yaml.indexOf(`${startField}:`);
  if (idx === -1) return null;

  // Find the next top-level field
  const rest = yaml.slice(idx);
  const lines = rest.split('\n');
  const result = [];
  let inBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (i === 0) {
      inBlock = true;
      continue; // skip the field name line
    }
    // Stop at next top-level field (no leading spaces and has colon)
    if (i > 0 && /^\w+:/.test(line)) break;
    if (inBlock) result.push(line);
  }

  return result.join('\n').trim();
}

function parseListField(yaml, field) {
  if (!yaml) return [];
  const idx = yaml.indexOf(`${field}:`);
  if (idx === -1) return [];

  const rest = yaml.slice(idx + field.length + 1);
  const lines = rest.split('\n');
  const items = [];

  for (const line of lines) {
    if (/^\s*-\s+/.test(line)) {
      items.push(line.replace(/^\s*-\s+/, '').replace(/^["']|["']$/g, '').trim());
    } else if (/^\w+:/.test(line.trim()) && items.length > 0) {
      break;
    }
  }

  return items;
}

function buildNativeAgent(squadName, agentFile, content) {
  const yaml = extractYamlBlock(content);

  // Extract metadata
  const agentName = extractField(yaml, 'id') ||
    basename(agentFile, '.md').toLowerCase().replace(/\s+/g, '-');
  const displayName = extractField(yaml, 'name') || agentName;
  const title = extractField(yaml, 'title') || displayName;
  const whenToUse = extractField(yaml, 'whenToUse') || `Agente do squad ${squadName}`;

  // Extract persona content
  const role = extractField(yaml, 'role');
  const identity = extractField(yaml, 'identity');
  const style = extractField(yaml, 'style');
  const focus = extractField(yaml, 'focus');

  // Extract principles/frameworks
  const principles = parseListField(yaml, 'core_principles');

  // Get the activation notice (first blockquote after the heading)
  const activationMatch = content.match(/^>\s*ACTIVATION-NOTICE:\s*([\s\S]*?)(?:\n\n|\n##)/m);
  const activationNotice = activationMatch ? activationMatch[1].trim() : null;

  // Build description from whenToUse
  const description = `${displayName} — ${whenToUse.replace(/\n/g, ' ').slice(0, 300)}`;

  const tools = TOOLS_BY_SQUAD[squadName] || 'Read, Write, Edit, Grep, Glob, WebFetch, WebSearch';

  // Build persona body from available content
  let body = '';

  if (activationNotice && activationNotice.length > 20) {
    body += `${activationNotice}\n\n`;
  } else if (displayName && role) {
    body += `Você é **${displayName}**, ${role}.\n\n`;
  }

  if (role || identity || style || focus) {
    body += `## Identidade\n\n`;
    if (role) body += `- **Role:** ${role}\n`;
    if (identity) body += `- **Identidade:** ${identity.replace(/\n/g, ' ')}\n`;
    if (style) body += `- **Estilo:** ${style.replace(/\n/g, ' ')}\n`;
    if (focus) body += `- **Foco:** ${focus.replace(/\n/g, ' ')}\n`;
    body += '\n';
  }

  if (principles.length > 0) {
    body += `## Princípios\n\n`;
    principles.forEach(p => { body += `- ${p}\n`; });
    body += '\n';
  }

  // Extract frameworks/biography sections from the raw content after the YAML block
  const afterYaml = content.replace(/```ya?ml[\s\S]*?```/, '').trim();
  const sections = afterYaml.split(/\n(?=##\s)/).filter(s => s.trim());

  const skipSections = [
    'complete agent definition', 'activation', 'commands', 'dependencies',
    'configuration', 'squad', 'tier', 'persona profile'
  ];

  for (const section of sections) {
    const heading = section.match(/^##\s+(.+)/)?.[1]?.toLowerCase() || '';
    if (skipSections.some(skip => heading.includes(skip))) continue;
    if (section.trim().length < 50) continue;
    body += section.trim() + '\n\n';
  }

  // If body is too sparse, use raw content sections
  if (body.trim().length < 200 && yaml) {
    // Extract key frameworks directly from YAML
    const frameworksIdx = yaml.indexOf('core_frameworks:');
    if (frameworksIdx > -1) {
      const frameworks = yaml.slice(frameworksIdx);
      // Parse major framework names
      const fwMatches = [...frameworks.matchAll(/^\s{2}(\w+):/gm)];
      if (fwMatches.length > 0) {
        body += `## Frameworks principais\n\n`;
        fwMatches.slice(0, 10).forEach(m => {
          body += `- ${m[1].replace(/_/g, ' ')}\n`;
        });
        body += '\n';
      }
    }
  }

  if (!body.trim()) {
    body = `Agente especializado do squad ${squadName}. Consulte o arquivo original em squads/${squadName}/agents/${agentFile} para detalhes completos da persona.`;
  }

  // Build final file content
  const frontmatter = `---
name: ${agentName}
description: ${description.replace(/\n/g, ' ').slice(0, 400)}
model: sonnet
tools: ${tools}
---

`;

  return { filename: `${agentName}.md`, content: frontmatter + body.trim() + '\n' };
}

function processSquad(squadName) {
  const agentsDir = join(SQUADS_DIR, squadName, 'agents');

  try {
    const files = readdirSync(agentsDir).filter(f => f.endsWith('.md'));
    if (files.length === 0) return { processed: 0, skipped: 0 };

    const outDir = join(OUTPUT_DIR, squadName);
    mkdirSync(outDir, { recursive: true });

    let processed = 0, skipped = 0;

    for (const file of files) {
      const content = readFileSync(join(agentsDir, file), 'utf-8');

      try {
        const { filename, content: nativeContent } = buildNativeAgent(squadName, file, content);
        writeFileSync(join(outDir, filename), nativeContent);
        processed++;
        console.log(`  ✓ ${filename}`);
      } catch (err) {
        console.error(`  ✗ ${file}: ${err.message}`);
        skipped++;
      }
    }

    return { processed, skipped };
  } catch (err) {
    if (err.code === 'ENOENT') return { processed: 0, skipped: 0 };
    throw err;
  }
}

// Main
const squads = Object.keys(TOOLS_BY_SQUAD);
let totalProcessed = 0, totalSkipped = 0;

console.log('Convertendo squads para formato nativo Claude Code...\n');

for (const squad of squads) {
  console.log(`📦 ${squad}`);
  const { processed, skipped } = processSquad(squad);
  totalProcessed += processed;
  totalSkipped += skipped;
}

console.log(`\n✅ Concluído: ${totalProcessed} agentes convertidos, ${totalSkipped} com erro`);
console.log(`📁 Output em: .claude/agents/`);
