import { describe, it, expect } from 'vitest'
import reject from '../../src/reject.js'

describe('reject', () => {
  it('rejects elements greater than 5 from mixed iterables and non-iterables', () => {
    const result = reject(x => x > 5)([1, 2, 3], 6, [4, 5, 8, 9])
    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('returns all elements if none are rejected', () => {
    const result = reject(x => x > 10)([1, 2, 3], 4, [5])
    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('handles empty iterables and non-iterables', () => {
    const result = reject(x => x <= 0)([], 1, [2, 3])
    expect(Array.from(result)).toEqual([1, 2, 3])
  })

  it('rejects elements from a single iterable and a non-iterable', () => {
    const result = reject(x => x % 2 === 0)([1, 2, 3], 4)
    expect(Array.from(result)).toEqual([1, 3])
  })

  it('returns an empty iterable when everything is rejected', () => {
    const result = reject(x => x < 10)([1, 2, 3], 4, [5])
    expect(Array.from(result)).toEqual([])
  })

  it('keeps only non-matching single element when others are rejected', () => {
    const result = reject(x => x >= 0)([1, 2, 3], -1, [4, 5])
    expect(Array.from(result)).toEqual([-1])
  })

  it('works with non-function predicates by treating them as truthy/falsy values', () => {
    // si la API no admite esto, elimina este test
    const result = reject(Boolean)([0, 1, '', 'a', null, 2])
    expect(Array.from(result)).toEqual([0, '', null])
  })

  it('preserves order across multiple iterables/non-iterables', () => {
    const result = reject(x => x === 'skip')(['a', 'skip'], 'b', ['skip', 'c'])
    expect(Array.from(result)).toEqual(['a', 'b', 'c'])
  })
})
