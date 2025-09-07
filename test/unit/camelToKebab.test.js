import { describe, it, expect } from 'vitest'
import camelToKebab from '../../src/camelToKebab.js'

describe('camelToKebab', () => {
  it('converts simple camelCase to kebab-case', () => {
    expect(camelToKebab('helloWorld')).toBe('hello-world')
  })

  it('handles multiple uppercase letters', () => {
    expect(camelToKebab('helloWorldTest')).toBe('hello-world-test')
  })

  it('works with single lowercase word', () => {
    expect(camelToKebab('hello')).toBe('hello')
  })

  it('handles empty string', () => {
    expect(camelToKebab('')).toBe('')
  })

  it('handles string starting with uppercase', () => {
    expect(camelToKebab('HelloWorld')).toBe('-hello-world')
  })

  it('handles consecutive uppercase letters', () => {
    expect(camelToKebab('HTTPRequest')).toBe('-h-t-t-p-request')
  })
})
