# and

Combines two predicates into a new predicate that returns true only if both original predicates are true.

## Signature
(A -> Boolean) -> (A -> Boolean) -> (A -> Boolean)

## Examples
```javascript
import { and } from 'taowei'

const isPositive = x => x > 0
const isEven = x => x % 2 === 0
and(isPositive)(isEven)(4)     // true
and(isPositive)(isEven)(-2)   // false
and(isPositive)(isEven)(3)    // false

```
