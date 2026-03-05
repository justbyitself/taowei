import { describe, expect, it } from "vitest";
import { prependAll } from "#taowei";

describe("prependAll", () => {
  describe("array", () => {
    it("prepends all elements", () => {
      expect(prependAll([3, 4])([1, 2])).toEqual([3, 4, 1, 2]);
    });

    it("prepends to empty array", () => {
      expect(prependAll([1, 2])([])).toEqual([1, 2]);
    });

    it("prepends empty iterable", () => {
      expect(prependAll([])([1, 2])).toEqual([1, 2]);
    });

    it("does not modify the original", () => {
      const arr = [1, 2];
      prependAll([3, 4])(arr);
      expect(arr).toEqual([1, 2]);
    });

    it("accepts any iterable as source", () => {
      expect(prependAll(new Set([3, 4]))([1, 2])).toEqual([3, 4, 1, 2]);
    });
  });

  describe("set", () => {
    it("adds all elements", () => {
      expect(prependAll([3, 4])(new Set([1, 2]))).toEqual(new Set([1, 2, 3, 4]));
    });

    it("does not duplicate existing elements", () => {
      expect(prependAll([2, 3])(new Set([1, 2]))).toEqual(new Set([1, 2, 3]));
    });

    it("adds to empty set", () => {
      expect(prependAll([1, 2])(new Set())).toEqual(new Set([1, 2]));
    });

    it("does not modify the original", () => {
      const set = new Set([1, 2]);
      prependAll([3, 4])(set);
      expect(set).toEqual(new Set([1, 2]));
    });
  });

  describe("map", () => {
    it("adds all entries", () => {
      const result = prependAll([["b", 2], ["c", 3]])(new Map([["a", 1]]));
      expect(result).toEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
    });

    it("overwrites existing keys", () => {
      const result = prependAll([["a", 99]])(new Map([["a", 1]]));
      expect(result.get("a")).toBe(99);
    });

    it("adds to empty map", () => {
      const result = prependAll([["a", 1]])(new Map());
      expect(result).toEqual(new Map([["a", 1]]));
    });

    it("does not modify the original", () => {
      const map = new Map([["a", 1]]);
      prependAll([["b", 2]])(map);
      expect(map.size).toBe(1);
    });
  });

  describe("pojo", () => {
    it("adds all entries", () => {
      expect(prependAll([["b", 2], ["c", 3]])({ a: 1 })).toEqual({ a: 1, b: 2, c: 3 });
    });

    it("overwrites existing keys", () => {
      expect(prependAll([["a", 99]])({ a: 1 })).toEqual({ a: 99 });
    });

    it("adds to empty object", () => {
      expect(prependAll([["a", 1]])({})).toEqual({ a: 1 });
    });

    it("does not modify the original", () => {
      const obj = { a: 1 };
      prependAll([["b", 2]])(obj);
      expect(obj).toEqual({ a: 1 });
    });
  });

  describe("string", () => {
    it("prepends all characters", () => {
      expect(prependAll("hola ")("mundo")).toBe("hola mundo");
    });

    it("prepends to empty string", () => {
      expect(prependAll("abc")("")).toBe("abc");
    });

    it("prepends empty iterable", () => {
      expect(prependAll("")("hola")).toBe("hola");
    });
  });

  describe("iterable (lazy)", () => {
    const gen = function* () { yield 1; yield 2; };

    it("returns an iterable", () => {
      const result = prependAll([3, 4])(gen());
      expect(typeof result[Symbol.iterator]).toBe("function");
    });

    it("yields new elements first, then original", () => {
      const result = prependAll([3, 4])(gen());
      expect([...result]).toEqual([3, 4, 1, 2]);
    });

    it("is lazy", () => {
      let consumed = 0;
      const lazy = (function* () { while (true) { consumed++; yield consumed; } })();
      const result = prependAll([0])(lazy);
      expect(consumed).toBe(0);
      const [first] = result;
      expect(first).toBe(0);
    });
  });
});
