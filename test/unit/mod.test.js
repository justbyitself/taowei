import { describe, it, expect } from 'vitest'
import mod from '../../src/mod.js'

describe('mod', () => {
  it('returns a function when given one argument', () => {
    const mod5 = mod(5)
    expect(typeof mod5).toBe('function')
    expect(mod5(12)).toBe(2) // 12 % 5
  })

  it('computes remainder with positive numbers (first arg is divisor)', () => {
    expect(mod(3)(10)).toBe(1)   // 10 % 3
    expect(mod(2)(7)).toBe(1)
  })

  it('handles negatives and zero', () => {
    expect(mod(4)(-3)).toBe(-3 % 4) // JS semantics
    expect(mod(-4)(3)).toBe(3 % -4)
    expect(mod(0)(1)).toBeNaN() // 1 % 0 -> NaN
    expect(Number.isNaN(mod(0)(0))).toBe(true)
  })

  it('works with floats', () => {
    expect(mod(0.5)(1.2)).toBeCloseTo(1.2 % 0.5)
  })
})
