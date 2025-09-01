import { describe, it, expect } from 'vitest'
import sum from '../../src/sum.js'

describe('sum', () => {
  it('sums simple numeric arguments', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })

  it('sums mixed iterables and scalars', () => {
    expect(sum([1, 2], 3)).toBe(6)
    expect(sum(1, [2, 3])).toBe(6)
    expect(sum([1], [2, 3])).toBe(6)
  })
})

