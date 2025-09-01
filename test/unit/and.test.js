import { describe, it, expect } from 'vitest'
import and from '../../src/and.js'

describe('and (curried)', () => {
  it('returns true only if both predicates are true', () => {
    const p1 = x => x > 0
    const p2 = x => x % 2 === 1
    const fn = and(p1)(p2)
    expect(fn(3)).toBe(true)   // p1 true, p2 true
    expect(fn(4)).toBe(false)  // p1 true, p2 false
    expect(fn(-1)).toBe(false) // p1 false
  })

  it('short-circuits: does not call second predicate when first is false', () => {
    let called = false
    const p1 = () => false
    const p2 = () => { called = true; return true }
    const fn = and(p1)(p2)
    expect(fn('anything')).toBe(false)
    expect(called).toBe(false)
  })

  it('passes the argument through to predicates', () => {
    const p1 = x => typeof x === 'string'
    const p2 = x => x.length === 5
    const fn = and(p1)(p2)
    expect(fn('hello')).toBe(true)
    expect(fn('hi')).toBe(false)
  })

  it('works with predicates that return truthy/falsy (non-boolean) values', () => {
    const p1 = x => x && 'ok'
    const p2 = () => 'fine'
    const fn = and(p1)(p2)
    expect(fn('yes')).toBe('fine')   // p1 truthy -> returns p2 value
    expect(fn('')).toBe('')          // p1 falsy -> returns p1 value (falsy)
  })

  it('throws if second predicate throws when first is truthy', () => {
    const p1 = () => true
    const p2 = () => { throw new Error('boom') }
    const fn = and(p1)(p2)
    expect(() => fn(1)).toThrow('boom')
  })
})
