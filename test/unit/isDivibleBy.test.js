import { describe, it, expect } from 'vitest'
import isDivisibleBy from '../../src/isDivisibleBy.js'

describe('isDivisibleBy', () => {
  it('returns true when value is divisible by divisor', () => {
    expect(isDivisibleBy(2)(4)).toBe(true)
    expect(isDivisibleBy(3)(-6)).toBe(true)
    expect(isDivisibleBy(5)(0)).toBe(true)
  })

  it('returns false when value is not divisible by divisor', () => {
    expect(isDivisibleBy(2)(3)).toBe(false)
    expect(isDivisibleBy(3)(5)).toBe(false)
  })

  it('handles division by zero gracefully (returns false)', () => {
    expect(isDivisibleBy(0)(5)).toBe(false)
    expect(isDivisibleBy(0)(0)).toBe(false)
  })
})
