import { describe, it, expect } from 'vitest'
import { repeat } from '#taowei'

describe('repeat function', () => {
  it('should return an iterable that yields the same value indefinitely', () => {
    const iterable = repeat('Hola')

    const iterator = iterable[Symbol.iterator]()

    for (let i = 0; i < 5; i++) {
      expect(iterator.next().value).toBe('Hola')
    }
    expect(iterator.next().done).toBe(false)
  })
})
