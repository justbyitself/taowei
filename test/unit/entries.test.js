import { describe, it, expect } from 'vitest'
import entries from '../../src/entries.js'

describe('entries', () => {
  it('returns entries from a map', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = entries(map)
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('returns entries from a plain object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = entries(obj)
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('is reusable for maps', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = entries(map)
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('is reusable for objects', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = entries(obj)
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('works with an empty map', () => {
    const map = new Map()
    const result = entries(map)
    expect([...result]).toEqual([])
  })

  it('works with an empty object', () => {
    const obj = {}
    const result = entries(obj)
    expect(result).toEqual([])
  })
})
