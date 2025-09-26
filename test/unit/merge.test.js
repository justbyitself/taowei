import { describe, it, expect } from 'vitest'
import merge from '../../src/merge.js'

describe('merge', () => {
  // POJO ↔ POJO
  it('merges simple object to object', () => {
    expect(merge({ a: 1 })({ b: 2 })).toEqual({ a: 1, b: 2 })
  })

  it('handles key collision with last-win (POJO)', () => {
    expect(merge({ a: 1 })({ a: 2 })).toEqual({ a: 2 })
  })

  it('merges arrays on collision (POJO)', () => {
    expect(merge({ list: [1, 2] })({ list: [3, 4] }))
      .toEqual({ list: [1, 2, 3, 4] })
  })

  it('merges sets on collision (POJO)', () => {
    expect(merge({ list: new Set([1, 2]) })({ list: new Set([3, 4]) }))
      .toEqual({ list: new Set([1, 2, 3, 4]) })
  })

  it('deep merges nested objects (POJO)', () => {
    const initial = { a: { x: 1 } }
    expect(merge(initial)({ a: { y: 2 } }))
      .toEqual({ a: { x: 1, y: 2 } })
  })

  it('complex deep merge with multiple data types (POJO)', () => {
    const initial = {
      user: {
        name: 'John',
        age: 30,
        hobbies: ['reading'],
        address: { city: 'New York' },
        tags: new Set(['developer'])
      }
    }

    const update = {
      user: {
        age: 31,
        hobbies: ['coding'],
        address: { country: 'USA' },
        tags: new Set(['architect'])
      }
    }

    expect(merge(initial)(update)).toEqual({
      user: {
        name: 'John',
        age: 31,
        hobbies: ['reading', 'coding'],
        address: { city: 'New York', country: 'USA' },
        tags: new Set(['developer', 'architect'])
      }
    })
  })

  // Map ↔ Map
  it('merges simple Map to Map', () => {
    const a = new Map([['a', 1]])
    const b = new Map([['b', 2]])
    expect(merge(a)(b)).toEqual(new Map([['a', 1], ['b', 2]]))
  })

  it('handles key collision with last-win (Map)', () => {
    const a = new Map([['a', 1]])
    const b = new Map([['a', 2]])
    expect(merge(a)(b)).toEqual(new Map([['a', 2]]))
  })

  it('merges arrays on collision (Map)', () => {
    const a = new Map([['list', [1, 2]]])
    const b = new Map([['list', [3, 4]]])
    expect(merge(a)(b)).toEqual(new Map([['list', [1, 2, 3, 4]]]))
  })

  it('merges sets on collision (Map)', () => {
    const a = new Map([['set', new Set([1, 2])]])
    const b = new Map([['set', new Set([3, 4])]])
    expect(merge(a)(b)).toEqual(new Map([['set', new Set([1, 2, 3, 4])]]))
  })

  it('deep merges nested Maps/objects', () => {
    const a = new Map([['a', new Map([['x', 1]])]])
    const b = new Map([['a', new Map([['y', 2]])]])
    expect(merge(a)(b)).toEqual(new Map([['a', new Map([['x', 1], ['y', 2]])]]))
  })

  // POJO ↔ Map and Map ↔ POJO
  it('merges POJO source with Map update', () => {
    const src = { a: 1 }
    const upd = new Map([['b', 2]])
    expect(merge(src)(upd)).toEqual({ a: 1, b: 2 })
  })

  it('merges Map source with POJO update', () => {
    const src = new Map([['a', 1]])
    const upd = { b: 2 }
    expect(merge(src)(upd)).toEqual(new Map([['a', 1], ['b', 2]]))
  })

  it('handles collisions across types (POJO vs Map) with last-win', () => {
    const src = { a: 1, list: [1] }
    const upd = new Map([['a', 2], ['list', [2]]])
    expect(merge(src)(upd)).toEqual({ a: 2, list: [1, 2] })
  })

  // Edge cases
  it('returns copy, not same reference for POJO', () => {
    const src = { a: 1 }
    const res = merge(src)({ b: 2 })
    expect(res).not.toBe(src)
  })

  it('returns copy, not same reference for Map', () => {
    const src = new Map([['a', 1]])
    const res = merge(src)(new Map([['b', 2]]))
    expect(res).not.toBe(src)
  })

  it('non-conflicting different types are set as-is', () => {
    const src = { a: 1 }
    const upd = { b: new Set([1]) }
    expect(merge(src)(upd)).toEqual({ a: 1, b: new Set([1]) })
  })
})
