import { describe, it, expect } from 'vitest'
import { flat } from '../../src'

describe('flat', () => {
  it('should flatten a nested array with infinite depth', () => {
    const input = [1, [2, 3], [4, [5, 6]]]
    const result = [...flat(input)]
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('should handle arrays with different nesting levels', () => {
    const input = [1, [2, [3, [4]]], 5]
    const result = [...flat(input)]
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should not flatten strings', () => {
    const input = [1, ['hello', 'world'], 3]
    const result = [...flat(input)]
    expect(result).toEqual([1, 'hello', 'world', 3])
  })

  it('should work with deeply nested structures', () => {
    const input = [1, [2, [3, [4, [5]]]], 6]
    const result = [...flat(input)]
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
})
