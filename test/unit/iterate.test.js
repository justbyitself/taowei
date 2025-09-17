import { describe, it, expect } from 'vitest'
import { iterate } from '../../src/index.js'

describe('iterate function', () => {
  it('should generate an infinite sequence based on the provided function', () => {
    const addTwo = (x) => x + 2
    const iterable = iterate(addTwo)(0)

    const iterator = iterable[Symbol.iterator]()

    const results = []
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([0, 2, 4, 6, 8])
    expect(iterator.next().done).toBe(false)
  })

  it('should work with different functions and initial values', () => {
    const multiplyByThree = (x) => x * 3
    const iterable = iterate(multiplyByThree)(1)

    const iterator = iterable[Symbol.iterator]()
    
    const results = []
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([1, 3, 9, 27, 81])
    expect(iterator.next().done).toBe(false)
  })
})
