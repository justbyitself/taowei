import { describe, it, expect } from 'vitest'
import { fold } from '../../src'

const f = (a, b) => a + b

describe('fold', () => {
  it('should fold an iterable to an initial value', () => {
    const iterator = Iterator.from([1, 2, 3, 4, 5])
    expect(fold(f)(0)(iterator)).toBe(15)
  })

  it('should work with an empty iterable', () => {
    const iterator = Iterator.from([])
    expect(fold(f)(0)(iterator)).toBe(0)
  })

  it('should work with an iterable of strings', () => {
    const iterator = Iterator.from(['a', 'b', 'c'])
    expect(fold(f)('')(iterator)).toBe('abc')
  })

  it('should return the initial value when no iterable is provided', () => {
    expect(fold(f)(0)()).toBe(0)
  })

  it('should fold multiple arguments', () => {
    expect(fold(f)(0)(1, Iterator.from([2, 3]), 4)).toBe(10)
  })
})
