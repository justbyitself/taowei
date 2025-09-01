import { describe, it, expect } from 'vitest'
import between from '../../src/between.js'

describe('between', () => {
  it('returns a function that wraps text with pre and post strings', () => {
    const wrap = between('<b>')('</b>')
    expect(typeof wrap).toBe('function')
    expect(wrap('x')).toBe('<b>x</b>')
  })

  it('works with empty pre or post', () => {
    expect(between('')('!')('hi')).toBe('hi!')
    expect(between('[')('')('hi')).toBe('[hi')
  })

  it('handles numeric and non-string inputs by coercion to string', () => {
    expect(between('(')(')')(123)).toBe('(123)')
    expect(between('-')('-')(null)).toBe('-null-')
  })

  it('works with multi-character prefixes and suffixes', () => {
    expect(between('<<')('>>')('a')).toBe('<<a>>')
  })

  it('is referentially transparent (no mutation)', () => {
    const wrap = between('x')('y')
    expect(wrap('1')).toBe('x1y')
    expect(wrap('2')).toBe('x2y')
  })
})
