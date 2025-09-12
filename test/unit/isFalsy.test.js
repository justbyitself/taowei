import { describe, it, expect } from 'vitest'
import { isFalsy } from '../../src/index.js'

describe('isFalsy', () => {
  it('true for all JS falsy values, false otherwise', () => {
    expect(isFalsy(false)).toBe(true)
    expect(isFalsy(0)).toBe(true)
    expect(isFalsy(0n)).toBe(true)
    expect(isFalsy('')).toBe(true)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy(undefined)).toBe(true)
    expect(isFalsy(NaN)).toBe(true)

    expect(isFalsy(1)).toBe(false)
    expect(isFalsy('x')).toBe(false)
    expect(isFalsy([])).toBe(false)
    expect(isFalsy({})).toBe(false)
  })
})
