import { describe, it, expect } from 'vitest'
import { cycle } from '../../src/index.js'

describe('cycle', () => {
  it('should cycle through the iterator', () => {
    function* generator() {
      yield 1
      yield 2
      yield 3
    }

    const i = cycle(generator())

    expect(i.next().value).toBe(1)
    expect(i.next().value).toBe(2)
    expect(i.next().value).toBe(3)
    expect(i.next().value).toBe(1)
    expect(i.next().value).toBe(2)
    expect(i.next().value).toBe(3)

    expect(i.next().done).toBe(false)
  })
})