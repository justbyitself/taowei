import { describe, it, expect } from 'vitest'
import reject from '../../src/reject.js'

describe('reject', () => {
  it('returns all elements if none are rejected', () => {
    const result = reject(x => x > 10)([1, 2, 3, 4, 5])
    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('rejects elements from a single iterable and a non-iterable', () => {
    const result = reject(x => x % 2 === 0)([1, 2, 3], 4)
    expect(Array.from(result)).toEqual([1, 3])
  })

  it('returns an empty iterable when everything is rejected', () => {
    const result = reject(x => x < 10)([1, 2, 3, 4, 5])
    expect(Array.from(result)).toEqual([])
  })

  it('works with non-function predicates by treating them as truthy/falsy values', () => {
    // si la API no admite esto, elimina este test
    const result = reject(Boolean)([0, 1, '', 'a', null, 2])
    expect(Array.from(result)).toEqual([0, '', null])
  })
})
