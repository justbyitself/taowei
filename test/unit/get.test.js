import { describe, it, expect } from 'vitest'
import get from '../../src/get.js'

describe('get', () => {
  it('retrieves object properties', () => {
    const obj = { a: 1, b: 2 }
    expect(get('a')(obj)).toBe(1)
    expect(get('c')(obj)).toBe(undefined)
  })

  it('retrieves Map entries', () => {
    const map = new Map([['a', 1], ['b', 2]])
    expect(get('a')(map)).toBe(1)
    expect(get('c')(map)).toBe(undefined)
  })
})
