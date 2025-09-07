import { describe, it, expect } from 'vitest'
import isInteger from '../../src/isInteger.js'

describe('isInteger', () => {
  it('returns true for integer numbers', () => {
    expect(isInteger(0)).toBe(true)
    expect(isInteger(1)).toBe(true)
    expect(isInteger(-1)).toBe(true)
    expect(isInteger(9007199254740991)).toBe(true) // Number.MAX_SAFE_INTEGER
  })

  it('returns false for non-integer numbers', () => {
    expect(isInteger(0.1)).toBe(false)
    expect(isInteger(-0.5)).toBe(false)
    expect(isInteger(Number.NaN)).toBe(false)
    expect(isInteger(Infinity)).toBe(false)
    expect(isInteger(-Infinity)).toBe(false)
  })

  it('returns false for non-number types', () => {
    expect(isInteger('1')).toBe(false)
    expect(isInteger(true)).toBe(false)
    expect(isInteger(null)).toBe(false)
    expect(isInteger(undefined)).toBe(false)
    expect(isInteger({})).toBe(false)
    expect(isInteger([])).toBe(false)
    expect(isInteger(() => 1)).toBe(false)
  })
})
