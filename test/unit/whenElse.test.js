import { describe, it, expect } from 'vitest'
import whenElse from '../../src/whenElse.js'

describe('whenElse', () => {
  it('returns ifTruthy value when predicate is true (predicate boolean)', () => {
    expect(whenElse(true)('then')('else')('ignored')).toBe('then')
  })

  it('returns ifFalsy value when predicate is false (predicate boolean)', () => {
    expect(whenElse(false)('then')('else')('ignored')).toBe('else')
  })

  it('uses predicate function applied to value', () => {
    const isEven = n => n % 2 === 0
    expect(whenElse(isEven)('even')('odd')(4)).toBe('even')
    expect(whenElse(isEven)('even')('odd')(3)).toBe('odd')
  })

  it('uses predicate non-function as equality comparator', () => {
    // predicate 42 -> checks value === 42
    expect(whenElse(42)('match')('nope')(42)).toBe('match')
    expect(whenElse(42)('match')('nope')(0)).toBe('nope')
  })

  it('accepts ifTruthy and ifFalsy as functions (they receive the value)', () => {
    const truthyFn = v => `T:${v}`
    const falsyFn = v => `F:${v}`
    expect(whenElse(v => v > 0)(truthyFn)(falsyFn)(5)).toBe('T:5')
    expect(whenElse(v => v > 0)(truthyFn)(falsyFn)(-1)).toBe('F:-1')
  })

  it('accepts mixed branches: function and constant', () => {
    const truthyFn = v => v * 2
    expect(whenElse(v => v > 10)(truthyFn)('small')(20)).toBe(40)
    expect(whenElse(v => v > 10)(truthyFn)('small')(5)).toBe('small')
  })

  it('handles non-string/non-number values and undefined', () => {
    expect(whenElse(() => true)(undefined)('else')('ignored')).toBe(undefined)
    expect(whenElse(() => false)('then')(undefined)('ignored')).toBe(undefined)
    expect(whenElse(true)(null)('else')('ignored')).toBe(null)
  })

  it('works with boolean branches', () => {
    expect(whenElse(v => v === 1)(true)(false)(1)).toBe(true)
    expect(whenElse(v => v === 1)(true)(false)(2)).toBe(false)
  })
})
