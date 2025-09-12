import { describe, it, expect } from 'vitest'
import { drop } from '../../src/index.js'

describe('drop', () => {
  it('should drop the first n elements of an array and return the rest as an iterator', () => {
    const result = drop(2)([1, 2, 3, 4])
    expect(result.toArray()).toEqual([3, 4])
  })

  it('should return an empty array if n is greater than or equal to the array length', () => {
    const result = drop(5)([1, 2, 3])
    expect(result.toArray()).toEqual([])
    const result2 = drop(3)([1, 2, 3])
    expect(result2.toArray()).toEqual([])
  })

  it('should return the whole array if n is 0', () => {
    const result = drop(0)([1, 2, 3])
    expect(result.toArray()).toEqual([1, 2, 3])
  })

  it('should return an empty array if the input is an empty array', () => {
    const result = drop(2)([])
    expect(result.toArray()).toEqual([])
  })

  it('should handle non-array iterables', () => {
    const set = new Set([1, 2, 3, 4])
    const result = drop(2)(set)
    expect(result.toArray()).toEqual([3, 4])
  })

  it('should handle strings', () => {
    const result = drop(3)('hello')
    expect(result.toArray()).toEqual(['l', 'o'])
  })
})
