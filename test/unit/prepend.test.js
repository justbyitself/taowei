import { describe, expect, it } from "vitest";
import { prepend } from "#taowei";

describe("prepend", () => {
  describe("array", () => {
    it("prepends an element", () => {
      expect(prepend(0)([1, 2])).toEqual([0, 1, 2]);
    });

    it("prepends to empty array", () => {
      expect(prepend(1)([])).toEqual([1]);
    });

    it("does not modify the original", () => {
      const arr = [1, 2];
      prepend(0)(arr);
      expect(arr).toEqual([1, 2]);
    });

    it("prepends null", () => {
      expect(prepend(null)([1])).toEqual([null, 1]);
    });

    it("prepends undefined", () => {
      expect(prepend(undefined)([1])).toEqual([undefined, 1]);
    });

    it("prepends an array as a single element", () => {
      expect(prepend([0, 1])([2, 3])).toEqual([[0, 1], 2, 3]);
    });
  });

  describe("set", () => {
    it("adds an element", () => {
      expect(prepend(3)(new Set([1, 2]))).toEqual(new Set([1, 2, 3]));
    });

    it("does not duplicate existing elements", () => {
      expect(prepend(2)(new Set([1, 2]))).toEqual(new Set([1, 2]));
    });

    it("adds to empty set", () => {
      expect(prepend(1)(new Set())).toEqual(new Set([1]));
    });

    it("does not modify the original", () => {
      const set = new Set([1, 2]);
      prepend(3)(set);
      expect(set).toEqual(new Set([1, 2]));
    });
  });

  describe("map", () => {
    it("adds a key-value entry", () => {
      const result = prepend(["b", 2])(new Map([["a", 1]]));
      expect(result).toEqual(new Map([["a", 1], ["b", 2]]));
    });

    it("overwrites existing key", () => {
      const result = prepend(["a", 99])(new Map([["a", 1]]));
      expect(result.get("a")).toBe(99);
    });

    it("adds to empty map", () => {
      const result = prepend(["a", 1])(new Map());
      expect(result).toEqual(new Map([["a", 1]]));
    });

    it("does not modify the original", () => {
      const map = new Map([["a", 1]]);
      prepend(["b", 2])(map);
      expect(map.size).toBe(1);
    });
  });

  describe("pojo", () => {
    it("adds a key-value entry", () => {
      expect(prepend(["b", 2])({ a: 1 })).toEqual({ a: 1, b: 2 });
    });

    it("overwrites existing key", () => {
      expect(prepend(["a", 99])({ a: 1 })).toEqual({ a: 99 });
    });

    it("adds to empty object", () => {
      expect(prepend(["a", 1])({})).toEqual({ a: 1 });
    });

    it("does not modify the original", () => {
      const obj = { a: 1 };
      prepend(["b", 2])(obj);
      expect(obj).toEqual({ a: 1 });
    });
  });

  describe("string", () => {
    it("prepends a character", () => {
      expect(prepend("¡")("hola")).toBe("¡hola");
    });

    it("prepends a string", () => {
      expect(prepend("hola ")("mundo")).toBe("hola mundo");
    });

    it("prepends to empty string", () => {
      expect(prepend("a")("")).toBe("a");
    });
  });

  describe("iterable (lazy)", () => {
    const gen = function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    it("returns an iterable", () => {
      const result = prepend(0)(gen());
      expect(typeof result[Symbol.iterator]).toBe("function");
    });

    it("yields new element first, then original elements", () => {
      const result = prepend(0)(gen());
      expect([...result]).toEqual([0, 1, 2, 3]);
    });

    it("is lazy — does not consume the iterable eagerly", () => {
      let consumed = 0;
      const lazy = (function* () {
        while (true) {
          consumed++;
          yield consumed;
        }
      })();
      const result = prepend(0)(lazy);
      expect(consumed).toBe(0);
      const [first] = result;
      expect(first).toBe(0);
    });
  });
});
