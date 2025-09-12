import { describe, it, expect } from 'vitest'
import { isTruthy } from '../../src/index.js'

describe('isTruthy', () => {
  it('true for truthy values, false for falsy ones', () => {
    expect(isTruthy(1)).toBe(true)
    expect(isTruthy('x')).toBe(true)
    expect(isTruthy([])).toBe(true)
    expect(isTruthy({})).toBe(true)
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy('')).toBe(false)
    expect(isTruthy(null)).toBe(false)
    expect(isTruthy(undefined)).toBe(false)
    expect(isTruthy(false)).toBe(false)
  })
})
