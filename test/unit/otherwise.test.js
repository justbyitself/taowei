import { describe, it, expect } from 'vitest'
import otherwise from '../../src/otherwise.js'

describe('otherwise', () => {
  it('is a function that returns true', () => {
    expect(otherwise()).toBe(true)
  })
})
