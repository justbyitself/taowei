# isInteger

Checks whether a value is a integer.

## Signature
(value: Any) -> Boolean

## Behavior
- Exactly mirrors the semantics of built-in Number.isInteger.

## Examples
```javascript
import { isInteger } from 'taowei'

isInteger(0)                      // true
isInteger(42)                     // true
isInteger(-7)                     // true
isInteger(0.1)                    // false
isInteger(Number.NaN)             // false
isInteger(Infinity)               // false
isInteger('5')                    // false
isInteger(new Number(5))          // false
```
