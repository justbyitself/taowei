import { describe, it, expect } from 'vitest'
import { toPojoOf } from '../../src/index.js'

describe('toPojoOf', () => {
  it('should merge POJOs', () => {
    const result = toPojoOf([{ a: 1 }, { b: 2 }, { a: 3 }])
    expect(result.a).toBe(3)
    expect(result.b).toBe(2)
  })

  it('should merge arrays of entries', () => {
    const result = toPojoOf([[['a', 1]], [['b', 2]], [['a', 3]]])
    expect(result.a).toBe(3)
    expect(result.b).toBe(2)
  })

  it('should merge existing Maps', () => {
    const map1 = new Map([['a', 1]])
    const map2 = new Map([['b', 2]])
    const result = toPojoOf([map1, map2])
    expect(result.a).toBe(1)
    expect(result.b).toBe(2)
  })

  it('should merge mixed input types', () => {
    const result = toPojoOf([
      { a: 1 },
      new Map([['b', 3]]),
      { a: 4 },
    ])

    expect(result.a).toBe(4)
    expect(result.b).toBe(3)
    expect(Object.keys(result).length).toBe(2)
  })

  it('should handle empty iterable', () => {
    const result = toPojoOf([])
    expect(Object.keys(result).length).toBe(0)
  })

  it('should ignore non-enumerable properties', () => {
    const obj = { a: 1 }
    Object.defineProperty(obj, 'b', {
      value: 2,
      enumerable: false
    })
    const result = toPojoOf([obj])
    expect(result.a).toBe(1)
    expect(result.b).toBeUndefined()
  })
})
