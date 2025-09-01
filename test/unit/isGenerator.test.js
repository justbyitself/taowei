import { describe, it, expect } from 'vitest'
import isGenerator from '../../src/isGenerator'

function* sampleGen() { yield 1 }

describe('isGenerator (generator functions)', () => {
  it('true for generator functions, false for instances and others', () => {
    expect(isGenerator(sampleGen)).toBe(true)
    expect(isGenerator(sampleGen())).toBe(false)
    expect(isGenerator(function () { })).toBe(false)
    expect(isGenerator(null)).toBe(false)
    expect(isGenerator({})).toBe(false)
  })
})
