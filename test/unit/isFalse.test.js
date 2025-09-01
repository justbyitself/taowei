import { describe, it, expect } from 'vitest'
import { isFalse } from '../../src'

describe('isFalse', () => {
  it('true only for strict false', () => {
    expect(isFalse(false)).toBe(true)
    expect(isFalse(0)).toBe(false)
    expect(isFalse('false')).toBe(false)
    expect(isFalse(null)).toBe(false)
    expect(isFalse(undefined)).toBe(false)
    expect(isFalse([])).toBe(false)
    expect(isFalse({})).toBe(false)
  })
})
