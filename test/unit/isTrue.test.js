import { describe, it, expect } from 'vitest'
import { isTrue } from '../../src'

describe('isTrue', () => {
  it('returns true only for strict true', () => {
    expect(isTrue(true)).toBe(true)
    expect(isTrue(false)).toBe(false)
    expect(isTrue(1)).toBe(false)
    expect(isTrue('true')).toBe(false)
    expect(isTrue(null)).toBe(false)
    expect(isTrue(undefined)).toBe(false)
    expect(isTrue({})).toBe(false)
    expect(isTrue([])).toBe(false)
  })
})
