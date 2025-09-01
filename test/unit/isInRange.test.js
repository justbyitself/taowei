import { describe, it, expect } from 'vitest'
import isInRange from '../../src/isInRange.js'

describe('isInRange', () => {
  it('returns a function that tests inclusive range membership', () => {
    const in01 = isInRange(0)(1)
    expect(typeof in01).toBe('function')
    expect(in01(0)).toBe(true)
    expect(in01(1)).toBe(true)
    expect(in01(0.5)).toBe(true)
    expect(in01(-0.1)).toBe(false)
    expect(in01(1.1)).toBe(false)
  })

  it('works with negative ranges', () => {
    const neg = isInRange(-3)(-1)
    expect(neg(-3)).toBe(true)
    expect(neg(-2)).toBe(true)
    expect(neg(-1)).toBe(true)
    expect(neg(0)).toBe(false)
  })

  it('handles equal from and to (single-value range)', () => {
    const single = isInRange(5)(5)
    expect(single(5)).toBe(true)
    expect(single(4.999)).toBe(false)
    expect(single(5.001)).toBe(false)
  })

  it('handles non-integer inputs', () => {
    const r = isInRange(0.1)(0.3)
    expect(r(0.2)).toBe(true)
    expect(r(0.2999999)).toBe(true)
  })
})
