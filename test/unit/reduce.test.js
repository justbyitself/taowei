import { describe, it, expect } from 'vitest'
import reduce from '../../src/reduce.js'

const add = (a, b) => a + b
const concat = (a, b) => String(a) + String(b)

describe('reduce (no initial value)', () => {
  it('reduces a single iterable using the first element as initial', () => {
    const result = reduce(add)([1, 2, 3, 4])
    // initial = 1, then 1+2+3+4 = 10
    expect(result).toBe(10)
  })

  it('reduces mixed iterables and values', () => {
    const result = reduce(add)([1, 2], 3, [4])
    // initial = 1, then 1+2+3+4 = 10
    expect(result).toBe(10)
  })

  it('reduces when first argument is a non-iterable value', () => {
    const result = reduce(add)(1, [2, 3], 4)
    // initial = 1, then 1+2+3+4 = 10
    expect(result).toBe(10)
  })

  it('returns the single element when there is exactly one element', () => {
    expect(reduce(add)([42])).toBe(42)
    expect(reduce(add)(42)).toBe(42)
  })

  it('throws when there are no elements', () => {
    expect(() => reduce(add)()).toThrow()
  })

  it('works with strings counted as single values (your exception)', () => {
    const result = reduce(concat)('a', ['b', 'c'])
    // initial = 'a', then 'a' + 'b' + 'c' = 'abc'
    expect(result).toBe('abc')
  })

  it('works with custom iterables', () => {
    const custom = {
      *[Symbol.iterator]() {
        yield 5
        yield 6
      }
    }
    // initial = 5, then 5+6 = 11
    expect(reduce(add)(custom)).toBe(11)
  })

  it('handles lazy generators without materializing', () => {
    function* gen(n) { for (let i = 0; i < n; i++) yield i }
    // initial = 0, then reduce over 1..9 -> sum 0..9 = 45 but since initial is 0 taken from gen,
    // actually initial=0, then adds 1..9 => 45
    expect(reduce(add)(gen(10))).toBe(45)
  })
})
