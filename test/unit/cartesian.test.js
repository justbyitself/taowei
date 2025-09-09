import { describe, it, expect } from 'vitest'
import cartesian from '../../src/cartesian.js'

describe('cartesian function (curried)', () => {
  it('should produce pairs for two iterables', () => {
    const result = cartesian([1,2])([10,20])
    expect([...result]).toEqual([[1,10], [1,20], [2,10], [2,20]])
  })

  it('should handle empty right iterable', () => {
    const result = cartesian([1,2])([]) 
    expect([...result]).toEqual([])
  })

  it('should handle single-element left iterable (right is a fresh generator)', () => {
    const genRange = function* (n) { for (let i = 0; i < n; i++) yield i }
    const result = cartesian(['a'])(genRange(3))
    expect([...result]).toEqual([['a',0], ['a',1], ['a',2]])
  })

  it('should be lazy with an infinite right iterable (take prefix)', () => {
    function* inf(){ let i = 0; while(true) yield i++ }
    const it = cartesian(['x','y'])(inf()) // curried
    const out = []
    const iter = it[Symbol.iterator] ? it[Symbol.iterator]() : it // support generator factory or iterable
    for (let i = 0; i < 6; i++) {
      const r = iter.next()
      if (r.done) break
      out.push(r.value)
    }
    expect(out).toEqual([['x',0],['x',1],['x',2],['x',3],['x',4],['x',5]])
  })
})
