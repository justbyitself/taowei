import { describe, it, expect } from 'vitest'
import enumFromTo from '../../src/enumFromTo.js'

describe('enumFromTo', () => {
  it('generates a range from 1 to 5', () => {
    const result = enumFromTo(1)(5)
    expect(Array.from(result)).toEqual([1, 2, 3, 4, 5])
  })

  it('generates a range from 0 to 3', () => {
    const result = enumFromTo(0)(3)
    expect(Array.from(result)).toEqual([0, 1, 2, 3])
  })

  it('returns an empty iterable when the start is greater than the end', () => {
    const result = enumFromTo(5)(3)
    expect(Array.from(result)).toEqual([])
  })

  it('generates a range with negative numbers', () => {
    const result = enumFromTo(-3)(-1)
    expect(Array.from(result)).toEqual([-3, -2, -1])
  })

  it('generates a range with a single number', () => {
    const result = enumFromTo(5)(5)
    expect(Array.from(result)).toEqual([5])
  })
})
