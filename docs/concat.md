# concat

Concatenates values and iterable/iterator sources into a single iterable.

## Signature
`(...Any) -> Iterable`

## Behavior
- Concatenates values and sources into a single lazy iterable.
- Treats strings as single values (not iterated).
- Consumes next-only iterators via an internal adapter that calls `return()` on cleanup when available.
- See [Input normalization](/docs/README.md#input-normalization) for more information.

## Examples
```javascript
import { concat } from 'taowei'

// plain values
concat(1, 2, 3) // yields: 1, 2, 3

// iterable (array)
concat([1, 2], 3) // yields: 1, 2, 3

// string treated as value
concat('hello', 'world') // yields: 'hello', 'world'

// generator (iterable + iterator)
function* gen(){ yield 1; yield 2 }
concat(gen(), 3) // yields: 1, 2, 3

// plain iterator (next-only)
const it = (() => {
  let i = 0
  return { next() { return i < 2 ? { value: ++i, done: false } : { done: true } } }
})()
concat(0, it, 3) // yields: 0, 1, 2, 3
```
