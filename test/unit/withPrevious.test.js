import { describe, it, expect } from 'vitest'
import { withPrevious } from '../../src'

describe('withPrevious', () => {
  it('should generate values based on the provided iterator and functions', () => {
    const input = [1, 2, ([a, b]) => a + b, ([a, b]) => a * b]
    const iterator = withPrevious(2)(input)

    expect(iterator.toArray()).toEqual([1, 2, 3, 6])
  })

  it('should handle non-function inputs correctly', () => {
    const iterator = withPrevious(2)([1, 2, 3])

    expect(iterator.toArray()).toEqual([1, 2, 3])
  })
})
