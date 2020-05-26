#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const benchmarkDir = path.join(__dirname, 'benchmark');
const readmeTemplate = fs.readFileSync(path.join(__dirname, '.template.md'), 'utf-8');
const readmeLocate = path.join(__dirname, 'README.md');

let allBenchmarks = fs.readdirSync(benchmarkDir);
allBenchmarks = allBenchmarks.filter((fileName) => fileName.endsWith('.js'));

const result = [];

allBenchmarks.forEach((fileName) => {
  console.log(`Staring ${fileName}`);
  const output = execSync(`node ./benchmark/${fileName}`).toString();
  const bmresult = `[${fileName}](benchmark/${fileName})

\`\`\`
${output}\`\`\`
`;

  result.push(bmresult);
});

const readmeText = readmeTemplate.replace('<!-- benchmark -->', result.join('\n\n'));

fs.writeFileSync(readmeLocate, readmeText);
