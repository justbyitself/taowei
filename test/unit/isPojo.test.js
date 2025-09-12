import { describe, it, expect } from 'vitest'
import { isPojo } from '../../src/index.js'

describe('isPojo', () => {
  it('should return true for a plain object', () => {
    expect(isPojo({ a: 1, b: 2 })).toBe(true)
  })

  it('should return false for an array', () => {
    expect(isPojo([1, 2, 3])).toBe(false)
  })

  it('should return false for a map', () => {
    expect(isPojo(new Map([['a', 1], ['b', 2]]))).toBe(false)
  })

  it('should return false for an object created with a constructor', () => {
    function Person(name, age) {
      this.name = name
      this.age = age
    }
    expect(isPojo(new Person('John', 30))).toBe(false)
  })

  it('should return false for an object with a different prototype', () => {
    const obj = Object.create({ a: 1 })
    expect(isPojo(obj)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isPojo(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isPojo(undefined)).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isPojo(123)).toBe(false)
  })

  it('should return false for a string', () => {
    expect(isPojo('hello')).toBe(false)
  })

  it('should return false for a boolean', () => {
    expect(isPojo(true)).toBe(false)
  })
})
