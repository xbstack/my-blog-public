const path = require('path');
const { createRequire } = require('module');

const caseName = process.argv[2];
const patchDisplayOptions = process.argv.includes('--patch-display-options');

if (!['v232', 'v233', 'v234'].includes(caseName)) {
  console.error('Usage: node repro.cjs <v232|v233|v234> [--patch-display-options]');
  process.exit(64);
}

const caseDir = path.join(__dirname, caseName);
const caseRequire = createRequire(path.join(caseDir, 'package.json'));
const workflowPkg = caseRequire('n8n-workflow/package.json');
const nodesPkg = caseRequire('n8n-nodes-base/package.json');
const { getNodeParameters } = caseRequire('n8n-workflow');

const nodesBaseRoot = path.dirname(caseRequire.resolve('n8n-nodes-base/package.json'));
const { Baserow } = caseRequire(path.join(nodesBaseRoot, 'dist/nodes/Baserow/Baserow.node.js'));

const baserow = new Baserow();
const additionalOptions = baserow.description.properties.find((property) => property.name === 'additionalOptions');
const filters = additionalOptions.options.find((property) => property.name === 'filters');
const fields = filters.options.find((option) => option.name === 'fields');
const children = structuredClone(fields.values);
const timezone = children.find((property) => property.name === 'timezone');

if (patchDisplayOptions && timezone?.displayOptions?.show?.['../operator']) {
  timezone.displayOptions = {
    show: {
      operator: timezone.displayOptions.show['../operator'],
    },
  };
}

const fixture = {
  field: '1',
  operator: 'date_is',
  timezone: 'UTC',
  value: '2026-08-07',
};

console.log(JSON.stringify({
  case: caseName,
  n8nWorkflow: workflowPkg.version,
  n8nNodesBase: nodesPkg.version,
  baserowVersions: baserow.description.version,
  childParameters: children.map((property) => property.name),
  timezoneDisplayOptions: timezone?.displayOptions ?? null,
  patchDisplayOptions,
}, null, 2));

try {
  const resolved = getNodeParameters(children, fixture, true, true, null, baserow.description);
  console.log('RESULT: OK');
  console.log(JSON.stringify(resolved, null, 2));
} catch (error) {
  console.error(`RESULT: ERROR: ${error.message}`);
  process.exitCode = 2;
}
