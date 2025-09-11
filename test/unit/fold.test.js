import { describe, it, expect } from 'vitest'
import fold from '../../src/fold.js'
import foldWithInit from '../../src/foldWithInit.js'

describe('fold', () => {
  it('reduces and iterable without initial value', () => {
    const sum = x => y => x + y
    const result = fold(sum)([1, 2, 3, 4])
    expect(result).toBe(10)
  })

  it('preserves order of reduction', () => {
    const subtract = x => y => x - y
    const result = fold(subtract)([10, 5, 20, 3])
    expect(result).toBe(-18)
  })

  it('works with custom iterables', () => {
    const custom = {
      *[Symbol.iterator]() {
        yield 10
        yield 20
      }
    }
    const max = x => y => Math.max(x, y)
    const result = fold(max)(custom, 5)
    expect(result).toBe(20)
  })

  it('handles single input', () => {
    const double = x => y => x + y
    const result = fold(double)([10])
    expect(result).toBe(10)
  })
})
