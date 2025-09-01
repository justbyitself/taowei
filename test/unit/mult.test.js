import { describe, it, expect } from 'vitest'
import mult from '../../src/mult.js'

describe('mult', () => {
  it('returns a function when given one argument', () => {
    const mul5 = mult(5)
    expect(typeof mul5).toBe('function')
    expect(mul5(2)).toBe(10)
  })

  it('multiplies two positive numbers', () => {
    expect(mult(3)(4)).toBe(12)
    expect(mult(0)(10)).toBe(0)
  })

  it('handles negatives and zero', () => {
    expect(mult(-3)(1)).toBe(-3)
    expect(mult(-5)(-6)).toBe(30)
    expect(mult(0)(0)).toBe(0)
  })

  it('works with floats', () => {
    expect(mult(0.1)(0.2)).toBeCloseTo(0.020000000000000004)
  })

  it('is referentially transparent (no mutation)', () => {
    const f = mult(2)
    expect(f(3)).toBe(6)
    expect(f(4)).toBe(8)
  })
})
