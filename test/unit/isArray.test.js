import { describe, it, expect } from 'vitest'
import isArray from '../../src/isArray.js'

describe('isArray', () => {
  it('returns true for arrays', () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
  })

  it('returns false for non-arrays', () => {
    expect(isArray({})).toBe(false)
    expect(isArray('string')).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })
})
