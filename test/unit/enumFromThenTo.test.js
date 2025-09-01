import { describe, it, expect } from 'vitest'
import enumFromThenTo from '../../src/enumFromThenTo.js'

describe('enumFromThenTo', () => {
  it('generates an increasing range with step 1 (1,2..5)', () => {
    const result = enumFromThenTo(1)(2)(5)
    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('generates an increasing range with step 2 (1,3..7)', () => {
    const result = enumFromThenTo(1)(3)(7)
    expect(Array.from(result)).toEqual([1, 3, 5, 7])
  })

  it('generates a decreasing range with negative step (5,3..-1)', () => {
    const result = enumFromThenTo(5)(3)(-1)
    expect(Array.from(result)).toEqual([5, 3, 1, -1])
  })

  it('returns empty when start already beyond end for positive step', () => {
    const result = enumFromThenTo(5)(6)(4)
    expect(Array.from(result)).toEqual([])
  })

  it('returns empty when start already before end for negative step', () => {
    const result = enumFromThenTo(1)(0)(4)
    expect(Array.from(result)).toEqual([])
  })

  it('handles single-element ranges when start equals end', () => {
    const result = enumFromThenTo(5)(6)(5)
    expect(Array.from(result)).toEqual([5])
  })

it('for zero step produces an infinite constant sequence (1,1..5) — sample 5 elements and check done', () => {
  const it = enumFromThenTo(1)(1)(5)[Symbol.iterator]()
  const sample = []
  for (let i = 0; i < 5; i++) sample.push(it.next().value)
  expect(sample).toEqual([1, 1, 1, 1, 1])

  // next() should not be done for an infinite sequence
  const nextResult = it.next()
  expect(nextResult.done).toBe(false)
})



  it('works with negative start/positive step', () => {
    const result = enumFromThenTo(-2)(0)(4)
    expect(Array.from(result)).toEqual([-2, 0, 2, 4])
  })

  it('works with negative start and negative step', () => {
    const result = enumFromThenTo(-1)(-3)(-7)
    expect(Array.from(result)).toEqual([-1, -3, -5, -7])
  })

  it('works with non-integer steps (floats)', () => {
    const result = enumFromThenTo(0)(0.5)(2)
    expect(Array.from(result)).toEqual([0, 0.5, 1, 1.5, 2])
  })
})
