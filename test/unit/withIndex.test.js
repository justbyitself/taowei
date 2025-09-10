import { describe, it, expect } from 'vitest'

import withIndex from '../../src/withIndex.js'

describe('withIndex', () => {
  it('should add index to a simple array', () => {
    const input = ['a', 'b', 'c']
    const result = withIndex(input)
    expect([...result]).toEqual([['a', 0], ['b', 1], ['c', 2]])
  })

  it('should work with an empty array', () => {
    const input = []
    const result = [...withIndex(input)]
    expect(result).toEqual([])
  })

  it('should work with a single-element array', () => {
    const input = ['test']
    const result = [...withIndex(input)]
    expect(result).toEqual([['test', 0]])
  })

  it('should work with different types of iterables', () => {
    const input = new Set([10, 20, 30])
    const result = [...withIndex(input)]
    expect(result).toEqual([[10, 0], [20, 1], [30, 2]])
  })

  it('should work with generator functions', () => {
    function* generateNumbers() {
      yield 1
      yield 2
      yield 3
    }
    const result = [...withIndex(generateNumbers())]
    expect(result).toEqual([[1, 0], [2, 1], [3, 2]])
  })
})

