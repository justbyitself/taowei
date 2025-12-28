import { describe, it, expect } from 'vitest'
import includes from '../../src/includes.js'

describe('includes', () => {
  const animals = ['cat', 'dog', 'bat']

  it('should return true if the value is in the array', () => {
    const hasCat = includes(animals)
    expect(hasCat('cat')).toBe(true)
    expect(hasCat('dog')).toBe(true)
  })

  it('should return false if the value is not in the array', () => {
    const hasCat = includes(animals)
    expect(hasCat('fox')).toBe(false)
    expect(hasCat('')).toBe(false)
  })

  it('should work with empty arrays', () => {
    const hasValue = includes([])
    expect(hasValue('anything')).toBe(false)
  })
})
