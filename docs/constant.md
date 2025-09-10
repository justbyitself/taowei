# constant

Returns a function that always returns the given value.

## Signature
Any -> (() -> Any)

## Examples
```javascript
import { constant } from 'taowei'

const five = constant(5)
five()             // 5
five()             // 5
constant(null)()      // null
```
