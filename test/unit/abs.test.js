import { describe, it, expect } from 'vitest'
import abs from '../../src/abs.js'

describe('abs', () => {
  it('returns positive for positive numbers', () => {
    expect(abs(5)).toBe(5)
    expect(abs(0.1)).toBeCloseTo(0.1)
  })

  it('returns positive for negative numbers', () => {
    expect(abs(-5)).toBe(5)
    expect(abs(-0.1)).toBeCloseTo(0.1)
  })

  it('handles zero and -0', () => {
    expect(abs(0)).toBe(0)
    // -0 === 0, but preserve sign check via 1/x
    expect(Object.is(abs(-0), 0)).toBe(true)
    expect(1 / abs(-0)).toBe(Infinity)
  })

  it('handles NaN and infinities', () => {
    expect(Number.isNaN(abs(NaN))).toBe(true)
    expect(abs(Infinity)).toBe(Infinity)
    expect(abs(-Infinity)).toBe(Infinity)
  })

  it('coerces numeric strings and booleans like Math.abs', () => {
    expect(abs('10')).toBe(10)
    expect(abs('-3.5')).toBeCloseTo(3.5)
    expect(abs(true)).toBe(1)
    expect(abs(false)).toBe(0)
  })

  it('returns NaN for non-numeric values that cannot be coerced', () => {
    expect(Number.isNaN(abs(undefined))).toBe(true)
    expect(Number.isNaN(abs({}))).toBe(true)
    expect(Number.isNaN(abs('abc'))).toBe(true)
  })
})
