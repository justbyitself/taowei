import { describe, it, expect } from 'vitest'
import toArray from '../../src/toArray.js'

describe('toArray', () => {
  it('converts an array-like iterable to a real array', () => {
    const arr = toArray([1, 2, 3])
    expect(Array.isArray(arr)).toBe(true)
    expect(arr).toEqual([1, 2, 3])
  })

  it('converts non-array iterables (Set) to array preserving order', () => {
    const set = new Set([1, 2, 3])
    expect(toArray(set)).toEqual([1, 2, 3])
  })

  it('handles empty iterables', () => {
    expect(toArray([])).toEqual([])
  })

  it('does not treat strings as iterables if library policy says so', () => {
    expect(toArray('ab')).toEqual(['ab'])
  })
})
