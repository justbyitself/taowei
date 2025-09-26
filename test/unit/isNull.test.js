import { describe, it, expect } from 'vitest'
import isNull from '../../src/isNull.js'

describe('isNull', () => {
  it('returns true only for null and false for any other value', () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull(false)).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull({})).toBe(false)
  })
})
