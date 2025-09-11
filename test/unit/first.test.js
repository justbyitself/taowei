import { describe, it, expect } from 'vitest'
import first from '../../src/first.js'

describe('first (value, undefined on empty)', () => {
  it('returns the first element of an array', () => {
    expect(first([1, 2, 3])).toBe(1)
  })

  it('returns the single value when given a single value array', () => {
    expect(first([42])).toBe(42)
  })

  it('returns undefined for empty input', () => {
    expect(first([])).toBeUndefined()
  })

  it('works with strings', () => {
    expect(first('hello')).toBe('h')
  })

  it('works with non-array iterables', () => {
    const set = new Set([1, 2, 3])
    expect(first(set)).toBe(1)
  })
})
