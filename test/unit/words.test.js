import { describe, it, expect } from 'vitest'
import { words } from '../../src'

const tests = [
  { input: "Hello, this is an example of words", expected: ["Hello,", "this", "is", "an", "example", "of", "words"] },
  { input: "   Multiple   spaces   ", expected: ["Multiple", "spaces"] },
  { input: "", expected: [] },
  { input: "     ", expected: [] },
  { input: "Hey! How are you?", expected: ["Hey!", "How", "are", "you?"] },
]

describe('words function', () => {
  tests.forEach(({ input, expected }, index) => {
    it(`Test ${index + 1}`, () => {
      const result = [...words(input)]
      expect(result).toEqual(expected)
    })
  })
})
