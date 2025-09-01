import { describe, it, expect } from 'vitest'
import append from '../../src/append.js'

describe('append', () => {
  it('returns a function that appends a suffix to text', () => {
    const addExcl = append('!')
    expect(typeof addExcl).toBe('function')
    expect(addExcl('hi')).toBe('hi!')
  })

  it('works with empty suffix and non-string inputs via coercion', () => {
    expect(append('')('x')).toBe('x')
    expect(append('!')(123)).toBe('123!')
    expect(append('!')(null)).toBe('null!')
  })

  it('is referentially transparent', () => {
    const a = append('!!')
    expect(a('a')).toBe('a!!')
    expect(a('b')).toBe('b!!')
  })
})
