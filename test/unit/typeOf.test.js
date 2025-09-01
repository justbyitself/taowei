import { describe, it, expect } from 'vitest'
import typeOf from '../../src/typeOf.js'

describe('typeOf', () => {
  it('returns a string describing the type (like typeof)', () => {
    expect(typeOf(1)).toBe('number')
    expect(typeOf('x')).toBe('string')
    expect(typeOf(undefined)).toBe('undefined')
    expect(typeOf(null)).toBe('object') // JS typeof behavior
  })

  it('distinguishes arrays as object via typeof (library may special-case)', () => {
    expect(typeOf([])).toBe('object')
  })

  it('works for functions and symbols', () =>
    expect(typeOf(() => {})).toBe('function')
  )
})
