import { describe, it, expect } from 'vitest'
import { toMap } from '../../src'

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

  it('should convert entries to a Map', () => {
    const map = toMap(['a', 1], ['b', 2], ['c', 3])
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

  it('should merge multiple entries', () => {
    const mapA = new Map([['a', 1], ['b', 2], ['c', 3]])
    const mapB = [['d', 10], ['c', 20]]
    const mapC = { a: 5, e: 50 }
    const map = toMap(mapA, mapB, mapC)
    expect(map).toBeInstanceOf(Map)
    expect(map.get('a')).toBe(5)
    expect(map.get('b')).toBe(2)
    expect(map.get('c')).toBe(20)
    expect(map.get('d')).toBe(10)
    expect(map.get('e')).toBe(50)
    expect(map.size).toBe(5)
  })

  it('should convert a single value to a Map with a single entry', () => {
    const map = toMap("a")
    expect(map).toBeInstanceOf(Map)
    expect(map.get('a')).toBeUndefined()
    expect(map.size).toBe(1)
  })
})
