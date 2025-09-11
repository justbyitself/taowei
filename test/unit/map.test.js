import { describe, it, expect } from 'vitest'
import map from '../../src/map.js'

describe('map', () => {
  it('maps over mixed iterables', () => {
    const double = x => x * 2
    const result = map(double)([1, 2, 3, 4])
    expect(Array.from(result)).toEqual([2, 4, 6, 8])
  })

  it('handles empty iterables', () => {
    const inc = x => x + 1
    const result = map(inc)([])
    expect(Array.from(result)).toEqual([])
  })

  it('works with custom iterables', () => {
    const addOne = x => x + 1
    const custom = {
      *[Symbol.iterator]() {
        yield 10
        yield 20
      }
    }
    const result = map(addOne)(custom)
    expect(Array.from(result)).toEqual([11, 21])
  })
})
