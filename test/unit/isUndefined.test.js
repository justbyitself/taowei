import { describe, it, expect } from 'vitest'
import isUndefined from '../../src/isUndefined.js'

describe('isUndefined', () => {
  it('returns true only for undefined, false for other values', () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined('')).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined({})).toBe(false)
  })
})
