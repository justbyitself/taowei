import { describe, it, expect } from 'vitest'
import { withPrevious, take, repeat, sum, toArray } from '../../src'

describe('Fibonacci sequence', () => {
  it('takes first 10 numbers', () => {
    const fibonacci = withPrevious(2)(0, 1, repeat(sum))
    expect(toArray(take(10)(fibonacci))).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })
})
