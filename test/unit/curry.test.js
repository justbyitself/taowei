import { describe, it, expect } from 'vitest'
import curry from '../../src/curry.js'

describe('curry', () => {
  it('returns a function that takes one argument and returns another function', () => {
    const f = (a, b) => a + b
    const c = curry(f)
    expect(typeof c).toBe('function')
    const c2 = c(2)
    expect(typeof c2).toBe('function')
    expect(c2(3)).toBe(5)
  })

  it('works with non-number results', () => {
    const join = (a, b) => `${a}-${b}`
    expect(curry(join)('x')('y')).toBe('x-y')
  })

  it('preserves original function behavior (no mutation)', () => {
    const f = (a, b) => [a, b]
    const c = curry(f)
    expect(c(1)(2)).toEqual([1, 2])
    expect(c(3)(4)).toEqual([3, 4])
  })

  it('forwards undefined/null correctly', () => {
    const f = (a, b) => (a === undefined ? 'A' : a) + '|' + (b === null ? 'B' : b)
    expect(curry(f)(undefined)(null)).toBe('A|B')
  })

  it('works if inner function has side effects', () => {
    let called = false
    const f = (a, b) => { called = true; return a * b }
    expect(curry(f)(2)(3)).toBe(6)
    expect(called).toBe(true)
  })
})
