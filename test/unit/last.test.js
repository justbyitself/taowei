import { describe, it, expect } from 'vitest'
import last from '../../src/last.js'

describe('last', () => {
  it('returns the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3)
  })

  it('returns the single value when array has one element', () => {
    expect(last([42])).toBe(42)
  })

  it('returns undefined for empty input', () => {
    expect(last([])).toBeUndefined()
  })

  it('works with non-array iterables', () => {
    const set = new Set([1, 2, 3])
    expect(last(set)).toBe(3)
  })
})
