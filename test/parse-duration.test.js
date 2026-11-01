import assert from "node:assert/strict";
import { test } from "node:test";
import { parseDuration } from "../src/index.js";

test("parseDuration reads seconds", () => {
  assert.equal(parseDuration("90s"), 90000);
});

test("parseDuration reads minutes", () => {
  assert.equal(parseDuration("5m"), 300000);
});

test("parseDuration reads combined units", () => {
  assert.equal(parseDuration("1h30m"), 5400000);
});

test("parseDuration throws a RangeError on anything else", () => {
  assert.throws(() => parseDuration("soon"), RangeError);
});
