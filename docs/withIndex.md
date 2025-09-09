## withIndex

Adds an index to each element of an iterable.

## Signature
Iterable -> Iterable

## Behavior
- Generates pairs of `[index, value]` starting from index 0

## Examples
```javascript
import { withIndex } from 'taowei'

withIndex(['a', 'b', 'c'])  // yields [0, 'a'], [1, 'b'], [2, 'c']

withIndex(new Set([10, 20, 30]))  // yields [0, 10], [1, 20], [2, 30]

// Generator
function* nums() {
  yield 1
  yield 2
  yield 3
}
withIndex(nums()) // yields [0, 1], [1, 2], [2, 3]
```