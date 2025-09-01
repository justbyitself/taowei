import { describe, it, expect } from 'vitest'
import property from '../../src/property.js'

describe('property', () => {
  it('returns a function that gets a property from an object', () => {
    const getName = property('name')
    expect(typeof getName).toBe('function')
    expect(getName({ name: 'Alice' })).toBe('Alice')
  })

  it('returns undefined for missing properties', () => {
    expect(property('x')({})).toBeUndefined()
  })

  it('works with numeric keys and arrays', () => {
    expect(property(1)([10, 20, 30])).toBe(20)
    expect(property('2')([10, 20, 30])).toBe(30)
  })

  it('works with inherited properties', () => {
    const proto = { a: 1 }
    const obj = Object.create(proto)
    obj.b = 2
    expect(property('a')(obj)).toBe(1)
    expect(property('b')(obj)).toBe(2)
  })

  it('forwards undefined/null obj (throws as JS does)', () => {
    expect(() => property('a')(null)).toThrow()
    expect(() => property('a')(undefined)).toThrow()
  })

  it('works with symbols', () => {
    const s = Symbol('s')
    const obj = { [s]: 42 }
    expect(property(s)(obj)).toBe(42)
  })
})
