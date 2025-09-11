import { describe, it, expect } from 'vitest'
import find from '../../src/find.js'

describe('find', () => {
  it('returns the first element matching predicate', () => {
    const isEven = x => x % 2 === 0
    expect(find(isEven)([1, 3, 4, 6])).toBe(4)
  })

  it('returns undefined when no element matches', () => {
    const gt10 = x => x > 10
    expect(find(gt10)([1, 2, 3])).toBeUndefined()
  })

  it('works with non-array iterables', () => {
    const set = new Set([1, 2, 3, 4])
    const isThree = x => x === 3
    expect(find(isThree)(set)).toBe(3)
  })
})
