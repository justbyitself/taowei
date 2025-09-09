import { describe, it, expect } from 'vitest'
import zip from '../../src/zip.js'

describe('zip function', () => {
  it('should zip iterables of the same length', () => {
    const result = zip([1,2,3], ['a','b','c'])
    expect([...result]).toEqual([[1,'a'], [2,'b'], [3,'c']])
  })

  it('should limit to the shortest iterable', () => {
    const result = zip([1,2,3], ['a','b'])
    expect([...result]).toEqual([[1,'a'], [2,'b']])
  })
})
