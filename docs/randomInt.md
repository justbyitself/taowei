# randomInt

Returns a function that, given a max value, produces a random integer between the originally supplied min and that max (inclusive) using Math.floor.

## Signature
(min: Integer) -> (max: Integer) -> Integer

## Behavior
- Both min and max must be integers; otherwise a TypeError is thrown.
- If min > max a RangeError is thrown.

## Examples
```javascript
import { randomInt } from 'taowei'

randomInt(5)(10)  // integer in [5, 10]
randomInt(0)(0)     // always 0
randomInt(-2)(2)    // integer in [-2, 2]
```