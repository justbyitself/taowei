import { describe, it, expect } from 'vitest'
import zip from '../../src/zip.js'

describe('zip', () => {
  it('zips two arrays', () => {
    const result = zip([1, 2, 3])([4, 5, 6])
    expect(Array.from(result)).toEqual([[1, 4], [2, 5], [3, 6]])
  })

  it('stops at shortest iterable', () => {
    const result = zip([1, 2, 3])([4, 5])
    expect(Array.from(result)).toEqual([[1, 4], [2, 5]])
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
    const result = zip(custom1)(custom2)
    expect(Array.from(result)).toEqual([[10, 30], [20, 40]])
  })

  it('handles empty iterables', () => {
    const result = zip([])([1, 2, 3])
    expect(Array.from(result)).toEqual([])
  })
})
