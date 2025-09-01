import { describe, it, expect } from 'vitest'
import not from '../../src/not.js'

describe('not', () => {
  it('inverts a predicate result for a single value', () => {
    const isEven = x => x % 2 === 0
    const isOdd = not(isEven)
    expect(isOdd(3)).toBe(true)
    expect(isOdd(4)).toBe(false)
  })

  it('works with truthy/falsy returning predicates', () => {
    const isTruthy = x => !!x
    const isFalsy = not(isTruthy)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy('hello')).toBe(false)
  })

  it('composes with other higher-order predicates', () => {
    const greaterThan5 = x => x > 5
    const notGreaterThan5 = not(greaterThan5)
    expect(notGreaterThan5(6)).toBe(false)
    expect(notGreaterThan5(5)).toBe(true)
  })

  it('does not mutate the original predicate', () => {
    const calls = []
    const p = x => { calls.push(x); return x === 1 }
    const pNot = not(p)
    expect(pNot(1)).toBe(false)
    expect(pNot(2)).toBe(true)
    expect(calls).toEqual([1, 2])
  })

  it('returns a function', () => {
    const isNum = x => typeof x === 'number'
    const inverted = not(isNum)
    expect(typeof inverted).toBe('function')
  })
})
