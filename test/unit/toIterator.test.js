import { describe, it, expect } from 'vitest'
import toIterator from '../../src/toIterator.js'

describe('toIterator', () => {
  it('returns the iterator of an array', () => {
    const arr = [1, 2, 3]
    const it = toIterator(arr)
    expect(typeof it.next).toBe('function')
    expect(it.next().value).toBe(1)
    expect(it.next().value).toBe(2)
    expect(it.next().value).toBe(3)
    expect(it.next().done).toBe(true)
  })

  it('returns the iterator of a string', () => {
    const it = toIterator('abc')
    expect(it.next().value).toBe('a')
    expect(it.next().value).toBe('b')
    expect(it.next().value).toBe('c')
    expect(it.next().done).toBe(true)
  })

  it('returns the iterator of a Set', () => {
    const s = new Set([1, 2])
    const it = toIterator(s)
    expect(it.next().value).toBe(1)
    expect(it.next().value).toBe(2)
    expect(it.next().done).toBe(true)
  })

  it('returns the iterator of a Map (entries)', () => {
    const m = new Map([['a', 1]])
    const it = toIterator(m)
    const first = it.next()
    expect(Array.isArray(first.value)).toBe(true)
    expect(first.value[0]).toBe('a')
    expect(first.value[1]).toBe(1)
    expect(it.next().done).toBe(true)
  })

  it('throws if object is not iterable', () => {
    const notIterable = { a: 1 }
    expect(() => toIterator(notIterable)).toThrow()
  })

  it('works with generator functions / iterators directly', () => {
    function* gen() {
      yield 1
      yield 2
    }
    const g = gen()
    const it = toIterator(g)
    expect(it).toBe(g) // returns the same iterator
    expect(it.next().value).toBe(1)
  })
})
