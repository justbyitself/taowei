import { describe, it, expect } from 'vitest'
import isNotEmpty from '../../src/isNotEmpty.js'

describe('isNotEmpty', () => {
  it('returns false for empty iterables', () => {
    expect(isNotEmpty([])).toBe(false)
    expect(isNotEmpty(new Set())).toBe(false)
    expect(isNotEmpty('')).toBe(false)
    expect(isNotEmpty((function* () { })())).toBe(false)
  })

  it('returns true for non-empty iterables', () => {
    expect(isNotEmpty([1])).toBe(true)
    expect(isNotEmpty(new Set([1]))).toBe(true)
    expect(isNotEmpty('a')).toBe(true)
    expect(isNotEmpty((function* () { yield 1 })())).toBe(true)
  })

  it('returns true for non-iterables (or handles gracefully)', () => {
    expect(isNotEmpty(null)).toBe(true)
    expect(isNotEmpty(undefined)).toBe(true)
    expect(isNotEmpty(123)).toBe(true)
  })
})
