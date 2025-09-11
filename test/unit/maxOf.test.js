import { describe, it, expect } from 'vitest'
import maxOf from '../../src/maxOf.js'

describe('maxOf', () => {
  it('returns the maximum of several numbers', () => {
    expect(maxOf([3, 1, 4, 2])).toBe(4)
  })

  it('works with a single argument', () => {
    expect(maxOf([5])).toBe(5)
  })

  it('works with negative numbers and zero', () => {
    expect(maxOf([-1, -5, 0, 3])).toBe(3)
  })

  it('works with floats', () => {
    expect(maxOf([0.1, 0.2, 0.05])).toBeCloseTo(0.2)
  })
})
