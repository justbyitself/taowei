import { describe, it, expect } from 'vitest'
import { isIterably } from '../../src/index.js'

describe('isIterably', () => {
  it('should return false for null and undefined', () => {
    expect(isIterably(null)).toBe(false)
    expect(isIterably(undefined)).toBe(false)
  })

  it('should return false for primitive values', () => {
    expect(isIterably(1)).toBe(false)
    expect(isIterably(true)).toBe(false)
  })

  it('should return false for strings', () => {
    expect(isIterably('hello')).toBe(false)
  })

  it('should return true for arrays', () => {
    expect(isIterably([1, 2, 3])).toBe(true)
  })

  it('should return true for Sets', () => {
    expect(isIterably(new Set([1, 2, 3]))).toBe(true)
  })

  it('should return true for Maps', () => {
    expect(isIterably(new Map([['a', 1], ['b', 2]]))).toBe(true)
  })

  it('should return true for generator', () => {
    function* gen() {
      yield 1
      yield 2
    }
    expect(isIterably(gen())).toBe(true)
  })

  it('should return false for objects with Symbol.iterator', () => {
    const obj = {
      [Symbol.iterator]() {
        return {
          next() {
            return { done: true }
          }
        }
      }
    }
    expect(isIterably(obj)).toBe(true)
  })
})
