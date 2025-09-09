import { describe, it, expect } from 'vitest'
import foldWithInit from '../../src/foldWithInit.js'

describe('foldWithInit', () => {
  it('reduces multiple iterables with an initial value', () => {
    const sum = x => y => x + y
    const result = foldWithInit(sum)(0)([1, 2], 3, [4])
    expect(result).toBe(10)
  })

  it('handles empty iterables with initial value', () => {
    const concat = x => y => x + y
    const result = foldWithInit(concat)('start')([], 'end', [])
    expect(result).toBe('startend')
  })

  it('works with custom iterables', () => {
    const custom = {
      *[Symbol.iterator]() {
        yield 10
        yield 20
      }
    }
    const max = x => y => Math.max(x, y)
    const result = foldWithInit(max)(0)(custom, 5)
    expect(result).toBe(20)
  })

  it('preserves order of reduction', () => {
    const subtract = x => y => x - y
    const result = foldWithInit(subtract)(100)([10, 5], 20, [3])
    expect(result).toBe(62)
  })

  it('handles mixed types of inputs', () => {
    const concat = x => y => x + String(y)
    const result = foldWithInit(concat)('start')([], 1, [2], 'mid', [3])
    expect(result).toBe('start12mid3')
  })

  it('works with single element inputs', () => {
    const square = x => y => x * y
    const result = foldWithInit(square)(2)([3])
    expect(result).toBe(6)
  })

  it('receives reducer function with two arguments', () => {
    const calls = []
    const reducer = x => y => {
      calls.push([x, y])
      return x
    }

    const result = foldWithInit(reducer)(0)([1, 2], 3, [4])

    expect(calls).toEqual([[0, 1], [0, 2], [0, 3], [0, 4]])
  })

  it('throws error for non-function reducer', () => {
    expect(() => foldWithInit(null)(0)([1, 2])).toThrow()
  })
})
