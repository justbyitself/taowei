import { describe, it, expect } from 'vitest'
import { compose } from '../../src/index.js'

describe('compose function', () => {
  it('should return the same value it receives', () => {
    const twice = x => 2 * x
    const succ = x => x + 1
    expect(compose(twice)(succ)(7)).toBe(16)
  })
})
