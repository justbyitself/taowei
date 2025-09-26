import { describe, it, expect } from 'vitest'
import appendString from '../../src/appendString.js'

describe('appendString', () => {
  it('returns a function that appends a suffix to text', () => {
    const add = appendString('!')
    expect(typeof add).toBe('function')
    expect(add('hi')).toBe('hi!')
  })

  it('works with empty suffix and non-string inputs via coercion', () => {
    expect(appendString('')('x')).toBe('x')
    expect(appendString('!')(123)).toBe('123!')
    expect(appendString('!')(null)).toBe('null!')
  })

  it('is referentially transparent', () => {
    const a = appendString('!!')
    expect(a('a')).toBe('a!!')
    expect(a('b')).toBe('b!!')
  })
})
