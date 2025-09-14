import { describe, it, expect } from 'vitest'
import { toIterable } from '../../src/index.js'

describe('toIterable', () => {
  it('should return the same iterable if input is already an iterable', () => {
    const arr = [1, 2, 3]
    const result = toIterable(arr)
    expect(result).toBe(arr)
  })

  it('should wrap a number in a singleton iterable', () => {
    const iterable = toIterable(42)
    const iterator = iterable[Symbol.iterator]()
    expect(iterator.next().value).toBe(42)
    expect(iterator.next().done).toBe(true)
  })

  it('should wrap a string in a singleton iterable', () => {
    const iterable = toIterable('hello')
    const iterator = iterable[Symbol.iterator]()
    expect(iterator.next().value).toBe('hello')
    expect(iterator.next().done).toBe(true)
  })

  it('should wrap an object in a singleton iterable', () => {
    const obj = { a: 1 }
    const iterable = toIterable(obj)
    const iterator = iterable[Symbol.iterator]()
    expect(iterator.next().value).toEqual(obj)
    expect(iterator.next().done).toBe(true)
  })

  it('should handle undefined', () => {
    const iterable = toIterable(undefined)
    const iterator = iterable[Symbol.iterator]()
    expect(iterator.next().value).toBe(undefined)
    expect(iterator.next().done).toBe(true)
  })

  it('should not modify an existing Set', () => {
    const set = new Set([1, 2, 3])
    const result = toIterable(set)
    expect(result).toBe(set)
  })
})
