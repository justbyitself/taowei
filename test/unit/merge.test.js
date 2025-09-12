import { describe, it, expect } from 'vitest'
import { merge } from '../../src/index.js'

describe('merge', () => {
  it('should merge two maps with unique keys', () => {
    const map1 = new Map([['a', 1], ['b', 2]])
    const map2 = new Map([['c', 3], ['d', 4]])
    const result = merge(map1)(map2)
    expect(result).toEqual(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]))
  })

  it('should override values for existing keys', () => {
    const map1 = new Map([['a', 1], ['b', 2]])
    const map2 = new Map([['b', 3], ['c', 4]])
    const result = merge(map1)(map2)
    expect(result).toEqual(new Map([['a', 1], ['b', 3], ['c', 4]]))
  })

  it('should work with empty maps', () => {
    const map1 = new Map()
    const map2 = new Map([['a', 1], ['b', 2]])
    const result = merge(map1)(map2)
    expect(result).toEqual(new Map([['a', 1], ['b', 2]]))
  })

  it('should handle merging with an empty second map', () => {
    const map1 = new Map([['a', 1], ['b', 2]])
    const map2 = new Map()
    const result = merge(map1)(map2)
    expect(result).toEqual(new Map([['a', 1], ['b', 2]]))
  })

  it('should work with maps containing different value types', () => {
    const map1 = new Map([['a', 1], ['b', 'string'], ['c', { key: 'value' }]])
    const map2 = new Map([['d', [1, 2, 3]], ['e', null]])
    const result = merge(map1)(map2)
    expect(result).toEqual(new Map([
      ['a', 1], 
      ['b', 'string'], 
      ['c', { key: 'value' }], 
      ['d', [1, 2, 3]], 
      ['e', null]
    ]))
  })
})
