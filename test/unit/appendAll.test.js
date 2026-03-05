import { describe, expect, it } from "vitest";
import { appendAll } from "#taowei";

describe("appendAll", () => {
  describe("array", () => {
    it("appends all elements", () => {
      expect(appendAll([3, 4])([1, 2])).toEqual([1, 2, 3, 4]);
    });

    it("appends to empty array", () => {
      expect(appendAll([1, 2])([])).toEqual([1, 2]);
    });

    it("appends empty iterable", () => {
      expect(appendAll([])([1, 2])).toEqual([1, 2]);
    });

    it("does not modify the original", () => {
      const arr = [1, 2];
      appendAll([3, 4])(arr);
      expect(arr).toEqual([1, 2]);
    });

    it("accepts any iterable as source", () => {
      expect(appendAll(new Set([3, 4]))([1, 2])).toEqual([1, 2, 3, 4]);
    });
  });

  describe("set", () => {
    it("adds all elements", () => {
      expect(appendAll([3, 4])(new Set([1, 2]))).toEqual(new Set([1, 2, 3, 4]));
    });

    it("does not duplicate existing elements", () => {
      expect(appendAll([2, 3])(new Set([1, 2]))).toEqual(new Set([1, 2, 3]));
    });

    it("adds to empty set", () => {
      expect(appendAll([1, 2])(new Set())).toEqual(new Set([1, 2]));
    });

    it("does not modify the original", () => {
      const set = new Set([1, 2]);
      appendAll([3, 4])(set);
      expect(set).toEqual(new Set([1, 2]));
    });
  });

  describe("map", () => {
    it("adds all entries", () => {
      const result = appendAll([["b", 2], ["c", 3]])(new Map([["a", 1]]));
      expect(result).toEqual(new Map([["a", 1], ["b", 2], ["c", 3]]));
    });

    it("overwrites existing keys", () => {
      const result = appendAll([["a", 99]])(new Map([["a", 1]]));
      expect(result.get("a")).toBe(99);
    });

    it("adds to empty map", () => {
      const result = appendAll([["a", 1]])(new Map());
      expect(result).toEqual(new Map([["a", 1]]));
    });

    it("does not modify the original", () => {
      const map = new Map([["a", 1]]);
      appendAll([["b", 2]])(map);
      expect(map.size).toBe(1);
    });
  });

  describe("pojo", () => {
    it("adds all entries", () => {
      expect(appendAll([["b", 2], ["c", 3]])({ a: 1 })).toEqual({ a: 1, b: 2, c: 3 });
    });

    it("overwrites existing keys", () => {
      expect(appendAll([["a", 99]])({ a: 1 })).toEqual({ a: 99 });
    });

    it("adds to empty object", () => {
      expect(appendAll([["a", 1]])({})).toEqual({ a: 1 });
    });

    it("does not modify the original", () => {
      const obj = { a: 1 };
      appendAll([["b", 2]])(obj);
      expect(obj).toEqual({ a: 1 });
    });
  });

  describe("string", () => {
    it("appends all characters", () => {
      expect(appendAll(" mundo")("hola")).toBe("hola mundo");
    });

    it("appends to empty string", () => {
      expect(appendAll("abc")("")).toBe("abc");
    });

    it("appends empty iterable", () => {
      expect(appendAll("")("hola")).toBe("hola");
    });
  });

  describe("iterable (lazy)", () => {
    const gen = function* () { yield 1; yield 2; };

    it("returns an iterable", () => {
      const result = appendAll([3, 4])(gen());
      expect(typeof result[Symbol.iterator]).toBe("function");
    });

    it("yields original elements then new ones", () => {
      const result = appendAll([3, 4])(gen());
      expect([...result]).toEqual([1, 2, 3, 4]);
    });

    it("is lazy", () => {
      let consumed = 0;
      const lazy = (function* () { while (true) { consumed++; yield consumed; } })();
      const result = appendAll([99])(lazy);
      expect(consumed).toBe(0);
      const [first] = result;
      expect(first).toBe(1);
    });
  });
});
