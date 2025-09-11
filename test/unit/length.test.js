import { describe, it, expect } from 'vitest'
import length from '../../src/length.js'

describe('length', () => {
  it('returns 0 for empty iterable', () => {
    expect(length([])).toBe(0)
  })

  it('counts elements in a single iterable', () => {
    expect(length([1, 2, 3])).toBe(3)
  })

  it('works with custom iterables (objects with Symbol.iterator)', () => {
    const custom = {
      *[Symbol.iterator]() {
        yield 1
        yield 2
      }
    }
    expect(length(custom)).toBe(2)
  })

  it('counts large iterables without materializing them', () => {
    function* gen(n) { for (let i = 0; i < n; i++) yield i }
    expect(length(gen(1000))).toBe(1000)
  })
})
