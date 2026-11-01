import assert from "node:assert/strict";
import { test } from "node:test";
import { formatBytes } from "../src/index.js";

test("formatBytes uses 1024-based units with one decimal place", () => {
  assert.equal(formatBytes(512), "512.0 B");
  assert.equal(formatBytes(1536), "1.5 KB");
  assert.equal(formatBytes(1048576), "1.0 MB");
});
