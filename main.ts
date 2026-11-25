import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line confession for "Confess Your Worst Moment" (max 200 chars).
// Calibrated against the top-10 winners: a micro-anecdote that sounds true —
// a named person, a concrete number, one sharp turn at the end, no explaining.
const ENTRY =
  "I reported the Alvarez Q3 revenue as $4.2 million. It was $42,000. I had read the wrong column for six weeks and signed the email 'Best regards.'";

if (ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
