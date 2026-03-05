import { describe, it, expect } from 'vitest'
import { otherwise } from '#taowei'

describe('otherwise', () => {
  it('is a function that returns true', () => {
    expect(otherwise()).toBe(true)
  })
})
