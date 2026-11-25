// Fridge Roast: One Line, Biggest Laugh
// Entry: a single-line roast of a smart fridge (max 200 chars).
// The program writes exactly that line to /output/entry.txt and nothing else.
// Gate check: the sealed scorer requires 1-200 characters of UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Overnight firmware update: the ice maker now has a startup chime and release notes, and still produces zero ice.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
