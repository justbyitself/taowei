import { describe, it, expect } from 'vitest'
import { always } from '../../src'

describe('always', () => {
  it('should return a function that always returns the value x', () => {
    expect(always(42)(10)).toBe(42)
    expect(always('hello')('bye')).toBe('hello')
  })
})
