import { describe, it, expect } from 'vitest'
import isOdd from '../../src/isOdd.js'

describe('isOdd', () => {
  it('returns true for odd numbers', () => {
    expect(isOdd(1)).toBe(true)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(-5)).toBe(true)
  })

  it('returns false for non-odd numbers', () => {
    expect(isOdd(2)).toBe(false)
    expect(isOdd(0)).toBe(false)
  })
})
