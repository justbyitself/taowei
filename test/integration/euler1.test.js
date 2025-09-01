import { describe, it, expect } from 'vitest'
import { sum, filter, or, isDivisibleBy, enumFromTo } from '../../src'


describe('Project Euler #1 integration', () => {
  it('functional pipeline matches imperative solution and yields 233168', () => {
    // Taowei implementation
    const nums = enumFromTo(1)(999)
    const predicate = or(isDivisibleBy(3))(isDivisibleBy(5))
    const filtered = filter(predicate)(nums)
    const functionalResult = sum(filtered)

    // Imperative implementation
    let imperativeResult = 0
    for (let i = 1; i <= 999; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        imperativeResult += i
      }
    }

    expect(functionalResult).toBe(imperativeResult)
    expect(functionalResult).toBe(233168)
  })
})
