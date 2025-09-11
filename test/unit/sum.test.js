import { describe, it, expect } from 'vitest'
import sum from '../../src/sum.js'

describe('sum', () => {
  it('sums simple numeric arguments of an iterable', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
})

