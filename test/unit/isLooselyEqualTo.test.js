import { describe, it, expect } from 'vitest'
import isLooselyEqualTo from '../../src/isLooselyEqualTo.js'

describe('isLooselyEqualTo', () => {
  it('returns a function that performs == comparison', () => {
    const isFive = isLooselyEqualTo(5)
    expect(typeof isFive).toBe('function')
    expect(isFive('5')).toBe(true)
    expect(isFive(5)).toBe(true)
    expect(isFive(6)).toBe(false)
  })

  it('handles null and undefined according to ==', () => {
    expect(isLooselyEqualTo(null)(undefined)).toBe(true)
    expect(isLooselyEqualTo(undefined)(null)).toBe(true)
    expect(isLooselyEqualTo(null)(0)).toBe(false)
  })

  it('coerces booleans and numbers as JS == does', () => {
    expect(isLooselyEqualTo(true)(1)).toBe(true)
    expect(isLooselyEqualTo(false)(0)).toBe(true)
    expect(isLooselyEqualTo(true)('1')).toBe(true)
  })

  it('compares objects and primitives as JS == does', () => {
    const obj = { valueOf: () => 2 }
    expect(isLooselyEqualTo(2)(obj)).toBe(true)
    expect(isLooselyEqualTo('2')(obj)).toBe(true)
  })

  it('distinguishes different types when coercion does not match', () => {
    expect(isLooselyEqualTo(0)('')).toBe(true) // '' == 0
    expect(isLooselyEqualTo([])(false)).toBe(true) // [] == false
    expect(isLooselyEqualTo([1])(1)).toBe(true) // [1] == 1
    expect(isLooselyEqualTo([1,2])('1,2')).toBe(true)
  })
})
