import { describe, it, expect } from 'vitest'
import { concat } from '../../src'

describe('concat', () => {
  it('should return an empty iterable when called without arguments', () => {
    const iterable = concat()
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([])
  })

  it('should return an iterable with one item when called with a single value', () => {
    const iterable = concat(1)
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1])
  })

  it('should return an iterable from an array', () => {
    const iterable = concat([1, 2, 3])
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1, 2, 3])
  })

  it('should concatenate a single value with an array', () => {
    const iterable = concat(1, Iterator.from([1, 2, 3]))
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1, 1, 2, 3])
  })

  it('should handle multiple arguments', () => {
    const iterable = concat(1, 2, 3)
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1, 2, 3])
  })

  it('should handle empty arrays', () => {
    const iterable = concat(Iterator.from([]))
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([])
  })

  it('should handle nested arrays', () => {
    const iterable = concat(Iterator.from([1, [2, 3]]))
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1, [2, 3]])
  })

  it('should concatenate iterators', () => {
    const a = concat(1, 2)
    const b = concat(3, 4)
    const iterable = concat(a, b)
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1, 2, 3, 4])
  })

  it('should not treat strings as character iterables', () => {
    const iterable = concat('hello', 'world')
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual(['hello', 'world'])
  })

  it('should handle a plain iterator (next-only) by yielding its values', () => {
    const plainIterator = (() => {
      let i = 0
      return {
        next() {
          if (i < 3) return { value: ++i, done: false }
          return { value: undefined, done: true }
        }
      }
    })()

    const iterable = concat(1, plainIterator, 4)
    expect(iterable[Symbol.iterator]().toArray()).toStrictEqual([1, 1, 2, 3, 4])
  })  
})
