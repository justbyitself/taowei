## zip

Combines elements from two or more sources into tuples (arrays), returning a lazy iterable.

## Signature
(...Iterables) -> Iterable

## Behavior
- The returning lazy iterable stops when the shortest source is exhausted.
- Iterators are allowed too.
  
## Examples
```javascript
import { zip } from 'taowei'

// arrays of equal length
zip([1,2,3], ['a','b','c']) // yields [1,'a'], [2,'b'], [3,'c']

// shorter input
zip([1,2,3], ['a','b']) // yields [1,'a'], [2,'b']
```