import { describe, it, expect } from 'vitest'
import lte from '../../src/isLesserThanOrEqualTo.js'

describe('isLesserThanOrEqualTo', () => {
  it('returns true when value is less than or equal to threshold', () => {
    expect(lte(5)(3)).toBe(true)
    expect(lte(5)(5)).toBe(true)
    expect(lte(-1)(-1)).toBe(true)
  })

  it('returns false when value is greater than threshold', () => {
    expect(lte(3)(4)).toBe(false)
  })

  it('works curried', () => {
    const le10 = lte(10)
    expect(le10(10)).toBe(true)
    expect(le10(11)).toBe(false)
  })

  it('handles NaN as per JS comparison semantics (always false)', () => {
    expect(lte(0)(NaN)).toBe(false)
  })

  it('compares numeric strings using JS coercion if applicable', () => {
    expect(lte('5')('5')).toBe(true)
  })
})
