import { describe, it, expect } from 'vitest'
import repeatEffect from '../../src/repeatEffect.js'

describe('repeatEffect', () => {
  it('returns an iterable that yields the result of calling the function', () => {
    let counter = 0
    const incrementCounter = () => ++counter

    const iterable = repeatEffect(incrementCounter)

    const iterator = iterable[Symbol.iterator]()

    expect(iterator.next().value).toBe(1)
    expect(iterator.next().value).toBe(2)
    expect(iterator.next().value).toBe(3)
    expect(iterator.next().done).toBe(false)
  })
})
