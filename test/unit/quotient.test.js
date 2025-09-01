import { describe, it, expect } from 'vitest'
import quotient from '../../src/quotient.js'

describe('quotient', () => {
  it('returns a function when given one argument', () => {
    const half = quotient(2)
    expect(typeof half).toBe('function')
    expect(half(10)).toBe(5)
  })

  it('performs integer division using Math.floor (first arg is divisor)', () => {
    expect(quotient(3)(9)).toBe(3)
    expect(quotient(2)(7)).toBe(3)
  })

  it('handles negatives and zero (floor semantics)', () => {
    expect(quotient(-2)(8)).toBe(-4)
    expect(quotient(2)(-8)).toBe(-4)
    expect(quotient(-2)(-8)).toBe(4)
    expect(quotient(2)(-3)).toBe(-2)
  })

  it('handles division by zero consistent with Math.floor behavior', () => {
    expect(quotient(0)(1)).toBe(Infinity)
    expect(quotient(0)(-1)).toBe(-Infinity)
    expect(Number.isNaN(quotient(0)(0))).toBe(true)
  })

  it('is referentially transparent (no mutation)', () => {
    const f = quotient(2)
    expect(f(3)).toBe(1)
    expect(f(4)).toBe(2)
  })
})
