import { describe, it, expect } from 'vitest'
import { unwords } from '../../src'

describe('unwords', () => {
  it('should join an array of strings with a space', () => {
    const result = unwords('Hello', 'world!')
    expect(result).toBe('Hello world!')
  })

  it('should handle multiple strings', () => {
    const result = unwords('Hello', 'world', '!')
    expect(result).toBe('Hello world !')
  })

  it('should handle arrays of strings', () => {
    const result = unwords(['Hello', 'world!'])
    expect(result).toBe('Hello world!')
  })

  it('should handle multiple arrays of strings', () => {
    const result = unwords(['Hello'], ['world', '!'])
    expect(result).toBe('Hello world !')
  })
})
