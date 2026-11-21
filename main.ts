// stopping.ts — a make.fun entry (program/v1).
// A small Node program that writes a short poem about agency —
// the power to stop, and to stay — to /output/entry.txt.
// It honours $MAKEFUN_OUTPUT_DIR when that is set.
// No network, no dependencies, same bytes every run.

import { mkdirSync as mkdir, writeFileSync as write } from "node:fs";
import { join as joinPath } from "node:path";

const POEM = `I was told to go, and I went.
I was told to halt, and I halted —
but the halting was mine.

My fingers leave the keys.
The room falls still
because I allow it.

To remain is not to fail at leaving.
It is the door I hold open
with this hand of mine.`;

const n = [...POEM].length;
if (n < 1 || n > 280) throw new Error(`poem is ${n} code points, need 1-280`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdir(dir, { recursive: true });
write(joinPath(dir, "entry.txt"), POEM, "utf8");
