const fs = require("fs");
const path = require("path");

const DATA = path.join(__dirname, "..", "data", "reports.json");
const OUT = path.join(__dirname, "..", "out", "digest.txt");

// Deliberate pauses: the demo needs a job that takes long enough to watch.
const pause = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log("[1/4] reading feed...");
  const rows = JSON.parse(fs.readFileSync(DATA, "utf8"));
  await pause(3000);

  console.log(`[2/4] ${rows.length} records loaded, grouping by team...`);
  const byTeam = {};
  for (const row of rows) {
    byTeam[row.team] = (byTeam[row.team] || 0) + row.count;
  }
  await pause(4000);

  console.log("[3/4] building summary...");
  const lines = Object.entries(byTeam)
    .sort((a, b) => b[1] - a[1])
    .map(([team, count]) => `${team.padEnd(12)} ${count}`);
  await pause(4000);

  console.log("[4/4] writing digest...");
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `Daily digest\n${"=".repeat(24)}\n${lines.join("\n")}\n`);
  await pause(2000);

  console.log(`done — wrote ${OUT}`);
  console.log(lines.join("\n"));
}

main();
