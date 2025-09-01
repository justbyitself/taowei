import { describe, it, expect } from 'vitest'
import { isObject } from '../../src'

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(new RegExp())).toBe(true)
    expect(isObject(new Map())).toBe(true)
    expect(isObject(new Set())).toBe(true)
  })

  it('should return false for non-objects', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(undefined)).toBe(false)
    expect(isObject('string')).toBe(false)
    expect(isObject(42)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(Symbol('symbol'))).toBe(false)
    expect(isObject(function () { })).toBe(false)
  })
})
