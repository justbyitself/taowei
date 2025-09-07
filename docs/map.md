# map

Applies a mapping function to each item from one or more sources and returns a lazy iterable of results.

## Signature
(fn: Any -> Any) -> (...sources: Any) -> Iterable

## Behavior
See docs/README.md#normalization

## Examples
```javascript
import { map } from 'taowei'

// plain values
map(x => x * 2)(1, 2, 3)        // yields: 2, 4, 6

// iterable (array)
map(x => x + 1)([1, 2, 3])      // yields: 2, 3, 4

// string treated as single value
map(s => s.toUpperCase())('hello', 'world') // yields: 'HELLO', 'WORLD'

// generator (iterable + iterator)
function* gen(){ yield 1; yield 2 }
map(x => x * 10)(gen(), 3)      // yields: 10, 20, 30

// plain iterator (next-only) as source
const it = (() => {
  let i = 0
  return { next() { return i < 2 ? { value: ++i, done: false } : { done: true } } }
})()
map(x => x + 0.5)(0, it, 3)     // yields: 0.5, 1.5, 2.5
```