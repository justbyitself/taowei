import { describe, it, expect } from 'vitest'
import { toMapOf } from '../../src'

describe('toMapOf', () => {
  it('should merge POJOs', () => {
    const result = toMapOf([{a:1}, {b:2}, {a:3}])
    expect(result.get('a')).toBe(3)
    expect(result.get('b')).toBe(2)
  })

  it('should merge arrays of entries', () => {
    const result = toMapOf([[['a',1]], [['b',2]], [['a',3]]])
    expect(result.get('a')).toBe(3)
    expect(result.get('b')).toBe(2)
  })

  it('should merge existing Maps', () => {
    const map1 = new Map([['a',1]])
    const map2 = new Map([['b',2]])
    const result = toMapOf([map1, map2])
    expect(result.get('a')).toBe(1)
    expect(result.get('b')).toBe(2)
  })

  it('should merge mixed input types', () => {
    const result = toMapOf([
      {a: 1},
      new Map([['b', 3]]),
      {a: 4},
    ])
    
    expect(result.get('a')).toBe(4)
    expect(result.get('b')).toBe(3)
    expect(result.size).toBe(2)
  })

  it('should handle empty iterable', () => {
    const result = toMapOf([])
    expect(result.size).toBe(0)
  })

  it('should handle undefined or null', () => {
    const result = toMapOf([undefined, null])
    expect(result.size).toBe(0)
  })

  it('should handle non-enumerable properties', () => {
    const obj = { a: 1 }
    Object.defineProperty(obj, 'b', { 
      value: 2, 
      enumerable: false 
    })
    const result = toMapOf([obj])
    expect(result.get('a')).toBe(1)
    expect(result.get('b')).toBeUndefined()
  })  
})
