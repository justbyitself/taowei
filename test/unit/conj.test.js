import { describe, expect, it } from "vitest";
import { conj } from "#taowei";

describe("conj", () => {
  describe("array", () => {
    it("appends an element", () => {
      expect(conj(3)([1, 2])).toEqual([1, 2, 3]);
    });

    it("appends to empty array", () => {
      expect(conj(1)([])).toEqual([1]);
    });

    it("does not modify the original", () => {
      const arr = [1, 2];
      conj(3)(arr);
      expect(arr).toEqual([1, 2]);
    });

    it("appends null", () => {
      expect(conj(null)([1])).toEqual([1, null]);
    });

    it("appends undefined", () => {
      expect(conj(undefined)([1])).toEqual([1, undefined]);
    });

    it("appends an array as a single element", () => {
      expect(conj([3, 4])([1, 2])).toEqual([1, 2, [3, 4]]);
    });
  });

  describe("set", () => {
    it("adds an element", () => {
      expect(conj(3)(new Set([1, 2]))).toEqual(new Set([1, 2, 3]));
    });

    it("does not duplicate existing elements", () => {
      expect(conj(2)(new Set([1, 2]))).toEqual(new Set([1, 2]));
    });

    it("adds to empty set", () => {
      expect(conj(1)(new Set())).toEqual(new Set([1]));
    });

    it("does not modify the original", () => {
      const set = new Set([1, 2]);
      conj(3)(set);
      expect(set).toEqual(new Set([1, 2]));
    });
  });

  describe("map", () => {
    it("adds a key-value entry", () => {
      const result = conj(["b", 2])(new Map([["a", 1]]));
      expect(result).toEqual(new Map([["a", 1], ["b", 2]]));
    });

    it("overwrites existing key", () => {
      const result = conj(["a", 99])(new Map([["a", 1]]));
      expect(result.get("a")).toBe(99);
    });

    it("adds to empty map", () => {
      const result = conj(["a", 1])(new Map());
      expect(result).toEqual(new Map([["a", 1]]));
    });

    it("does not modify the original", () => {
      const map = new Map([["a", 1]]);
      conj(["b", 2])(map);
      expect(map.size).toBe(1);
    });
  });

  describe("pojo", () => {
    it("adds a key-value entry", () => {
      expect(conj(["b", 2])({ a: 1 })).toEqual({ a: 1, b: 2 });
    });

    it("overwrites existing key", () => {
      expect(conj(["a", 99])({ a: 1 })).toEqual({ a: 99 });
    });

    it("adds to empty object", () => {
      expect(conj(["a", 1])({})).toEqual({ a: 1 });
    });

    it("does not modify the original", () => {
      const obj = { a: 1 };
      conj(["b", 2])(obj);
      expect(obj).toEqual({ a: 1 });
    });
  });

  describe("string", () => {
    it("appends a character", () => {
      expect(conj("!")("hola")).toBe("hola!");
    });

    it("appends a string", () => {
      expect(conj(" mundo")("hola")).toBe("hola mundo");
    });

    it("appends to empty string", () => {
      expect(conj("a")("")).toBe("a");
    });
  });

  describe("iterable (lazy)", () => {
    const gen = function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    it("returns an iterable", () => {
      const result = conj(4)(gen());
      expect(typeof result[Symbol.iterator]).toBe("function");
    });

    it("yields original elements plus new one", () => {
      const result = conj(4)(gen());
      expect([...result]).toEqual([1, 2, 3, 4]);
    });

    it("is lazy — does not consume the iterable eagerly", () => {
      let consumed = 0;
      const lazy = (function* () {
        while (true) {
          consumed++;
          yield consumed;
        }
      })();
      const result = conj(99)(lazy);
      expect(consumed).toBe(0);
      const [first] = result;
      expect(first).toBe(1);
    });
  });
});
