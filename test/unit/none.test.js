import { describe, it, expect } from 'vitest'
import none from '../../src/none.js'

describe('none', () => {
  it('returns true when no elements match across mixed inputs', () => {
    const result = none(x => x > 5)([1, 2, 3], 4, [5])
    expect(result).toBe(true)
  })

  it('returns false if at least one element matches', () => {
    const result = none(x => x > 5)([1, 6, 2], 3)
    expect(result).toBe(false)
  })

  it('handles empties and non-iterables', () => {
    const result = none(x => !!x)([], 0, [false])
    expect(result).toBe(true)
  })

  it('short-circuits on first match (returns false early)', () => {
    let calls = 0
    const p = x => { calls++; return x === 3 }
    const result = none(p)(1, 2, 3, 4)
    expect(result).toBe(false)
    expect(calls).toBeLessThanOrEqual(3)
  })
})
