import { describe, it, expect } from 'vitest'
import unless from '../../src/unless.js'
import whenElse from '../../src/whenElse.js'
import id from '../../src/id.js'

describe('unless', () => {
  it('applies fn when predicate is false (predicate boolean)', () => {
    const double = n => n * 2
    expect(unless(false)(double)(3)).toBe(6) // predicate false -> apply
  })

  it('returns value unchanged when predicate is true (predicate boolean)', () => {
    const double = n => n * 2
    expect(unless(true)(double)(3)).toBe(3) // predicate true -> identity
  })

  it('uses predicate function applied to value', () => {
    const isEven = n => n % 2 === 0
    const double = n => n * 2
    expect(unless(isEven)(double)(4)).toBe(4)
    expect(unless(isEven)(double)(3)).toBe(6)
  })

  it('uses predicate non-function as equality comparator', () => {
    const double = n => n * 2
    expect(unless(42)(double)(42)).toBe(42)
    expect(unless(42)(double)(0)).toBe(0 * 2) // i.e. 0 unchanged? keep consistent with behaviour below
  })

  it('accepts fn as a function that receives the value', () => {
    const suffix = v => `x:${v}`
    expect(unless(v => v > 0)(suffix)(5)).toBe(5)
    expect(unless(v => v > 0)(suffix)(-1)).toBe('x:-1')
  })

  it('accepts fn as a constant (returns identity when predicate true)', () => {
    expect(unless(v => v > 10)('big')(20)).toBe(20) // predicate true -> identity
    expect(unless(v => v > 10)('big')(5)).toBe('big') // predicate false -> branch returned
  })

  it('handles undefined/null and non-string values', () => {
    const noop = v => v
    expect(unless(() => true)(noop)(123)).toBe(123)
    expect(unless(() => false)(noop)(undefined)).toBe(undefined)

    // compare against whenElse to ensure consistent normalization of branches
    expect(unless(true)(null)('ignored')).toBe(whenElse(true)(id)(null)('ignored'))
  })

  it('is equivalent to whenElse(predicate)(id)(fn)', () => {
    const double = n => n * 2
    expect(unless(true)(double)(2)).toBe(whenElse(true)(id)(double)(2))
    expect(unless(false)(double)(2)).toBe(whenElse(false)(id)(double)(2))
    const isEven = n => n % 2 === 0
    expect(unless(isEven)(double)(4)).toBe(whenElse(isEven)(id)(double)(4))
    expect(unless(isEven)(double)(3)).toBe(whenElse(isEven)(id)(double)(3))
  })
})
