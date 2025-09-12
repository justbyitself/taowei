import { describe, it, expect } from 'vitest'
import { iterate, succ, take, toArray } from '../../src/index.js'

describe('iterators', () => {
  it('takes first 5 natural numbers', () => {
    const naturals = iterate(succ)(1)
    const firstNaturals = take(5)(naturals)
    expect(toArray(firstNaturals)).toStrictEqual([1, 2, 3, 4, 5])
  })
})
