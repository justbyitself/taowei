import { describe, it, expect } from 'vitest'
import keys from '../../src/keys.js'

describe('keys', () => {
  it('returns keys from a map', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = keys(map)
    expect([...result]).toEqual(['a', 'b', 'c'])
  })

  it('is reusable', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = keys(map)
    expect([...result]).toEqual(['a', 'b', 'c'])
    expect([...result]).toEqual(['a', 'b', 'c'])
  })

  it('works with an empty map', () => {
    const map = new Map()
    const result = keys(map)
    expect([...result]).toEqual([])
  })
})
