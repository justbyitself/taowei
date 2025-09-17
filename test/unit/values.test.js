import { describe, it, expect } from 'vitest'
import values from '../../src/values.js'

describe('values', () => {
  it('returns values from a map', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = values(map)
    expect([...result]).toEqual([1, 2, 3])
  })

  it('is reusable', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const result = values(map)
    expect([...result]).toEqual([1, 2, 3])
    expect([...result]).toEqual([1, 2, 3])
  })

  it('works with an empty map', () => {
    const map = new Map()
    const result = values(map)
    expect([...result]).toEqual([])
  })
})
