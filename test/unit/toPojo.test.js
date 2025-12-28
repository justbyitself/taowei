import { describe, it, expect } from 'vitest'
import { toPojo } from '../../src/index.js'

describe('toPojo', () => {
  it('should convert a Map to a POJO', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])
    const obj = toPojo(map)
    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should convert an array of entries to a POJO', () => {
    const arr = [['a', 1], ['b', 2], ['c', 3]]
    const obj = toPojo(arr)
    expect(obj).toEqual({ a: 1, b: 2, c: 3 })
  })

  it('should return the same POJO if input is already a POJO', () => {
    const objInput = { a: 1, b: 2, c: 3 }
    const obj = toPojo(objInput)
    expect(obj).toEqual(objInput)
  })

  it('should return an empty object for empty Map or array', () => {
    expect(toPojo(new Map())).toEqual({})
    expect(toPojo([])).toEqual({})
  })
})
