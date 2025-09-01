import { describe, it, expect } from 'vitest'
import pipe from '../../src/pipe.js'

describe('pipe', () => {
  it('pipes functions left-to-right', () => {
    const f = x => x + 1
    const g = x => x * 2
    const h = x => x * 10
    const p = pipe(f, g, h)
    expect(typeof p).toBe('function')
    expect(p(2)).toBe(60)
  })

  it('works with single function', () => {
    const f = x => x * 3
    expect(pipe(f)(2)).toBe(6)
  })

  it('returns identity when no functions provided', () => {
    const id = pipe()
    expect(id(5)).toBe(5)
  })

  it('propagates thrown errors / rejections', async () => {
    const f = x => { throw new Error('boom') }
    const p = pipe(f)
    expect(() => p(1)).toThrow('boom')

    const a = async x => { throw new Error('boom async') }
    const q = pipe(a)
    await expect(q(1)).rejects.toThrow('boom async')
  })
})
