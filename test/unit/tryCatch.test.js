import { describe, it, expect } from 'vitest'
import tryCatch from '../../src/tryCatch.js'

describe('tryCatch (currified, forwards args, catch receives (err, ...args))', () => {
  it('returns the result of try callback on success', () => {
    const tryFn = (a, b) => a + b
    const catchFn = () => 'caught'
    const result = tryCatch(tryFn)(catchFn)(2, 3)
    expect(result).toBe(5)
  })

  it('returns the result of catch callback when try throws', () => {
    const err = new Error('boom')
    const tryFn = () => { throw err }
    const catchFn = e => ({ handled: e.message })
    const result = tryCatch(tryFn)(catchFn)()
    expect(result).toEqual({ handled: 'boom' })
  })

  it('forwards arguments to try callback', () => {
    const tryFn = (x, y) => x * y
    const catchFn = () => { }
    const result = tryCatch(tryFn)(catchFn)(3, 4)
    expect(result).toBe(12)
  })

  it('forwards error and original args to catch callback', () => {
    let received = null
    const tryFn = () => { throw new Error('bad') }
    const catchFn = (err, x, y) => { received = { err, x, y }; return 'ok' }

    const result = tryCatch(tryFn)(catchFn)(7, 8)
    expect(result).toBe('ok')
    expect(received.err).toBeInstanceOf(Error)
    expect(received.err.message).toBe('bad')
    expect(received.x).toBe(7)
    expect(received.y).toBe(8)
  })

  it('propagates exceptions thrown inside catch callback', () => {
    const tryFn = () => { throw new Error('try-err') }
    const catchFn = () => { throw new Error('catch-err') }

    expect(() => tryCatch(tryFn)(catchFn)()).toThrow('catch-err')
  })

  it('works with zero-argument try and catch', () => {
    const tryFn = () => 1
    const catchFn = () => 2
    expect(tryCatch(tryFn)(catchFn)()).toBe(1)
  })

  it('is synchronous and returns undefined if try returns undefined', () => {
    const tryFn = () => { }
    const catchFn = () => 'caught'
    expect(tryCatch(tryFn)(catchFn)()).toBeUndefined()
  })
})
