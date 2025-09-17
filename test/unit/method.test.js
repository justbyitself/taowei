import { describe, it, expect } from 'vitest'
import method from '../../src/method.js'

describe('method', () => {
  it('extracts a method with its context', () => {
    const obj = {
      value: 42,
      getValue() { return this.value }
    }
    
    const boundGetValue = method('getValue')(obj)
    expect(boundGetValue()).toBe(42)
  })

  it('works with different types of methods', () => {
    const map = new Map([['a', 1], ['b', 2]])
    
    const boundKeys = method('keys')(map)
    const keys = [...boundKeys()]
    expect(keys).toEqual(['a', 'b'])
  })

  it('preserves method context across calls', () => {
    const obj = {
      count: 0,
      increment() { this.count++ },
      getCount() { return this.count }
    }
    
    const boundIncrement = method('increment')(obj)
    const boundGetCount = method('getCount')(obj)
    
    boundIncrement()
    expect(boundGetCount()).toBe(1)
  })
})
