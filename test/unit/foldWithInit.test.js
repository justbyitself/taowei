import { describe, it, expect } from 'vitest'
import foldWithInit from '../../src/foldWithInit.js'

describe('foldWithInit', () => {
  it('sums numbers with initial value', () => {
    const sum = foldWithInit(acc => x => acc + x)(0)
    expect(sum([1, 2, 3, 4])).toBe(10)
  })

  it('concatenates strings', () => {
    const concat = foldWithInit(acc => x => acc + x)('')
    expect(concat(['hello', ' ', 'world'])).toBe('hello world')
  })

  it('finds maximum value', () => {
    const max = foldWithInit(acc => x => x > acc ? x : acc)(-Infinity)
    expect(max([1, 5, 3, 9, 2])).toBe(9)
  })

  it('works with empty array', () => {
    const sum = foldWithInit(acc => x => acc + x)(0)
    expect(sum([])).toBe(0)
  })

  it('works with single element array', () => {
    const sum = foldWithInit(acc => x => acc + x)(10)
    expect(sum([5])).toBe(15)
  })
})
