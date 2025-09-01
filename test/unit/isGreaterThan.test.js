import { describe, it, expect } from 'vitest'
import gt from '../../src/isGreaterThan.js'

describe('isGreaterThan', () => {
  it('returns true when value is greater than threshold', () => {
    expect(gt(3)(5)).toBe(true)
    expect(gt(-1)(0)).toBe(true)
  })

  it('returns false when value equals or is less than threshold', () => {
    expect(gt(3)(3)).toBe(false)
    expect(gt(3)(2)).toBe(false)
  })

  it('works curried', () => {
    const greaterThan10 = gt(10)
    expect(greaterThan10(11)).toBe(true)
    expect(greaterThan10(10)).toBe(false)
  })

  it('handles NaN as per JS comparison semantics (always false)', () => {
    expect(gt(0)(NaN)).toBe(false)
  })

  it('compares numeric strings using JS coercion if applicable', () => {
    expect(gt('2')('3')).toBe(true)
  })
})
