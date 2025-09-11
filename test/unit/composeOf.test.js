import { describe, it, expect } from 'vitest'
import composeOf from '../../src/composeOf.js'

describe('composeOf', () => {
  it('composes functions left-to-right', () => {
    const f = x => x + 1
    const g = x => x * 2
    const h = x => x * 10
    const p = composeOf([f, g, h])
    expect(typeof p).toBe('function')
    expect(p(2)).toBe(41)
  })

  it('works with single function', () => {
    const f = x => x * 3
    expect(composeOf([f])(2)).toBe(6)
  })

  it('returns identity when no functions provided', () => {
    const id = composeOf([])
    expect(id(5)).toBe(5)
  })
})
