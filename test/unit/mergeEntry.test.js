import { describe, it, expect } from 'vitest'
import mergeEntry from '../../src/mergeEntry.js'

describe('mergeEntry', () => {
  it('merges simple entry to object', () => {
    expect(mergeEntry({a: 1})(['b', 2])).toEqual({a: 1, b: 2})
  })

  it('handles entry collision with last-win', () => {
    expect(mergeEntry({a: 1})(['a', 2])).toEqual({a: 2})
  })

  it('merges arrays on collision', () => {
    expect(mergeEntry({list: [1, 2]})(['list', [3, 4]]))
      .toEqual({list: [1, 2, 3, 4]})
  })

it('merges sets on collision', () => {
  expect(mergeEntry({list: new Set([1, 2])})(['list', new Set([3, 4])]))
    .toEqual({list: new Set([1, 2, 3, 4])})
})


  it('deep merges nested objects', () => {
    const initial = { a: { x: 1 } }
    expect(mergeEntry(initial)(['a', { y: 2 }]))
      .toEqual({ a: { x: 1, y: 2 } })
  })

  it('complex deep merge with multiple data types', () => {
    const initial = {
      user: {
        name: 'John',
        age: 30,
        hobbies: ['reading'],
        address: {
          city: 'New York'
        },
        tags: new Set(['developer'])
      }
    }

    const update = [
      'user', 
      {
        age: 31,
        hobbies: ['coding'],
        address: {
          country: 'USA'
        },
        tags: new Set(['architect'])
      }
    ]

    expect(mergeEntry(initial)(update)).toEqual({
      user: {
        name: 'John',
        age: 31,
        hobbies: ['reading', 'coding'],
        address: {
          city: 'New York',
          country: 'USA'
        },
        tags: new Set(['developer', 'architect'])
      }
    })
  })  
})
