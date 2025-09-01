import { describe, it, expect } from 'vitest'
import or from '../../src/or.js'

describe('or', () => {
  it('returns true if first predicate is true', () => {
    const p1 = x => x > 0
    const p2 = x => x % 2 === 0
    const fn = or(p1)(p2)
    expect(fn(3)).toBe(true) // p1 true
  })

  it('returns true if second predicate is true and first is false', () => {
    const p1 = x => x < 0
    const p2 = x => x % 2 === 0
    const fn = or(p1)(p2)
    expect(fn(4)).toBe(true) // p1 false, p2 true
  })

  it('returns false if both predicates are false', () => {
    const p1 = x => typeof x === 'string'
    const p2 = x => x === null
    const fn = or(p1)(p2)
    expect(fn(5)).toBe(false)
  })

  it('is short-circuiting: does not call second predicate when first is true', () => {
    let called = false
    const p1 = () => true
    const p2 = () => { called = true; return true }
    const fn = or(p1)(p2)
    expect(fn('anything')).toBe(true)
    expect(called).toBe(false)
  })

  it('passes the argument through to predicates', () => {
    const p1 = x => x === 'hello'
    const p2 = x => x === 'world'
    const fn = or(p1)(p2)
    expect(fn('world')).toBe(true)
    expect(fn('hello')).toBe(true)
    expect(fn('!')).toBe(false)
  })

  it('works with predicate that uses side effects / throws when not evaluated', () => {
    const p1 = () => false
    const p2 = () => { throw new Error('should be called') }
    const fn = or(p1)(p2)
    expect(() => fn(1)).toThrow('should be called')
  })

  it('works when predicates return truthy/falsy values (non-boolean)', () => {
    const p1 = x => x && 'ok'
    const p2 = () => 0
    const fn = or(p1)(p2)
    expect(fn('hi')).toBe('ok')   // returns the truthy value from JS ||
    expect(fn('')).toBe(0)       // '' falsy -> returns p2 value 0 (falsy)
  })
})
