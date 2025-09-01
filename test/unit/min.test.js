import { describe, it, expect } from 'vitest'
import min from '../../src/min.js'

describe('min', () => {
  it('returns a function when given one argument', () => {
    const min5 = min(5)
    expect(typeof min5).toBe('function')
    expect(min5(2)).toBe(2)
  })

  it('returns the smaller of two positive numbers', () => {
    expect(min(3)(4)).toBe(3)
    expect(min(10)(0)).toBe(0)
  })

  it('handles negatives and zero', () => {
    expect(min(-3)(1)).toBe(-3)
    expect(min(-5)(-6)).toBe(-6)
    expect(min(0)(0)).toBe(0)
  })

  it('works with floats', () => {
    expect(min(0.1)(0.2)).toBeCloseTo(0.1)
    expect(min(1.5)(1.2)).toBeCloseTo(1.2)
  })

  it('is referentially transparent (no mutation)', () => {
    const f = min(1)
    expect(f(2)).toBe(1)
    expect(f(3)).toBe(1)
  })
})
