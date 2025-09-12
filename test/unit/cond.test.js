import { describe, it, expect } from 'vitest'
import { cond } from '../../src/index.js'

describe('cond', () => {
  it('should return the result of the matching function predicate', () => {
    const fn = cond([
      [v => v > 0, 'positive'],
      [v => v < 0, 'negative']
    ])
    expect(fn(5)).toBe('positive')
    expect(fn(-3)).toBe('negative')
  })

  it('should return the value for a matching literal key', () => {
    const fn = cond([
      [10, 'ten'],
      [20, 'twenty']
    ])
    expect(fn(20)).toBe('twenty')
  })

  it('should return undefined when no predicates match', () => {
    const fn = cond([
      [0, 'zero'],
      [1, 'one']
    ])
    expect(fn(5)).toBeUndefined()
  })

  it('should handle a mix of function predicates and literal keys correctly', () => {
    const fn = cond([
      [v => typeof v === 'string' && v.includes('a'), 'has a'],
      ['b', 'is b']
    ])
    expect(fn('apple')).toBe('has a')
    expect(fn('b')).toBe('is b')
  })

  it('should always return the first associated value when its predicate is always true', () => {
    const alwaysTrue = () => true
    const fn = cond([
      [alwaysTrue, 'always'],
      [() => false, 'never']
    ])
    expect(fn(null)).toBe('always')
  })

  it('should stop at the first matching clause according to order', () => {
    const fn = cond([
      [v => v < 0, 'negative'],
      [() => true, 'any']
    ])
    expect(fn(3)).toBe('any')
  })
})
