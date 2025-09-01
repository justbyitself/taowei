import { describe, it, expect } from 'vitest'
import { isIterator } from '../../src'

describe('isIterator', () => {
  it('should return false for null and undefined', () => {
    expect(isIterator(null)).toBe(false)
    expect(isIterator(undefined)).toBe(false)
  })

  it('should return false for primitive values', () => {
    expect(isIterator(1)).toBe(false)
    expect(isIterator('hello')).toBe(false)
    expect(isIterator(true)).toBe(false)
  })

  it('should return false for objects without next', () => {
    expect(isIterator({})).toBe(false)
    expect(isIterator({ foo: 'bar' })).toBe(false)
  })

  it('should return true for iterators', () => {
    const arr = [1, 2, 3]
    const iterator = arr[Symbol.iterator]()
    expect(isIterator(iterator)).toBe(true)
  })

  it('should return false for iterables', () => {
    const arr = [1, 2, 3]
    expect(isIterator(arr)).toBe(false)
  })

  it('should return false for objects with next but not as a function', () => {
    expect(isIterator({ next: 'not a function' })).toBe(false)
    expect(isIterator({ next: 123 })).toBe(false)
  })

  it('should return true for generators', () => {
    function* gen() {
      yield 1
      yield 2
      yield 3
    }

    const iterator = gen()
    expect(isIterator(iterator)).toBe(true)
  })
})
