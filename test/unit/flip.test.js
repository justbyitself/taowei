import { describe, it, expect } from 'vitest'
import flip from '../../src/flip.js'

describe('flip', () => {
  it('returns a function that flips arguments of a curried function', () => {
    const sub = a => b => a - b
    const flipped = flip(sub)
    expect(typeof flipped).toBe('function')
    expect(typeof flipped(5)).toBe('function')
    expect(flipped(5)(10)).toBe(5) // sub(10)(5) -> 10 - 5 = 5
  })

  it('works with non-number results', () => {
    const join = a => b => `${a}${b}`
    expect(flip(join)('A')('B')).toBe('BA')
  })

  it('preserves original function behavior aside from argument order', () => {
    const pair = a => b => [a, b]
    expect(flip(pair)(1)(2)).toEqual([2, 1])
    expect(pair(1)(2)).toEqual([1, 2])
  })

  it('forwards undefined and null in swapped order', () => {
    const f = a => b => [a, b]
    expect(flip(f)(undefined)(null)).toEqual([null, undefined])
  })

  it('works when inner function has side effects', () => {
    let calledWith = null
    const f = a => b => { calledWith = [a, b]; return a + b }
    expect(flip(f)(2)(3)).toBe(5) // calls f(3)(2)
    expect(calledWith).toEqual([3, 2])
  })
})
