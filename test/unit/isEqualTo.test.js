import { describe, it, expect } from 'vitest'
import isEqualTo from '../../src/isEqualTo.js'

describe('isEqualTo', () => {
  it('returns true for strictly equal values', () => {
    expect(isEqualTo(1)(1)).toBe(true)
    expect(isEqualTo('a')('a')).toBe(true)
    const obj = {}
    expect(isEqualTo(obj)(obj)).toBe(true)
  })

  it('returns false for non-strictly-equal values', () => {
    expect(isEqualTo(1)('1')).toBe(false)
    expect(isEqualTo(0)(false)).toBe(false)
    expect(isEqualTo({})({})).toBe(false)
  })
})
