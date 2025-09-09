import { describe, it, expect } from 'vitest'

import withIndex from '../../src/withIndex.js'

describe('withIndex function', () => {
  // Basic functionality test with a simple array
  it('should add index to a simple array', () => {
    const input = ['a', 'b', 'c']
    const result = [...withIndex(input)]
    expect(result).toEqual([[0, 'a'], [1, 'b'], [2, 'c']])
  })

  // Edge case: empty array
  it('should work with an empty array', () => {
    const input = []
    const result = [...withIndex(input)]
    expect(result).toEqual([])
  })

  // Edge case: single-element array
  it('should work with a single-element array', () => {
    const input = ['test']
    const result = [...withIndex(input)]
    expect(result).toEqual([[0, 'test']])
  })

  // Test with different iterable types
  it('should work with different types of iterables', () => {
    const input = new Set([10, 20, 30])
    const result = [...withIndex(input)]
    expect(result).toEqual([[0, 10], [1, 20], [2, 30]])
  })

  // Test with generator functions
  it('should work with generator functions', () => {
    function* generateNumbers() {
      yield 1
      yield 2
      yield 3
    }
    const result = [...withIndex(generateNumbers())]
    expect(result).toEqual([[0, 1], [1, 2], [2, 3]])
  })
})

