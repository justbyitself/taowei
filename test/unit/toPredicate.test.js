import { describe, it, expect } from 'vitest'
import { toPredicate } from '../../src/index.js'

describe('toPredicate', () => {
  it('returns the input if it is a function', () => {
    const fn = v => v === 1
    expect(toPredicate(fn)).toBe(fn)
    expect(toPredicate(fn)(1)).toBe(true)
    expect(toPredicate(fn)(2)).toBe(false)
  })

  it('converts boolean to constant predicate', () => {
    const tr = toPredicate(true)
    const fa = toPredicate(false)

    expect(typeof tr).toBe('function')
    expect(typeof fa).toBe('function')

    expect(tr('anything')).toBe(true)
    expect(fa('anything')).toBe(false)
  })

  it('converts non-function, non-boolean to equality predicate', () => {
    const is42 = toPredicate(42)
    expect(typeof is42).toBe('function')
    expect(is42(42)).toBe(true)
    expect(is42(0)).toBe(false)

    const strPred = toPredicate('x')
    expect(strPred('x')).toBe(true)
    expect(strPred('y')).toBe(false)
  })

  it('handles undefined and null as equality values', () => {
    const undef = toPredicate(undefined)
    const nul = toPredicate(null)

    expect(undef(undefined)).toBe(true)
    expect(undef('')).toBe(false)

    expect(nul(null)).toBe(true)
    expect(nul(undefined)).toBe(false)
  })
})
