import { test } from "node:test";
import assert from "node:assert/strict";
import { parse } from "../src/csv.js";

test("splits fields and rows", () => {
  assert.deepEqual(parse("a,b\nc,d\n"), [["a", "b"], ["c", "d"]]);
});

test("keeps commas inside quotes", () => {
  assert.deepEqual(parse('"a,b",c\n'), [["a,b", "c"]]);
});

test("unescapes doubled quotes", () => {
  assert.deepEqual(parse('"say ""hi"""\n'), [['say "hi"']]);
});
