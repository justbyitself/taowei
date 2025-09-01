import { describe, it, expect } from 'vitest'
import sub from '../../src/sub.js'

describe('sub', () => {
  it('returns a function when given one argument', () => {
    const sub5 = sub(5)
    expect(typeof sub5).toBe('function')
    expect(sub5(2)).toBe(-3) // 2 - 5
  })

  it('subtracts two positive numbers (first arg is subtrahend)', () => {
    expect(sub(3)(4)).toBe(1)  // 4 - 3
    expect(sub(0)(10)).toBe(10)
  })

  it('handles negatives and zero', () => {
    expect(sub(-3)(1)).toBe(4)   // 1 - (-3)
    expect(sub(-5)(-6)).toBe(-1) // -6 - (-5)
    expect(sub(0)(0)).toBe(0)
  })

  it('works with floats', () => {
    expect(sub(0.1)(0.2)).toBeCloseTo(0.1) // 0.2 - 0.1
  })

  it('is referentially transparent (no mutation)', () => {
    const f = sub(1)
    expect(f(2)).toBe(1)  // 2 - 1
    expect(f(3)).toBe(2)  // 3 - 1
  })
})
