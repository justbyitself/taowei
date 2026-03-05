import { mkdir, readdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, "../src");
const functionsDir = path.resolve(srcDir, "functions");
const internalDir = path.resolve(srcDir, "internal");

const loadPredicateOrder = async () => {
  const filePath = path.join(srcDir, "predicateOrder.js");
  const { default: order } = await import(pathToFileURL(filePath));
  return order;
};

const loadDirArity = async (dirPath) => {
  const configPath = path.join(dirPath, "index.js");
  try {
    const { default: config } = await import(pathToFileURL(configPath));
    return config?.arity ?? 1;
  } catch {
    return 1;
  }
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fileNameToPredicate = (name) => "is" + capitalize(name);
const dirFileToImportName = (dirName, fileName) =>
  dirName + capitalize(fileName);

const generateCondFile = (dirName, fileNames, predicateOrder, arity) => {
  const sorted = [...fileNames].sort((a, b) => {
    const ia = predicateOrder.indexOf(fileNameToPredicate(a));
    const ib = predicateOrder.indexOf(fileNameToPredicate(b));
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  const imports = [
    `import cond from '#internal/cond.js'`,
    arity > 1 ? `import promote from '#internal/promote.js'` : null,
    arity > 1 ? `import defer from '#internal/defer.js'` : null,
    ...sorted.map((f) => {
      const pred = fileNameToPredicate(f);
      const implName = dirFileToImportName(dirName, f);
      return `import ${pred} from '#internal/${pred}.js'\nimport ${implName} from '../functions/${dirName}/${f}.js'`;
    }),
  ].filter(Boolean).join("\n");

  const condEntries = sorted.map((f) => {
    const pred = fileNameToPredicate(f);
    const implName = dirFileToImportName(dirName, f);
    const impl = arity > 1 ? `promote(${arity})(${implName})` : implName;
    return `  [${pred}, ${impl}],`;
  }).join("\n");

  const condExpr = `cond([\n${condEntries}\n])`;
  const exportExpr = arity > 1 ? `defer(${arity})(${condExpr})` : condExpr;

  return `// This file is auto-generated. Do not edit manually.\n${imports}\n\nexport default ${exportExpr}\n`;
};

const run = async () => {
  const predicateOrder = await loadPredicateOrder();
  const entries = await readdir(functionsDir, { withFileTypes: true });

  await mkdir(internalDir, { recursive: true });

  const indexLines = [];
  indexLines.push("// This file is auto-generated. Do not edit manually.");
  indexLines.push("// Run: node scripts/generate-index.js\n");

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.isDirectory()) {
      const dirName = entry.name;
      const dirPath = path.join(functionsDir, dirName);
      const arity = await loadDirArity(dirPath);
      const files = await readdir(dirPath);
      const fileNames = files
        .filter((f) => f.endsWith(".js") && f !== "index.js")
        .map((f) => path.basename(f, ".js"));

      // generate src/internal/<dirName>.js
      const condContent = generateCondFile(
        dirName,
        fileNames,
        predicateOrder,
        arity,
      );
      await writeFile(path.join(internalDir, `${dirName}.js`), condContent);

      // reexport in index.js
      indexLines.push(
        `export { default as ${dirName} } from '#internal/${dirName}.js'`,
      );
    } else if (entry.name.endsWith(".js")) {
      const name = path.basename(entry.name, ".js");

      // simple reexport in internal/
      const internalContent =
        `// This file is auto-generated. Do not edit manually.\nexport { default } from '../functions/${entry.name}'\n`;
      await writeFile(path.join(internalDir, entry.name), internalContent);

      // reexport in index.js
      indexLines.push(
        `export { default as ${name} } from '#internal/${entry.name}'`,
      );
    }
  }

  await writeFile(path.join(srcDir, "index.js"), indexLines.join("\n") + "\n");
  console.log("✓ src/internal/ generated");
  console.log("✓ src/index.js generated");
};

run().catch(console.error);
