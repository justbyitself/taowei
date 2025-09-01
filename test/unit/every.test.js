import { describe, it, expect } from 'vitest'
import every from '../../src/every.js'

describe('every', () => {
  it('returns true when all elements match across mixed inputs', () => {
    const result = every(x => x > 0)([1, 2], 3, [4, 5])
    expect(result).toBe(true)
  })

  it('returns false if any element does not match', () => {
    const result = every(x => x > 0)([1, -2], 3)
    expect(result).toBe(false)
  })

  it('treats empty inputs appropriately: true when there are no elements', () => {
    const result = every(x => x > 0)([])
    expect(result).toBe(true)
  })

  it('short-circuits on first failing element (returns false early)', () => {
    let calls = 0
    const p = x => { calls++; return x % 2 === 0 }
    const result = every(p)(2, 4, 3, 6)
    expect(result).toBe(false)
    expect(calls).toBeLessThanOrEqual(3)
  })
})
