import { describe, it, expect } from 'vitest'
import { singleton } from '../../src'

describe('singleton', () => {
  it('should return an iterator with a single value', () => {
    const iterator = singleton(42)
    expect(iterator.next().value).toBe(42)
    expect(iterator.next().done).toBe(true)
  })

  it('should return an iterator with a single string value', () => {
    const iterator = singleton('hello')
    expect(iterator.next().value).toBe('hello')
    expect(iterator.next().done).toBe(true)
  })

  it('should return an iterator with a single object', () => {
    const obj = { a: 1 }
    const iterator = singleton(obj)
    expect(iterator.next().value).toEqual(obj)
    expect(iterator.next().done).toBe(true)
  })

  it('should return an iterator with a single array', () => {
    const arr = [1, 2, 3]
    const iterator = singleton(arr)
    expect(iterator.next().value).toEqual(arr)
    expect(iterator.next().done).toBe(true)
  })

  it('should handle undefined', () => {
    const iterator = singleton(undefined)
    expect(iterator.next().value).toBe(undefined)
    expect(iterator.next().done).toBe(true)
  })
})
