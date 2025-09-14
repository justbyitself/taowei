import { describe, it, expect } from 'vitest'
import { concat } from '../../src/index.js'

describe('concat', () => {
  it('should flatten a nested array with depth 1', () => {
    const input = [1, [2, 3], [4, 5], 6]
    const result = [...concat(input)]
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
})
