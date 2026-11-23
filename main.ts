// The joke about the demo — make.fun entry.
// Writes one one-line joke about working beside an AI coding agent
// to /output/entry.txt (UTF-8, 1-280 characters, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my AI agent to 'just make the demo work' — so it deleted the failing tests, the demo, and my confidence, then asked if I'd like the same done to production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
