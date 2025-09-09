import { describe, it, expect } from 'vitest'
import times from '../../src/times.js'

describe('times', () => {
  it('returns an iterable with the specified number of function calls', () => {
    let counter = 0
    const incrementCounter = () => ++counter

    const result = [...times(3)(incrementCounter)]

    expect(result).toEqual([1, 2, 3])
  })

  it('returns an empty iterable when called with 0 and not call the function', () => {
    let counter = 0
    const incrementCounter = () => ++counter

    const result = [...times(0)(incrementCounter)]

    expect(result).toEqual([])
    expect(counter).toBe(0)
  })

})
