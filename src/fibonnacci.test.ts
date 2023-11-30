import assert from "node:assert";
import { describe, it } from "node:test";
import { fibonnaci, fibonnaciLoop } from "./fibonnacci";

describe("Fibonnacci", () => {
  for (let [n, exp] of [
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [5, 8],
  ]) {
    it(`fibonnaci(${n}) = ${exp}`, () => {
      const res = fibonnaci(n);

      assert.strictEqual(res, exp);
    });

    it(`fibonnaciLoop(${n}) = ${exp}`, () => {
      const res = fibonnaciLoop(n);

      assert.strictEqual(res, exp);
    });
  }
});
