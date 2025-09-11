import { describe, it, expect } from 'vitest'
import second from '../../src/second.js'

describe('second', () => {
  it('returns the second element of an array', () => {
    expect(second([1, 2, 3])).toBe(2)
  })

  it('returns undefined when array has only one element', () => {
    expect(second([1])).toBeUndefined()
  })

  it('returns undefined for empty input', () => {
    expect(second([])).toBeUndefined()
  })

  it('works with non-array iterables', () => {
    const set = new Set([1, 2, 3])
    expect(second(set)).toBe(2)
  })

  it('handles non-integer-like inputs gracefully', () => {
    const arr = [null, undefined, 0]
    expect(second(arr)).toBeUndefined()
  })
})
