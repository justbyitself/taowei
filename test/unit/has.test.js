import { describe, it, expect } from 'vitest'
import has from '../../src/has.js'

describe('has', () => {
  it('checks object properties', () => {
    const obj = { a: 1, b: 2 }
    expect(has('a')(obj)).toBe(true)
    expect(has('c')(obj)).toBe(false)
  })

  it('checks Map entries', () => {
    const map = new Map([['a', 1], ['b', 2]])
    expect(has('a')(map)).toBe(true)
    expect(has('c')(map)).toBe(false)
  })
})
