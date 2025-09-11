# toIterator

Convert different types of iterable objects into an iterator.

## Signature
Iterable -> Iterator

## Behavior
- Throws an error if the object is not iterable

## Examples
```javascript
import { toIterator } from 'taowei'

// Array
toIterator([1, 2, 3])      // iterator that yields: 1, 2, 3

// String
toIterator('abc')          // iterator that yields: 'a', 'b', 'c'

// Set
toIterator(new Set([1, 2]))  // iterator that yields: 1, 2

// Map
toIterator(new Map([['a', 1]]))  // iterator that yields: ['a', 1]

// Generator
function* gen() { yield 1; yield 2 }
toIterator(gen())          // returns the same iterator
```