# compose

Composes two functions, applying them from right to left.

## Signature
(B -> C) -> (A -> B) -> (A -> C)

## Examples
```javascript
import { compose } from 'taowei'

const double = x => x * 2
const increment = x => x + 1
const doubleAndIncrement = compose(increment)(double)

doubleAndIncrement(3)   // 7
doubleAndIncrement(5)   // 11

```
