import { describe, it, expect } from 'vitest'
import { isNullish } from '../../src'

describe('isNullish', () => {
  it('true for null or undefined, false otherwise', () => {
    expect(isNullish(null)).toBe(true)
    expect(isNullish(undefined)).toBe(true)
    expect(isNullish(0)).toBe(false)
    expect(isNullish('')).toBe(false)
    expect(isNullish(false)).toBe(false)
  })
})
