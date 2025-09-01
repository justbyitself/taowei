import { describe, it, expect } from 'vitest'
import trim from '../../src/trim.js'

describe('trim', () => {
  it('trims whitespace from both ends of a string', () => {
    expect(trim('  hi  ')).toBe('hi')
  })

  it('returns empty string when input is only whitespace', () => {
    expect(trim('   ')).toBe('')
  })
})
