import { describe, it, expect } from 'vitest'
import isNotEqualTo from '../../src/isNotEqualTo.js'

describe('isNotEqualTo', () => {
  it('returns false for strictly equal values', () => {
    expect(isNotEqualTo(1)(1)).toBe(false)
    expect(isNotEqualTo('a')('a')).toBe(false)
    const obj = {}
    expect(isNotEqualTo(obj)(obj)).toBe(false)
  })

  it('returns true for non-strictly-equal values', () => {
    expect(isNotEqualTo(1)('1')).toBe(true)
    expect(isNotEqualTo(0)(false)).toBe(true)
    expect(isNotEqualTo({})({})).toBe(true)
  })
})
