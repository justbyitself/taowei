import { describe, it, expect } from 'vitest'
import { toMap } from '../../src/index.js'

describe('toMap', () => {
  it('should convert a POJO to a Map', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const map = toMap(obj)
    expect(map).toBeInstanceOf(Map)
    expect(map.get('a')).toBe(1)
    expect(map.get('b')).toBe(2)
    expect(map.get('c')).toBe(3)
    expect(map.size).toBe(3)
  })

  it('should convert an array of entries to a Map', () => {
    const arr = [['a', 1], ['b', 2], ['c', 3]]
    const map = toMap(arr)
    expect(map).toBeInstanceOf(Map)
    expect(map.get('a')).toBe(1)
    expect(map.get('b')).toBe(2)
    expect(map.get('c')).toBe(3)
    expect(map.size).toBe(3)
  })

  it('should convert a Map to a Map', () => {
    const originalMap = new Map([['a', 1], ['b', 2], ['c', 3]])
    const map = toMap(originalMap)
    expect(map).toBeInstanceOf(Map)
    expect(map.get('a')).toBe(1)
    expect(map.get('b')).toBe(2)
    expect(map.get('c')).toBe(3)
    expect(map.size).toBe(3)
  })
})
