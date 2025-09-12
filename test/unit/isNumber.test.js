import { describe, it, expect } from 'vitest'
import { isNumber } from '../../src/index.js'

describe('isNumber', () => {
  it('true for numbers, false otherwise', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
    expect(isNumber('1')).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber({})).toBe(false)
  })
})
