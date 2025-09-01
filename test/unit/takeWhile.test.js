import { describe, it, expect } from 'vitest'
import takeWhile from '../../src/takeWhile.js'

describe('takeWhile', () => {
  it('takes elements while the condition is true', () => {
    const iterator = takeWhile(x => x < 5)([1, 2, 3, 4, 5, 6])
    expect(Array.from(iterator)).toEqual([1, 2, 3, 4])
  })

  it('returns an empty iterable if no elements match', () => {
    const iterator = takeWhile(x => x > 5)([1, 2, 3])
    expect(Array.from(iterator)).toEqual([])
  })

  it('takes all elements if the condition is always true', () => {
    const iterator = takeWhile(x => x < 10)([1, 2, 3, 4, 5])
    expect(Array.from(iterator)).toEqual([1, 2, 3, 4, 5])
  })

  it('handles empty iterables', () => {
    const iterator = takeWhile(x => x < 5)([])
    expect(Array.from(iterator)).toEqual([])
  })

  it('stops taking elements when the condition is false', () => {
    const iterator = takeWhile(x => x < 3)([1, 2, 3, 2, 1])
    expect(Array.from(iterator)).toEqual([1, 2])
  })
})
