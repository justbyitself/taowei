import { describe, it, expect } from 'vitest'
import lt from '../../src/isLesserThan.js'

describe('isLesserThan', () => {
  it('returns true when value is less than threshold', () => {
    expect(lt(5)(3)).toBe(true)
    expect(lt(0)(-1)).toBe(true)
  })

  it('returns false when value equals or is greater than threshold', () => {
    expect(lt(3)(3)).toBe(false)
    expect(lt(2)(4)).toBe(false)
  })

  it('works curried', () => {
    const lessThan5 = lt(5)
    expect(lessThan5(4)).toBe(true)
    expect(lessThan5(5)).toBe(false)
  })

  it('handles NaN as per JS comparison semantics (always false)', () => {
    expect(lt(0)(NaN)).toBe(false)
  })

  it('compares numeric strings using JS coercion if applicable', () => {
    expect(lt('5')('4')).toBe(true)
  })
})
