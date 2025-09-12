import { describe, it, expect } from 'vitest'
import { repeat } from '../../src/index.js'

describe('repeat function', () => {
  it('should return an iterator that yields the same value indefinitely', () => {
    const infiniteIterator = repeat('Hola')

    for (let i = 0; i < 5; i++) {
      expect(infiniteIterator.next().value).toBe('Hola')
    }
    expect(infiniteIterator.next().done).toBe(false)
  })
})
