import { describe, it, expect } from 'vitest'
import { take } from '../../src/index.js'

describe('take', () => {
  it('returns the first n elements of an array as an iterator', () => {
    const result = take(2)([1, 2, 3, 4])
    expect([...result]).toEqual([1, 2])
  })

  it('returns all elements if n is greater than the array length', () => {
    const result = take(5)([1, 2, 3])
    expect([...result]).toEqual([1, 2, 3])
  })

  it('returns an empty array if n is 0', () => {
    const result = take(0)([1, 2, 3])
    expect([...result]).toEqual([])
  })

  it('returns an empty array if the input is an empty array', () => {
    const result = take(2)([])
    expect([...result]).toEqual([])
  })

  it('handles non-array iterables', () => {
    const set = new Set([1, 2, 3, 4])
    const result = take(2)(set)
    expect([...result]).toEqual([1, 2])
  })

  it('handles strings', () => {
    const result = take(3)('hello')
    expect([...result]).toEqual(['h', 'e', 'l'])
  })
})
