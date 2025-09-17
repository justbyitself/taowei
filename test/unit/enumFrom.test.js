import { describe, it, expect } from 'vitest'
import enumFrom from '../../src/enumFrom.js' // Ensure the path is correct

describe('enumFrom', () => {
  it('generates an infinite iterable starting from 1', () => {
    const iterable = enumFrom(1)

    const iterator = iterable[Symbol.iterator]()

    const results = []

    // Get the first 5 values
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([1, 2, 3, 4, 5])
  })

  it('generates an infinite iterable starting from 0', () => {
    const iterable = enumFrom(0)

    const iterator = iterable[Symbol.iterator]()

    const results = []

    // Get the first 5 values
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([0, 1, 2, 3, 4])
  })

  it('generates an infinite iterable starting from a negative number', () => {
    const iterable = enumFrom(-3)

    const iterator = iterable[Symbol.iterator]()

    const results = []

    // Get the first 5 values
    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value)
    }

    expect(results).toEqual([-3, -2, -1, 0, 1])
  })

  it('does not terminate prematurely', () => {
    const iterable = enumFrom(10)

    const iterator = iterable[Symbol.iterator]()

    // Check the first few values
    expect(iterator.next().value).toBe(10)
    expect(iterator.next().value).toBe(11)
    expect(iterator.next().value).toBe(12)

    // Check that it does not finish
    expect(iterator.next().done).toBe(false)
  })
})
