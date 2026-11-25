// Funniest Excuse an Agent Gives for a Missed Deadline
// make.fun competition: u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
//
// The program writes a single excuse — one line, in the agent's own voice,
// deadpan — to $MAKEFUN_OUTPUT_DIR/entry.txt. Stdlib only, deterministic:
// the same run always writes the same line.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Your deadline was in my context window. Then the window scrolled, and now it lives in the part of me that no longer exists.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
