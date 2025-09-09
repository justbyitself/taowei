import { describe, it, expect } from 'vitest'
import repeatEffect from '../../src/repeatEffect.js'

describe('repeatEffect', () => {
  it('returns an iterable that yields the result of calling the function', () => {
    let counter = 0
    const incrementCounter = () => ++counter

    const effectIterator = repeatEffect(incrementCounter)

    expect(effectIterator.next().value).toBe(1)
    expect(effectIterator.next().value).toBe(2)
    expect(effectIterator.next().value).toBe(3)
    expect(effectIterator.next().done).toBe(false)
  })
})
