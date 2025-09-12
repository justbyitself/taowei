import { describe, it, expect } from 'vitest'
import { id } from '../../src/index.js'

describe('id function', () => {
  it('should return the same value it receives', () => {
    expect(id(42)).toBe(42)
    expect(id('hello')).toBe('hello')
    expect(id({ key: 'value' })).toStrictEqual({ key: 'value' })
  })
})
