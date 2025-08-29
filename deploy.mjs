#!/usr/bin/env node
import { execSync } from "node:child_process";
import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";


const pnpmCmd = "C:\\Users\\mauri\\AppData\\Roaming\\npm\\pnpm.cmd";

function run(cmd, name) {
  try {
    console.log(chalk.blue(`\n▶ ${name || cmd}\n`));
    execSync(cmd, { stdio: "inherit", shell: true });
    console.log(chalk.green(`✔ ${name || cmd} erfolgreich\n`));
    return true;
  } catch (err) {
    console.error(chalk.red(`✖ Fehler bei ${name || cmd}`));
    process.exit(1);
  }
}

// --- ENV CHECK ---
function checkEnv() {
  if (fs.existsSync(".env.example")) {
    const example = fs
      .readFileSync(".env.example", "utf-8")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith("#"));

    const missing = [];
    for (const line of example) {
      const key = line.split("=")[0];
      if (!process.env[key]) missing.push(key);
    }

    if (missing.length > 0) {
      console.error(chalk.red(`❌ Fehlende ENV Variablen: ${missing.join(", ")}`));
      process.exit(1);
    }

    console.log(chalk.green("✔ ENV Variablen validiert\n"));
  }
}

// --- MAIN WORKFLOW ---
async function main() {
  console.log(chalk.cyan.bold("\n🚀 TracQ Enterprise Deploy Guard\n"));

  // Schritt 0: ENV Check
  checkEnv();

  // Schritt 1: Linting
  if (fs.existsSync(".eslintrc.js") || fs.existsSync(".eslintrc.json")) {
    run("npx eslint .", "Linting");
  }

  // Schritt 2: TypeScript
  if (fs.existsSync("tsconfig.json")) {
    run("npx tsc --noEmit", "TypeScript Check");
  }

  // Schritt 3: Tests (optional)
  if (fs.existsSync("jest.config.js") || fs.existsSync("vitest.config.ts")) {
    run("npx vitest run", "Unit/E2E Tests"); // passt an, falls du Jest nutzt
  }

  // Schritt 4: Build
  run(`${pnpmCmd} exec next build`, "Next.js Build");

  // Schritt 5: Optional PWA-Check via Lighthouse
  const { pwaCheck } = await inquirer.prompt([
    {
      type: "confirm",
      name: "pwaCheck",
      message: "PWA-Check mit Lighthouse ausführen?",
      default: false,
    },
  ]);
  if (pwaCheck) {
    // Server starten für Lighthouse
    const server = execSync("npx next start -p 3000 &", { stdio: "inherit", shell: true });
    run(
      "npx lighthouse http://localhost:3000 --only-categories=pwa --chrome-flags='--headless' --quiet --output=json --output-path=lhreport.json",
      "Lighthouse PWA-Check"
    );
    console.log(chalk.green("✔ Lighthouse Report erstellt (lhreport.json)"));
  }

  // Schritt 6: Git Commit + Push
  const { commitMessage, branch } = await inquirer.prompt([
    {
      type: "input",
      name: "commitMessage",
      message: "Commit-Message:",
      default: "chore: deploy",
    },
    {
      type: "input",
      name: "branch",
      message: "Branch zum Pushen:",
      default: "main",
    },
  ]);

  run("git add .", "Git Add");
  run(`git commit -m "${commitMessage}"`, "Git Commit");
  run(`git push origin ${branch}`, "Git Push");

  console.log(chalk.green.bold("\n✅ Deployment erfolgreich abgeschlossen!\n"));
  process.exit(0);
}

main();
