import { describe, it, expect } from 'vitest'
import { take } from '../../src'

describe('take', () => {
  it('should return the first n elements of an array as an iterator', () => {
    const result = take(2)([1, 2, 3, 4])
    expect(result.toArray()).toEqual([1, 2])
  })

  it('should return all elements if n is greater than the array length', () => {
    const result = take(5)([1, 2, 3])
    expect(result.toArray()).toEqual([1, 2, 3])
  })

  it('should return an empty array if n is 0', () => {
    const result = take(0)([1, 2, 3])
    expect(result.toArray()).toEqual([])
  })

  it('should return an empty array if the input is an empty array', () => {
    const result = take(2)([])
    expect(result.toArray()).toEqual([])
  })

  it('should handle non-array iterables', () => {
    const set = new Set([1, 2, 3, 4])
    const result = take(2)(set)
    expect(result.toArray()).toEqual([1, 2])
  })

  it('should handle strings', () => {
    const result = take(3)('hello')
    expect(result.toArray()).toEqual(['h', 'e', 'l'])
  })
})
