import { describe, it, expect } from 'vitest'
import isEmpty from '../../src/isEmpty.js'

describe('isEmpty', () => {
  it('returns true for empty iterables', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty(new Set())).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty((function* () { })())).toBe(true)
  })

  it('returns false for non-empty iterables', () => {
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty(new Set([1]))).toBe(false)
    expect(isEmpty('a')).toBe(false)
    expect(isEmpty((function* () { yield 1 })())).toBe(false)
  })

  it('returns false for non-iterables (or handles gracefully)', () => {
    expect(isEmpty(null)).toBe(false)
    expect(isEmpty(undefined)).toBe(false)
    expect(isEmpty(123)).toBe(false)
  })
})
