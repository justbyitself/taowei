import { describe, it, expect } from 'vitest'
import { isPositive } from '../../src/index.js'

describe('isPositive', () => {
  it('returns true for numbers greater than 0 and false otherwise', () => {
    expect(isPositive(1)).toBe(true)
    expect(isPositive(3.14)).toBe(true)
    expect(isPositive(Number.EPSILON)).toBe(true)

    expect(isPositive(0)).toBe(false)
    expect(isPositive(-0)).toBe(false)
    expect(isPositive(-1)).toBe(false)
    expect(isPositive(NaN)).toBe(false)
    expect(isPositive(0n)).toBe(false)
    expect(isPositive(null)).toBe(false)
    expect(isPositive(undefined)).toBe(false)
  })
})
