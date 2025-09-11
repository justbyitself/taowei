import { describe, it, expect } from 'vitest'

import pick from '../../src/pick.js'

describe('pick', () => {
  it('returns undefined with empty iterable', () => {
    expect(pick([])).toBeUndefined()
  })

  it('returns the single argument when one provided', () => {
    const v = {}
    expect(pick([v])).toBe(v)
  })

  it('returns one of the provided values', () => {
    const a = 1, b = 2, c = 3
    const v = pick([a, b, c])
    expect([a, b, c]).toContain(v)
  })
})
