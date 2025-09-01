import { describe, it, expect } from 'vitest'
import gte from '../../src/isGreaterThanOrEqualTo.js'

describe('isGreaterThanOrEqualTo', () => {
  it('returns true when value is greater than or equal to threshold', () => {
    expect(gte(3)(5)).toBe(true)
    expect(gte(3)(3)).toBe(true)
    expect(gte(-2)(-2)).toBe(true)
  })

  it('returns false when value is less than threshold', () => {
    expect(gte(3)(2)).toBe(false)
  })

  it('works curried', () => {
    const ge0 = gte(0)
    expect(ge0(0)).toBe(true)
    expect(ge0(-1)).toBe(false)
  })

  it('handles NaN as per JS comparison semantics (always false)', () => {
    expect(gte(0)(NaN)).toBe(false)
  })

  it('compares numeric strings using JS coercion if applicable', () => {
    expect(gte('2')('2')).toBe(true)
  })
})
