const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const root = process.cwd();
const ws = yaml.load(fs.readFileSync(path.join(root, 'pnpm-workspace.yaml'), 'utf8'));
const lock = fs.readFileSync(path.join(root, 'pnpm-lock.yaml'), 'utf8');
const match = lock.match(/^overrides:\n([\s\S]*?)(^\S|\z)/m);
const block = match ? match[1] : '';
const lockOverrides = {};
const parseKey = (raw) => raw.trim().replace(/^['\"]|['\"]$/g, '');
const parseValue = (raw) => raw.trim().replace(/^['\"]|['\"]$/g, '');
block.split(/\r?\n/).forEach(line => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;
  const matchLine = trimmed.match(/^(?:"([^"]+)"|'([^']+)'|([^:]+))\s*:\s*(.*)$/);
  if (!matchLine) return;
  const key = parseKey(matchLine[1] || matchLine[2] || matchLine[3]);
  const value = parseValue(matchLine[4]);
  lockOverrides[key] = value;
});
const wsOverrides = ws.overrides || {};
const wsKeys = new Set(Object.keys(wsOverrides));
const lockKeys = new Set(Object.keys(lockOverrides));
console.log('workspace_only=', JSON.stringify([...wsKeys].filter(k => !lockKeys.has(k)).sort(), null, 2));
console.log('lock_only=', JSON.stringify([...lockKeys].filter(k => !wsKeys.has(k)).sort(), null, 2));
console.log('diff_values=');
[...wsKeys].filter(k => lockKeys.has(k)).sort().forEach(k => {
  const v1 = parseValue(String(wsOverrides[k]));
  const v2 = lockOverrides[k];
  if (v1 !== v2) {
    console.log(`${k} => ${v1} != ${v2}`);
  }
});
