import { describe, it, expect } from 'vitest'
import length from '../../src/length.js'

describe('length', () => {
  it('returns 0 for no arguments', () => {
    expect(length()).toBe(0)
  })

  it('counts elements in a single iterable', () => {
    expect(length([1, 2, 3])).toBe(3)
  })

  it('counts non-iterable values as single elements', () => {
    expect(length(1, 'a', true)).toBe(3)
  })

  it('concatenates iterables and values correctly', () => {
    expect(length([1, 2], 3, [4, 5, 6])).toBe(6)
  })

  it('handles empty iterables and mixed inputs', () => {
    expect(length([], 1, [], 2)).toBe(2)
  })

  it('treats strings as single values (exception)', () => {
    expect(length('abc', [1])).toBe(2) // 'abc' counted as 1 + array has 1 element
  })

  it('works with custom iterables (objects with Symbol.iterator)', () => {
    const custom = {
      *[Symbol.iterator]() {
        yield 1
        yield 2
      }
    }
    expect(length(custom, 3)).toBe(3)
  })

  it('counts large iterables without materializing them', () => {
    function* gen(n) { for (let i = 0; i < n; i++) yield i }
    expect(length(gen(1000))).toBe(1000)
  })
})
