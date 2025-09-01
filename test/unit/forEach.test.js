import { describe, it, expect } from 'vitest'
import forEach from '../../src/forEach.js'

describe('forEach', () => {
  it('iterates over mixed iterables and non-iterables', () => {
    const calls = []
    const push = x => calls.push(x)
    forEach(push)([1, 2], 3, [4])
    expect(calls).toEqual([1, 2, 3, 4])
  })

  it('iterates over a single iterable and a non-iterable', () => {
    const calls = []
    const toStr = x => calls.push(String(x))
    forEach(toStr)([1, 2, 3], 4)
    expect(calls).toEqual(['1', '2', '3', '4'])
  })

  it('handles empty iterables and values', () => {
    const calls = []
    const inc = x => calls.push(x + 1)
    forEach(inc)([], 1, [])
    expect(calls).toEqual([2])
  })

  it('preserves order across inputs', () => {
    const calls = []
    const id = x => calls.push(x)
    forEach(id)(['a', 'b'], 'c', ['d'])
    expect(calls).toEqual(['a', 'b', 'c', 'd'])
  })

  it('works with custom iterables', () => {
    const calls = []
    const addOne = x => calls.push(x + 1)
    const custom = {
      *[Symbol.iterator]() {
        yield 10
        yield 20
      }
    }
    forEach(addOne)(custom, 5)
    expect(calls).toEqual([11, 21, 6])
  })

  it('does not materialize large iterables (works lazily / streaming)', () => {
    function* gen(n) { for (let i = 0; i < n; i++) yield i }
    let count = 0
    const inc = x => { count += 1 }
    forEach(inc)(gen(1000))
    expect(count).toBe(1000)
  })

  it('throws if callback is not a function', () => {
    expect(() => forEach(null)([1, 2])).toThrow()
  })
})
