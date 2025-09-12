import { describe, it, expect } from 'vitest'
import { toFunction } from '../../src/index.js'

describe('toFunction', () => {
  it('should return the input if it is a function', () => {
    const func = () => 'I am a function'
    expect(toFunction(func)).toBe(func)
  })

  it('should return a function that returns the input if it is not a function', () => {
    const value = 42
    const result = toFunction(value)
    expect(result).toBeInstanceOf(Function)
    expect(result()).toBe(42)

    const str = 'Hello'
    const strResult = toFunction(str)
    expect(strResult).toBeInstanceOf(Function)
    expect(strResult()).toBe('Hello')

    const obj = { key: 'value' }
    const objResult = toFunction(obj)
    expect(objResult).toBeInstanceOf(Function)
    expect(objResult()).toEqual(obj)
  })
})
