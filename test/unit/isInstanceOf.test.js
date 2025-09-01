import { describe, it, expect } from 'vitest'
import isInstanceOf from '../../src/isInstanceOf.js'

describe('isInstanceOf', () => {
  it('returns a function that tests instanceof', () => {
    const isDate = isInstanceOf(Date)
    expect(typeof isDate).toBe('function')
    expect(isDate(new Date())).toBe(true)
    expect(isDate({})).toBe(false)
  })

  it('works with custom constructors', () => {
    function C() {}
    const c = new C()
    expect(isInstanceOf(C)(c)).toBe(true)
    expect(isInstanceOf(C)({})).toBe(false)
  })

  it('works with built-in constructors', () => {
    expect(isInstanceOf(Array)([])).toBe(true)
    expect(isInstanceOf(Function)(() => {})).toBe(true)
    expect(isInstanceOf(RegExp)(/x/)).toBe(true)
  })

  it('returns false for null and undefined', () => {
    expect(isInstanceOf(Object)(null)).toBe(false)
    expect(isInstanceOf(Object)(undefined)).toBe(false)
  })

  it('throws when constructor is not callable', () => {
    expect(() => isInstanceOf(null)({})).toThrow()
    expect(() => isInstanceOf(123)({})).toThrow()
  })
})
