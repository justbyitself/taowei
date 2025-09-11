import { describe, it, expect } from 'vitest'
import join from '../../src/join.js'

describe('join', () => {
  it('joins array elements with separator', () => {
    expect(join(',')(['red','white','orange'])).toBe('red,white,orange')
  })

  it('joins non-array iterables', () => {
    const set = new Set([ 'a', 'b', 'c' ])
    expect(join('-')(set)).toBe('a-b-c')
  })

  it('coerces elements to strings and handles empty separator', () => {
    expect(join('')(['a', null, 'b'])).toBe('ab')
  })

  it('returns empty string for empty iterable', () => {
    expect(join(',')([])).toBe('')
  })
})
