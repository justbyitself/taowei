import { describe, it, expect } from 'vitest'
import map from '../../src/map.js'

describe('map', () => {
  it('maps over mixed iterables and non-iterables', () => {
    const double = x => x * 2
    const result = map(double)([1, 2], 3, [4])
    expect(Array.from(result)).toEqual([2, 4, 6, 8])
  })

  it('maps over a single iterable and a non-iterable', () => {
    const toStr = x => String(x)
    const result = map(toStr)([1, 2, 3], 4)
    expect(Array.from(result)).toEqual(['1', '2', '3', '4'])
  })

  it('handles empty iterables and values', () => {
    const inc = x => x + 1
    const result = map(inc)([], 1, [])
    expect(Array.from(result)).toEqual([2])
  })

  it('preserves order across inputs', () => {
    const id = x => x
    const result = map(id)(['a', 'b'], 'c', ['d'])
    expect(Array.from(result)).toEqual(['a', 'b', 'c', 'd'])
  })

  it('works with custom iterables', () => {
    const addOne = x => x + 1
    const custom = {
      *[Symbol.iterator]() {
        yield 10
        yield 20
      }
    }
    const result = map(addOne)(custom, 5)
    expect(Array.from(result)).toEqual([11, 21, 6])
  })

  it('does not materialize large iterables (works lazily)', () => {
    function* gen(n) { for (let i = 0; i < n; i++) yield i }
    const result = map(x => x + 1)(gen(1000))
    // consume first and last checks to ensure laziness doesn't precompute array
    const arr = Array.from(result)
    expect(arr.length).toBe(1000)
    expect(arr[0]).toBe(1)
    expect(arr[999]).toBe(1000)
  })

  it('throws if mapper is not a function', () => {
    // if your API should throw; remove if it should coerce
    expect(() => map(null)([1, 2])).toThrow()
  })
})
