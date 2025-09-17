import { describe, it, expect } from 'vitest'
import empty from '../../src/empty.js'

describe('empty', () => {
  it('returns an empty iterable', () => {
    const result = empty()
    expect([...result]).toEqual([])
  })

  it('is reusable', () => {
    const result = empty()
    expect([...result]).toEqual([])
    expect([...result]).toEqual([])
  })

  it('works with different iteration methods', () => {
    const result = empty()
    expect(Array.from(result)).toEqual([])
    expect([...result]).toEqual([])
  })
})
