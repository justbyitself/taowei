import { describe, it, expect } from 'vitest'
import { isString } from '../../src'

describe('isString', () => {
  it('true for strings, false otherwise', () => {
    expect(isString('')).toBe(true)
    expect(isString('hi')).toBe(true)
    expect(isString(String(1))).toBe(true)
    expect(isString(1)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
    expect(isString({})).toBe(false)
  })
})

