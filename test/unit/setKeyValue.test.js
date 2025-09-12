import { describe, it, expect } from 'vitest'
import { setKeyValue } from '../../src/index.js'

describe('setKeyValue', () => {
  it('should set a key-value pair in a map', () => {
    const map = new Map()
    const result = setKeyValue('a')(1)(map)
    expect(result.get('a')).toBe(1)
  })

  it('should return the modified map', () => {
    const map = new Map()
    const result = setKeyValue('b')(2)(map)
    expect(result).toBe(map)
  })

  it('should overwrite existing values', () => {
    const map = new Map([['a', 1]])
    const result = setKeyValue('a')(3)(map)
    expect(result.get('a')).toBe(3)
  })
})
