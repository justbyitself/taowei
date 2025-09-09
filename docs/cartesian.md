## cartesian

Generates the Cartesian product of two iterables.

## Signature
Iterable -> Iterable -> Iterable

## Behavior
- Returns a lazy iterable.  
- For each element from the left iterable, iterates all elements from the right in order.  
- Accepts replayable iterables.

## Examples
```javascript
import { cartesian } from 'taowei'

cartesian([1,2])([10,20]) // yields [1,10], [1,20], [2,10], [2,20]
```