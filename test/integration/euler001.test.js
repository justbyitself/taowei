import { describe, it, expect } from 'vitest'
import { sum, filter, or, isDivisibleBy as isMultipleOf, enumFromTo } from '../../src/index.js'

/*
  Project Euler #1: Multiples of 3 or 5 
  https://projecteuler.net/problem=1

  If we list all the natural numbers below 10 that are multiples of 3 or 5, 
  we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000.
*/
describe('Project Euler #1', () => {
  it('Taowei implementation matches imperative solution and yields 233168', () => {
    // Taowei implementation
    const taoweiResult = (() => {
      const nums = enumFromTo(1)(999)
      const predicate = or(isMultipleOf(3))(isMultipleOf(5))
      const filtered = filter(predicate)(nums)
      return sum(filtered)
    })()

    // Imperative implementation
    const imperativeResult = (() => {
      let result = 0
      for (let i = 1; i <= 999; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          result += i
        }
      }
      return result
    })()

    expect(taoweiResult).toBe(imperativeResult)
    expect(taoweiResult).toBe(233168)
  })
})
