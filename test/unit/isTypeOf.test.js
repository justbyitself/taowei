import { describe, it, expect } from 'vitest'
import isTypeOf from '../../src/isTypeOf.js'

describe('isTypeOf', () => {
  it('returns a function that tests typeof equality', () => {
    const isNumber = isTypeOf('number')
    expect(typeof isNumber).toBe('function')
    expect(isNumber(1)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
    expect(isNumber('1')).toBe(false)
  })

  it('works for string, boolean, object, function, symbol, undefined', () => {
    expect(isTypeOf('string')('hi')).toBe(true)
    expect(isTypeOf('boolean')(false)).toBe(true)
    expect(isTypeOf('object')({})).toBe(true)
    expect(isTypeOf('function')(() => {})).toBe(true)
    const s = Symbol('s')
    expect(isTypeOf('symbol')(s)).toBe(true)
    expect(isTypeOf('undefined')(undefined)).toBe(true)
  })

  it('recognizes null as object (JS typeof behavior)', () =>
    expect(isTypeOf('object')(null)).toBe(true)
  )

  it('distinguishes arrays as object via typeof', () => {
    expect(isTypeOf('object')([])).toBe(true)
  })

  it('returns false for mismatched types', () => {
    expect(isTypeOf('number')('1')).toBe(false)
    expect(isTypeOf('function')({})).toBe(false)
  })
})
