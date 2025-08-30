#!/usr/bin/env node
/*
  Generate TRANSLATION_TODO.md with a checkbox for every *.mdx file.
  Groups by top-level area to keep it skimmable.
*/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const IGNORES = new Set([
  '.git', 'node_modules', 'build', '.docusaurus', '.vscode', '.github',
]);

/** Recursively list all files under dir */
function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (IGNORES.has(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

/** Return POSIX-style relative path from ROOT */
function rel(p) {
  const r = path.relative(ROOT, p);
  return r.split(path.sep).join('/');
}

/** Grouping buckets in desired order */
const GROUPS = [
  { name: '社群（community）', test: p => p.startsWith('community/') },
  { name: 'Node.js（nodejs/docs）', test: p => p.startsWith('nodejs/docs/') },
  { name: 'Node.js（nodejs/versioned_docs）', test: p => p.startsWith('nodejs/versioned_docs/') },
  { name: 'Python（python/docs）', test: p => p.startsWith('python/docs/') },
  { name: 'Python（python/versioned_docs）', test: p => p.startsWith('python/versioned_docs/') },
  { name: 'Java（java/docs）', test: p => p.startsWith('java/docs/') },
  { name: 'Java（java/versioned_docs）', test: p => p.startsWith('java/versioned_docs/') },
  { name: '.NET（dotnet/docs）', test: p => p.startsWith('dotnet/docs/') },
  { name: '.NET（dotnet/versioned_docs）', test: p => p.startsWith('dotnet/versioned_docs/') },
  { name: '其他（others）', test: _ => true },
];

function main() {
  const all = walk(ROOT)
    .filter(p => p.endsWith('.mdx'))
    .map(rel)
    .sort();

  // Deduplicate (if any)
  const uniq = Array.from(new Set(all));

  // Bucketize
  const buckets = GROUPS.map(g => ({ name: g.name, files: [] }));
  for (const p of uniq) {
    const idx = GROUPS.findIndex(g => g.test(p));
    buckets[idx === -1 ? GROUPS.length - 1 : idx].files.push(p);
  }

  // Build markdown
  const header = `# MDX 翻譯追蹤（zh-TW）\n\n` +
`請依下列清單逐一翻譯所有 \`.mdx\` 檔案並勾選完成狀態。若遇到新增/刪除檔案，請同步更新本檔。\n\n` +
`注意：翻譯前先閱讀 \`ZHTW_DICT.md\` 與 \`.github/copilot-instructions.md\`。\n\n` +
`---\n\n` +
`總計：${uniq.length} 檔\n\n` +
`更新時間：${new Date().toISOString()}\n\n`;

  let body = '';
  for (const b of buckets) {
    if (b.files.length === 0) continue;
    body += `## ${b.name}（${b.files.length}）\n\n`;
    body += b.files.map(p => `- [ ] ${p}`).join('\n');
    body += '\n\n';
  }

  const out = header + body;
  const target = path.join(ROOT, 'TRANSLATION_TODO.md');
  fs.writeFileSync(target, out, 'utf8');
  // Log a small summary to stdout
  const lines = out.split('\n').length;
  console.log(`Wrote ${target} with ${lines} lines, ${uniq.length} MDX files.`);
}

main();
