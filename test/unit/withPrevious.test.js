import { describe, it, expect } from 'vitest'
import { withPrevious } from '../../src/index.js'

describe('withPrevious', () => {
  it('generates values based on the provided iterable', () => {
    const input = [1, 2, ([a, b]) => a + b, ([a, b]) => a * b]
    const iterable = withPrevious(2)(input)

    expect([...iterable]).toEqual([1, 2, 3, 6])
  })

  it('handles non-function inputs correctly', () => {
    const iterable = withPrevious(2)([1, 2, 3])

    expect([...iterable]).toEqual([1, 2, 3])
  })
})
