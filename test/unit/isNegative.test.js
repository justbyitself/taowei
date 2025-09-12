import { describe, it, expect } from 'vitest'
import { isNegative } from '../../src/index.js'

describe('isNegative', () => {
  it('returns true for numbers less than 0 and false otherwise', () => {
    expect(isNegative(-1)).toBe(true)
    expect(isNegative(-3.14)).toBe(true)

    expect(isNegative(0)).toBe(false)
    expect(isNegative(-0)).toBe(false)
    expect(isNegative(1)).toBe(false)
    expect(isNegative(NaN)).toBe(false)
    expect(isNegative(0n)).toBe(false)
    expect(isNegative(null)).toBe(false)
    expect(isNegative(undefined)).toBe(false)
  })
})
