import { describe, it, expect } from 'vitest'
import add from '../../src/add.js'

describe('add', () => {
  it('returns a function when given one argument', () => {
    const add5 = add(5)
    expect(typeof add5).toBe('function')
    expect(add5(2)).toBe(7)
  })

  it('adds two positive numbers', () => {
    expect(add(3)(4)).toBe(7)
    expect(add(0)(10)).toBe(10)
  })

  it('handles negatives and zero', () => {
    expect(add(-3)(1)).toBe(-2)
    expect(add(-5)(-6)).toBe(-11)
    expect(add(0)(0)).toBe(0)
  })

  it('works with floats', () => {
    expect(add(0.1)(0.2)).toBeCloseTo(0.30000000000000004)
  })

  it('is referentially transparent (no mutation)', () => {
    const f = add(1)
    expect(f(2)).toBe(3)
    expect(f(3)).toBe(4)
  })
})
