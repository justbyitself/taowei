import { describe, it, expect } from 'vitest'
import filter from '../../src/filter.js'

describe('filter', () => {
  it('returns an empty iterable if no elements match', () => {
    const result = filter(x => x > 10)([1, 2, 3, 4, 5])
    expect(Array.from(result)).toEqual([])
  })

  it('filters elements from a single iterable and a non-iterable', () => {
    const result = filter(x => x % 2 === 0)([1, 2, 3, 4])
    expect(Array.from(result)).toEqual([2, 4])
  })
})
