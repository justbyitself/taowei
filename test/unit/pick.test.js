import { describe, it, expect } from 'vitest'

import pick from '../../src/pick.js'
import toReusable from '../../src/toReusable.js'

describe('pick', () => {
  it('returns undefined with empty iterable', () => {
    expect(pick([])).toBeUndefined()
  })

  it('returns the single argument when one provided', () => {
    const v = {}
    expect(pick([v])).toBe(v)
  })

  it('returns one of the provided values', () => {
    const a = 1, b = 2, c = 3
    const v = pick([a, b, c])
    expect([a, b, c]).toContain(v)
  })

  it('works with Set', () => {
    const testSet = new Set([1, 2, 3, 4, 5])
    const result = pick(testSet)
    expect([...testSet]).toContain(result)
  })

  it('works with generator function', () => {
    const generateNumbers = toReusable(function* () {
      yield 1
      yield 2
      yield 3
      yield 4
      yield 5
    })
    
    const result = pick(generateNumbers)
    expect([1, 2, 3, 4, 5]).toContain(result)
  })

  it('works with typed arrays', () => {
    const testArray = new Int32Array([10, 20, 30, 40, 50])
    const result = pick(testArray)
    expect([10, 20, 30, 40, 50]).toContain(result)
  })

  it('handles iterables with different types', () => {
    const mixedIterable = [1, 'two', { three: 3 }, [4], null]
    const result = pick(mixedIterable)
    expect(mixedIterable).toContain(result)
  })

  it('works with string as an iterable', () => {
    const testString = 'hello'
    const result = pick(testString)
    expect(['h', 'e', 'l', 'o']).toContain(result)
  })

  it('handles very large iterables', () => {
    const largeArray = Array.from({ length: 10000 }, (_, i) => i)
    const result = pick(largeArray)
    expect(largeArray).toContain(result)
  })
})
