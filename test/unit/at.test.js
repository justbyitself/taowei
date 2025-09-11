import { describe, it, expect } from 'vitest'
import { at } from '../../src'

describe('at', () => {
  it('should return the nth element of an array', () => {
    const result = at(1)([10, 20, 30])
    expect(result).toBe(20)
  })

  it('should work with generators', () => {
    function* gen() {
      yield 10
      yield 20
      yield 30
    }
    const result = at(2)(gen())
    expect(result).toBe(30)
  })

  it('should return undefined for out of range index', () => {
    const result = at(5)([1, 2, 3])
    expect(result).toBeUndefined()
  })
})
