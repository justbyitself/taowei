import { describe, it, expect } from 'vitest'
import isBoolean from '../../src/isBoolean.js'

describe('isBoolean', () => {
  it('returns true for booleans', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
  })

  it('returns false for non-booleans', () => {
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(undefined)).toBe(false)
  })
})
