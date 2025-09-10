import { describe, it, expect } from 'vitest'
import { constant } from '../../src'

describe('constant', () => {
  it('should return a function that always returns the value x', () => {
    expect(constant(42)(10)).toBe(42)
    expect(constant('hello')('bye')).toBe('hello')
  })
})
