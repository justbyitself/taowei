# map

Applies a mapping function to each item from source iterable and returns a lazy iterable of results.

## Signature
(A -> B) -> Iterable A -> Iterable B

## Examples
```javascript
import { map } from 'taowei'

// array
map(x => x + 1)([1, 2, 3])      // yields: 2, 3, 4

// generator
function* gen(){ yield 1; yield 2 }
map(x => x * 10)(gen())      // yields: 10, 20

```