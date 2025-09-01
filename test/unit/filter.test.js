import { describe, it, expect } from 'vitest'
import filter from '../../src/filter.js'

describe('filter', () => {
  it('filters elements greater than 5 from mixed iterables and non-iterables', () => {
    const result = filter(x => x > 5)([1, 2, 3], 6, [4, 5, 8, 9])
    expect(Array.from(result)).toEqual([6, 8, 9])
  })

  it('returns an empty iterable if no elements match', () => {
    const result = filter(x => x > 10)([1, 2, 3], 4, [5])
    expect(Array.from(result)).toEqual([])
  })

  it('handles empty iterables and non-iterables', () => {
    const result = filter(x => x > 0)([], 1, [2, 3])
    expect(Array.from(result)).toEqual([1, 2, 3])
  })

  it('filters elements from a single iterable and a non-iterable', () => {
    const result = filter(x => x % 2 === 0)([1, 2, 3], 4)
    expect(Array.from(result)).toEqual([2, 4])
  })

  it('returns an iterable with the only element that matches when all others are filtered out', () => {
    const result = filter(x => x < 0)([1, 2, 3], -1, [4, 5])
    expect(Array.from(result)).toEqual([-1])
  })
})
