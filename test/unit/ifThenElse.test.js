import { describe, it, expect } from 'vitest'
import { ifThenElse } from '../../src/index.js'

describe('ifThenElse', () => {
  it('should return the result of ifTruthy if the predicate is true', () => {
    const predicate = true
    const ifTruthy = 'then'
    const ifFalsy = 'else'

    expect(ifThenElse(predicate)(ifTruthy)(ifFalsy)).toBe('then')
  })

  it('should return the result of ifFalsy if the predicate is false', () => {
    const predicate = false
    const ifTruthy = 'then'
    const ifFalsy = 'else'

    expect(ifThenElse(predicate)(ifTruthy)(ifFalsy)).toBe('else')
  })

  it('should handle values that are not strings', () => {
    expect(ifThenElse(true)(42)(0)).toBe(42)
    expect(ifThenElse(false)(42)(0)).toBe(0)
  })

  it('should handle undefined values', () => {
    expect(ifThenElse(true)(undefined)('else')).toBe(undefined)
    expect(ifThenElse(false)('then')(undefined)).toBe(undefined)
  })

  it('should handle boolean values', () => {
    expect(ifThenElse(true)(true)(false)).toBe(true)
    expect(ifThenElse(false)(true)(false)).toBe(false)
  })
})
