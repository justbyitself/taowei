import { describe, it, expect } from 'vitest'
import { iterate } from '../../src'

describe('iterate function', () => {
  it('should generate an infinite sequence based on the provided function', () => {
    const addTwo = (x) => x + 2
    const iterator = iterate(addTwo)(0)

    const results = []
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([0, 2, 4, 6, 8])
    expect(iterator.next().done).toBe(false)
  })

  it('should work with different functions and initial values', () => {
    const multiplyByThree = (x) => x * 3
    const iterator = iterate(multiplyByThree)(1)

    const results = []
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([1, 3, 9, 27, 81])
    expect(iterator.next().done).toBe(false)
  })
})
