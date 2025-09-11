import { describe, it, expect } from 'vitest'
import { flatWithDepth } from '../../src'

describe('flatWithDepth', () => {
  it('should flatten a nested array with depth 1', () => {
    const input = [1, [2, 3], [4, [5, 6]]]
    const result = [...flatWithDepth(1)(input)]
    expect(result).toEqual([1, 2, 3, 4, [5, 6]])
  })

  it('should flatten a nested array with depth 2', () => {
    const input = [1, [2, 3], [4, [5, 6]]]
    const result = [...flatWithDepth(2)(input)]
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should not flatten strings', () => {
    const input = [1, ['hello', 'world'], 3]
    const result = [...flatWithDepth(1)(input)]
    expect(result).toEqual([1, 'hello', 'world', 3])
  })

  it('should work with deeply nested structures', () => {
    const input = [1, [2, [3, [4, [5]]]], 6]
    const result = [...flatWithDepth(3)(input)]
    expect(result).toEqual([1, 2, 3, 4, [5], 6])
  })

  it('should return original array with depth 0', () => {
    const input = [1, [2, 3], [4, [5, 6]]]
    const result = [...flatWithDepth(0)(input)]
    expect(result).toEqual([1, [2, 3], [4, [5, 6]]])
  })
})
