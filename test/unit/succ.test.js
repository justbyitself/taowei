import { describe, it, expect } from 'vitest'
import succ from '../../src/succ.js'

describe('succ', () => {
  it('is a function that returns successor of a number', () => {
    expect(typeof succ).toBe('function')
    expect(succ(0)).toBe(1)
    expect(succ(5)).toBe(6)
  })

  it('works with negative numbers and zero', () => {
    expect(succ(-1)).toBe(0)
    expect(succ(-10)).toBe(-9)
  })

  it('works with floats', () => {
    expect(succ(0.1)).toBeCloseTo(1.1)
  })

  it('is referentially transparent (no mutation)', () => {
    const a = succ(1)
    const b = succ(2)
    expect(a).toBe(2)
    expect(b).toBe(3)
  })
})
