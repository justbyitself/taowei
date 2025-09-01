import { describe, it, expect } from 'vitest'
import minOf from '../../src/minOf.js'

describe('minOf', () => {
  it('returns the minimum of several numbers', () => {
    expect(minOf(3, 1, 4, 2)).toBe(1)
  })

  it('works with a single argument', () => {
    expect(minOf(5)).toBe(5)
  })

  it('works with negative numbers and zero', () => {
    expect(minOf(-1, -5, 0, 3)).toBe(-5)
  })

  it('works with floats', () => {
    expect(minOf(0.1, 0.2, 0.05)).toBeCloseTo(0.05)
  })

})
