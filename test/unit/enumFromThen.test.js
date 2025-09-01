import { describe, it, expect } from 'vitest'
import enumFromThen from '../../src/enumFromThen.js'

describe('enumFromThen', () => {
  it('generates an infinite iterable starting 1 then 2 (step 1)', () => {
    const iterator = enumFromThen(1)(2)
    const results = []
    for (let i = 0; i < 5; i++) results.push(iterator.next().value)
    expect(results).toEqual([1, 2, 3, 4, 5])
  })

  it('generates an infinite iterable starting 0 then 1 (step 1)', () => {
    const iterator = enumFromThen(0)(1)
    const results = []
    for (let i = 0; i < 5; i++) results.push(iterator.next().value)
    expect(results).toEqual([0, 1, 2, 3, 4])
  })

  it('generates with a custom positive step (1,3,5...)', () => {
    const iterator = enumFromThen(1)(3)
    const results = []
    for (let i = 0; i < 4; i++) results.push(iterator.next().value)
    expect(results).toEqual([1, 3, 5, 7])
  })

  it('generates with negative step (5,3,1,-1...)', () => {
    const iterator = enumFromThen(5)(3)
    const results = []
    for (let i = 0; i < 4; i++) results.push(iterator.next().value)
    expect(results).toEqual([5, 3, 1, -1])
  })

  it('works with floats', () => {
    const iterator = enumFromThen(0)(0.5)
    const results = []
    for (let i = 0; i < 5; i++) results.push(iterator.next().value)
    expect(results).toEqual([0, 0.5, 1, 1.5, 2])
  })

  it('handles zero step by producing the same value repeatedly', () => {
    const iterator = enumFromThen(2)(2)
    expect(iterator.next().value).toBe(2)
    expect(iterator.next().value).toBe(2)
    expect(iterator.next().value).toBe(2)
  })

  it('is an iterator (done stays false for several steps)', () => {
    const iterator = enumFromThen(10)(11)
    expect(iterator.next().done).toBe(false)
    expect(iterator.next().done).toBe(false)
    expect(iterator.next().done).toBe(false)
  })
})
