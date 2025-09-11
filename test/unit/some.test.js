import { describe, it, expect } from 'vitest'
import some from '../../src/some.js'

describe('some', () => {
  it('returns true if at least one element matches across mixed inputs', () => {
    const result = some(x => x > 5)([1, 2, 3, 6, 4, 5, 8])
    expect(result).toBe(true)
  })

  it('returns false if no elements match', () => {
    const result = some(x => x > 10)([1, 2, 3], 4, [5])
    expect(result).toBe(false)
  })

  it('handles empty iterables and single non-iterable', () => {
    const result = some(x => x > 0)([], 0, [-1])
    expect(result).toBe(false)
  })

  it('stops early when a match is found (short-circuit)', () => {
    let calls = 0
    const p = x => { calls++; return x === 2 }
    const result = some(p)([1, 2, 3, 4])
    expect(result).toBe(true)
    expect(calls).toBeLessThanOrEqual(2)
  })
})
