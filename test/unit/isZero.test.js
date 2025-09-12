import { describe, it, expect } from 'vitest'
import { isZero } from '../../src/index.js'

describe('isZero', () => {
  it('true only for numeric 0 (=== 0)', () => {
    expect(isZero(0)).toBe(true)
    expect(isZero(-0)).toBe(true)
    expect(isZero(0n)).toBe(false)
    expect(isZero('0')).toBe(false)
    expect(isZero(null)).toBe(false)
    expect(isZero(undefined)).toBe(false)
  })
})
