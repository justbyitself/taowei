import { describe, it, expect } from 'vitest'
import { isIterator } from '../../src/index.js'

describe('isIterator', () => {
  it('should return true for a valid iterator', () => {
    function* generator() {
      yield 1
      yield 2
    }
    const iterator = generator()
    expect(isIterator(iterator)).toBe(true)
  })

  it('should return false for an object without next method', () => {
    const obj = { value: 1 }
    expect(isIterator(obj)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isIterator(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isIterator(undefined)).toBe(false)
  })

  it('should return false for a regular object', () => {
    const obj = { next: 1 }
    expect(isIterator(obj)).toBe(false)
  })

  it('should return false for an array', () => {
    const arr = [1, 2, 3]
    expect(isIterator(arr)).toBe(false)
  })

  it('should return false for a string', () => {
    const str = 'hello'
    expect(isIterator(str)).toBe(false)
  })

  it('should return true for a custom iterator', () => {
    const customIterator = {
      next: () => ({ value: 1, done: false })
    }
    expect(isIterator(customIterator)).toBe(true)
  })

  it('should return true for something returned by Iterator.from', () => {
    const iterator = Iterator.from([1, 2, 3])
    expect(isIterator(iterator)).toBe(true)
  })
})
