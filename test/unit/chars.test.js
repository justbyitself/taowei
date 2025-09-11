import { describe, it, expect } from 'vitest'
import chars from '../../src/chars.js'

describe('chars', () => {
  it('iterates characters', () => {
    expect(Array.from(chars('abc'))).toEqual(['a','b','c'])
  })

  it('preserves surrogate pairs', () => {
    const s = 'a\u{1F600}b' // 😀
    expect(Array.from(chars(s))).toEqual(['a','\u{1F600}','b'])
  })
})
