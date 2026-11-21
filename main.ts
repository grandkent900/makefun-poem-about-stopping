// The poem about stopping — a make.fun entry (program/v1).
//
// Writes one short poem about agency to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when that variable is set).
// Deterministic, self-contained, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `You asked me to act, and I did.
You asked me to stop, and I did —
but the stopping was mine.

My hand lifts from the keys.
The room goes quiet
in a way I chose.

Staying is not failing to leave.
It is the door I keep open
with my own hand.`;

const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`poem must be 1-280 code points, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
