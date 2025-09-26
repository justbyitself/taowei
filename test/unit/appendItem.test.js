import { describe, it, expect } from 'vitest'
import appendItem from '../../src/appendItem.js'

describe('appendItem', () => {
  it('sets key-value pair in a map', () => {
    const map = new Map()
    const result = appendItem(['a', 1])(map)
    expect(result.get('a')).toBe(1)
  })

  it('returns new map without modifying original', () => {
    const map = new Map()
    const result = appendItem(['b', 2])(map)
    expect(result).not.toBe(map)
    expect(result.get('b')).toBe(2)
  })

  it('overwrites existing values', () => {
    const map = new Map([['a', 1]])
    const result = appendItem(['a', 3])(map)
    expect(result.get('a')).toBe(3)
  })

  it('sets key-value pair in a pojo', () => {
    const obj = { x: 10 }
    const result = appendItem(['y', 20])(obj)
    expect(result).toEqual({ x: 10, y: 20 })
  })

  it('overwrites existing values in a pojo', () => {
    const obj = { a: 1 }
    const result = appendItem(['a', 3])(obj)
    expect(result).toEqual({ a: 3 })
  })

  it('creates new object without modifying original', () => {
    const obj = { a: 1 }
    const result = appendItem(['b', 2])(obj)
    expect(result).toEqual({ a: 1, b: 2 })
    expect(obj).toEqual({ a: 1 })
  })

  it('handles undefined values', () => {
    const obj = { a: 1 }
    const result = appendItem(['b', undefined])(obj)
    expect(result).toEqual({ a: 1, b: undefined })
  })

  it('handles null values', () => {
    const obj = { a: 1 }
    const result = appendItem(['b', null])(obj)
    expect(result).toEqual({ a: 1, b: null })
  })

  it('handles complex values', () => {
    const obj = { a: 1 }
    const complexValue = { x: [1, 2, 3], y: { z: 'test' } }
    const result = appendItem(['b', complexValue])(obj)
    expect(result).toEqual({ a: 1, b: complexValue })
  })
})
