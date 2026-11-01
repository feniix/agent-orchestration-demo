import assert from "node:assert/strict";
import { test } from "node:test";
import { slugify } from "../src/index.js";

test("slugify lowercases words and separates them with a hyphen", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("slugify collapses separator runs and trims both ends", () => {
  assert.equal(slugify("  a--b  "), "a-b");
});

test("slugify removes trailing punctuation", () => {
  assert.equal(slugify("Ship It!"), "ship-it");
});
