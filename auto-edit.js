const fs = require("fs");

const dts = fs.readFileSync("dist/index.d.ts", "utf8");

function getExport() {
  const [, dtsExports] = dts.match(/export\s*\{([^\}]+)\};/);
  return dtsExports.split(",").map((ex) => ex.trim());
}

function generateReadme(dtsExports) {
  return [
    `<h1 align="center">@xzzs/utils</h1>
  <br />
  
  <p>
  Opinionated collection of common JavaScript / TypeScript utils by \`@xzzs\`.
  </p>
  
  ### API
  `,
    ...dtsExports.map((ex) => `- ${ex}\n`),
  ].join("\n");
}

const dtsExports = getExport();
const readme = generateReadme(dtsExports);

fs.writeFileSync("README.md", readme, "utf8");
