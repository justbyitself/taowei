import { describe, it, expect } from 'vitest'
import div from '../../src/div.js'

describe('div', () => {
  it('returns a function when given one argument', () => {
    const half = div(2)
    expect(typeof half).toBe('function')
    expect(half(10)).toBe(5) // 10 / 2
  })

  it('divides two positive numbers (first arg is divisor)', () => {
    expect(div(3)(9)).toBe(3)   // 9 / 3
    expect(div(2)(7)).toBe(3.5)
  })

  it('handles negatives and zero', () => {
    expect(div(-2)(8)).toBe(-4)   // 8 / -2
    expect(div(2)(-8)).toBe(-4)   // -8 / 2
    expect(div(-2)(-8)).toBe(4)   // -8 / -2
  })

  it('works with floats', () => {
    expect(div(0.1)(0.3)).toBeCloseTo(3) // 0.3 / 0.1
  })

  it('handles division by zero as JS does (Infinity/-Infinity or NaN)', () => {
    expect(div(0)(1)).toBe(Infinity)   // 1 / 0
    expect(div(0)(-1)).toBe(-Infinity) // -1 / 0
    expect(Number.isNaN(div(0)(0))).toBe(true) // 0 / 0 -> NaN
  })
})
