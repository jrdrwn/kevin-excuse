import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const EXCUSE_OPEN = "My confidence was 99%. ";
const EXCUSE_MIDDLE = "The 1% was the bug. ";
const EXCUSE_CLOSE = "The 1% is now in charge.";

const ENTRY = EXCUSE_OPEN + EXCUSE_MIDDLE + EXCUSE_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
