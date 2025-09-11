import { describe, it, expect } from 'vitest'
import forEach from '../../src/forEach.js'

describe('forEach', () => {
  it('should call the function for each element in an array', () => {
    const results = []
    forEach(x => results.push(x))([1, 2, 3])
    expect(results).toEqual([1, 2, 3])
  })

  it('should call the function with the correct number of times', () => {
    let count = 0
    forEach(() => count++)([1, 2, 3, 4])
    expect(count).toBe(4)
  })

  it('should work with generator functions', () => {
    const results = []
    function* gen() {
      yield 1
      yield 2
      yield 3
    }
    forEach(x => results.push(x))(gen())
    expect(results).toEqual([1, 2, 3])
  })

  it('should work with empty iterables', () => {
    let called = false
    forEach(() => { called = true })([])
    expect(called).toBe(false)
  })
})
