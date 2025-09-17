import { describe, it, expect } from 'vitest'
import toReusable from '../../src/toReusable.js'

describe('toReusable', () => {
  it('converts a generator function into a reusable iterable', () => {
    const generatorFn = function* () {
      yield 1
      yield 2
      yield 3
    }
    
    const reusableIterable = toReusable(generatorFn)
    
    // First iteration
    expect(Array.from(reusableIterable)).toEqual([1, 2, 3])
    
    // Second iteration (should work again)
    expect(Array.from(reusableIterable)).toEqual([1, 2, 3])
  })

  it('works with an empty generator', () => {
    const emptyGeneratorFn = function* () {}
    
    const reusableIterable = toReusable(emptyGeneratorFn)
    
    // First iteration
    expect(Array.from(reusableIterable)).toEqual([])
    
    // Second iteration
    expect(Array.from(reusableIterable)).toEqual([])
  })

  it('works with a generator that yields different types', () => {
    const mixedGeneratorFn = function* () {
      yield 'hello'
      yield 42
      yield true
    }
    
    const reusableIterable = toReusable(mixedGeneratorFn)
    
    // First iteration
    expect(Array.from(reusableIterable)).toEqual(['hello', 42, true])
    
    // Second iteration
    expect(Array.from(reusableIterable)).toEqual(['hello', 42, true])
  })

  it('creates a new iterator each time Symbol.iterator is called', () => {
    const generatorFn = function* () {
      yield 1
      yield 2
      yield 3
    }
    
    const iterable = toReusable(generatorFn)
    
    expect([...iterable]).toEqual([1, 2, 3])
    expect([...iterable]).toEqual([1, 2, 3])
  })
})
