import { describe, it, expect } from 'vitest'
import prepend from '../../src/prepend.js'

describe('prepend', () => {
  it('returns a function that prepends a prefix to text', () => {
    const addHi = prepend('hi ')
    expect(typeof addHi).toBe('function')
    expect(addHi('Bob')).toBe('hi Bob')
  })

  it('works with empty prefix and non-string inputs via coercion', () => {
    expect(prepend('')('x')).toBe('x')
    expect(prepend('>')(123)).toBe('>123')
    expect(prepend('>')(undefined)).toBe('>undefined')
  })

  it('is referentially transparent', () => {
    const p = prepend('>>')
    expect(p('1')).toBe('>>1')
    expect(p('2')).toBe('>>2')
  })
})
