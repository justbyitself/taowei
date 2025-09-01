import { describe, it, expect } from 'vitest'
import max from '../../src/max.js'

describe('max', () => {
  it('returns a function when given one argument', () => {
    const max5 = max(5)
    expect(typeof max5).toBe('function')
    expect(max5(2)).toBe(5)
  })

  it('returns the larger of two positive numbers', () => {
    expect(max(3)(4)).toBe(4)
    expect(max(10)(0)).toBe(10)
  })

  it('handles negatives and zero', () => {
    expect(max(-3)(1)).toBe(1)
    expect(max(-5)(-6)).toBe(-5)
    expect(max(0)(0)).toBe(0)
  })

  it('works with floats', () => {
    expect(max(0.1)(0.2)).toBeCloseTo(0.2)
    expect(max(1.5)(1.2)).toBeCloseTo(1.5)
  })

  it('is referentially transparent (no mutation)', () => {
    const f = max(1)
    expect(f(2)).toBe(2)
    expect(f(3)).toBe(3)
  })
})
