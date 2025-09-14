import { describe, it, expect } from 'vitest'
import when from '../../src/when.js'
import whenElse from '../../src/whenElse.js'
import id from '../../src/id.js'

describe('when', () => {
  it('applies fn when predicate is true (predicate boolean)', () => {
    const double = n => n * 2
    expect(when(true)(double)(3)).toBe(6)
  })

  it('returns value unchanged when predicate is false (predicate boolean)', () => {
    const double = n => n * 2
    expect(when(false)(double)(3)).toBe(3)
  })

  it('uses predicate function applied to value', () => {
    const isEven = n => n % 2 === 0
    const double = n => n * 2
    expect(when(isEven)(double)(4)).toBe(8)
    expect(when(isEven)(double)(3)).toBe(3)
  })

  it('uses predicate non-function as equality comparator', () => {
    const double = n => n * 2
    expect(when(42)(double)(42)).toBe(84)
    expect(when(42)(double)(0)).toBe(0)
  })

  it('accepts fn as a function that receives the value', () => {
    const suffix = v => `x:${v}`
    expect(when(v => v > 0)(suffix)(5)).toBe('x:5')
    expect(when(v => v > 0)(suffix)(-1)).toBe(-1)
  })

  it('accepts fn as a constant value (returns value unchanged when predicate false)', () => {
    expect(when(v => v > 10)('big')(20)).toBe('big')   // predicate true -> branch returned
    expect(when(v => v > 10)('big')(5)).toBe(5)        // predicate false -> identity
  })

  it('handles undefined/null and non-string values', () => {
    const noop = v => v
    expect(when(() => true)(undefined)(123)).toBe(undefined)
    expect(when(() => false)(noop)(undefined)).toBe(undefined)
    expect(when(true)(null)('ignored')).toBe(null)
  })

  it('is equivalent to whenElse(predicate)(fn)(id) behaviour', () => {
    const double = n => n * 2
    expect(when(true)(double)(2)).toBe(whenElse(true)(double)(id)(2))
    expect(when(false)(double)(2)).toBe(whenElse(false)(double)(id)(2))
    const isEven = n => n % 2 === 0
    expect(when(isEven)(double)(4)).toBe(whenElse(isEven)(double)(id)(4))
    expect(when(isEven)(double)(3)).toBe(whenElse(isEven)(double)(id)(3))
  })
})
