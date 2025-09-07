import { describe, it, expect, vi } from 'vitest'
import randomInt from '../../src/randomInt.js'

describe('randomInt', () => {
  it('throws if min is not integer', () => {
    expect(() => randomInt(1.5)).toThrow(TypeError)
    expect(() => randomInt('a')).toThrow(TypeError)
  })

  it('returned function throws if max is not integer', () => {
    const r = randomInt(0)
    expect(() => r(2.2)).toThrow(TypeError)
    expect(() => r('b')).toThrow(TypeError)
  })

  it('throws if min > max', () => {
    const r = randomInt(5)
    expect(() => r(4)).toThrow(RangeError)
  })

  it('returns min when min === max', () => {
    const r = randomInt(3)
    expect(r(3)).toBe(3)
  })

  it('returns integers within inclusive bounds', () => {
    const r = randomInt(-2)
    for (let i = 0; i < 1000; i++) {
      const v = r(2)
      expect(Number.isInteger(v)).toBe(true)
      expect(v).toBeGreaterThanOrEqual(-2)
      expect(v).toBeLessThanOrEqual(2)
    }
  })
})
