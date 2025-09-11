import { describe, it, expect } from 'vitest'
import zipOf from '../../src/zipOf.js'

describe('zipOf', () => {
  it('zips multiple arrays', () => {
    const result = zipOf([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    expect(Array.from(result)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
  })

  it('stops at shortest iterable', () => {
    const result = zipOf([[1, 2, 3], [4, 5], [7, 8, 9]])
    expect(Array.from(result)).toEqual([[1, 4, 7], [2, 5, 8]])
  })

  it('works with custom iterables', () => {
    const custom1 = {
      *[Symbol.iterator]() {
        yield 10
        yield 20
      }
    }
    const custom2 = {
      *[Symbol.iterator]() {
        yield 30
        yield 40
        yield 50
      }
    }
    const custom3 = {
      *[Symbol.iterator]() {
        yield 60
        yield 70
      }
    }
    const result = zipOf([custom1, custom2, custom3])
    expect(Array.from(result)).toEqual([[10, 30, 60], [20, 40, 70]])
  })

  it('handles empty iterables', () => {
    const result = zipOf([[], [1, 2, 3], [4, 5]])
    expect(Array.from(result)).toEqual([])
  })
})
