import { describe, it, expect } from 'vitest'
import uncurry from '../../src/uncurry.js'

describe('uncurry', () => {
  it('returns a function that accepts two arguments', () => {
    const add = a => b => a + b
    const u = uncurry(add)
    expect(typeof u).toBe('function')
    expect(u(2, 3)).toBe(5)
  })

  it('works with non-number results', () => {
    const join = a => b => `${a}-${b}`
    expect(uncurry(join)('x', 'y')).toBe('x-y')
  })

  it('preserves original function behavior (no mutation)', () => {
    const f = a => b => [a, b]
    const u = uncurry(f)
    expect(u(1, 2)).toEqual([1, 2])
    expect(u(3, 4)).toEqual([3, 4])
  })

  it('forwards undefined/null correctly', () => {
    const f = a => b => (a === undefined ? 'A' : a) + '|' + (b === null ? 'B' : b)
    expect(uncurry(f)(undefined, null)).toBe('A|B')
  })

  it('works when inner function uses side effects (still calls inner)', () => {
    let called = false
    const f = a => b => { called = true; return a * b }
    expect(uncurry(f)(2, 3)).toBe(6)
    expect(called).toBe(true)
  })
})
