import { describe, it, expect } from 'vitest'
import entries from '../../src/entries.js'

describe('entries', () => {
  it('returns entries from a map', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = entries(map)
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('is reusable', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = entries(map)
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
    expect([...result]).toEqual([['a', 1], ['b', 2], ['c', 3]])
  })

  it('works with an empty map', () => {
    const map = new Map()
    const result = entries(map)
    expect([...result]).toEqual([])
  })
})
