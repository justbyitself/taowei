import { describe, it, expect } from 'vitest'
import { singleton } from '../../src/index.js'

describe('singleton', () => {
  it('returns an iterable with a single value', () => {
    const iterable = singleton(42)

    const iterator = iterable[Symbol.iterator]()

    expect(iterator.next().value).toBe(42)
    expect(iterator.next().done).toBe(true)
  })

  it('returns an iterable with a single string value', () => {
    const iterable = singleton('hello')

    const iterator = iterable[Symbol.iterator]()

    expect(iterator.next().value).toBe('hello')
    expect(iterator.next().done).toBe(true)
  })

  it('returns an iterable with a single object', () => {
    const obj = { a: 1 }
    const iterable = singleton(obj)

    const iterator = iterable[Symbol.iterator]()

    expect(iterator.next().value).toEqual(obj)
    expect(iterator.next().done).toBe(true)
  })

  it('return an iterable with a single array', () => {
    const arr = [1, 2, 3]
    const iterable = singleton(arr)

    const iterator = iterable[Symbol.iterator]()

    expect(iterator.next().value).toEqual(arr)
    expect(iterator.next().done).toBe(true)
  })

  it('should handle undefined', () => {
    const iterable = singleton(undefined)

    const iterator = iterable[Symbol.iterator]()

    expect(iterator.next().value).toBe(undefined)
    expect(iterator.next().done).toBe(true)
  })
})
