# foldWithInit

Reduces multiple sources to a single value using a curried reducer function with an explicit initial value.

## Signature
(Any -> Any -> Any) -> Any -> (...Any) -> Any

## Behavior
- Applies the reducer function across all inputs
- Uses the provided initial value as the first accumulator
- See [Input normalization](/docs/README.md#input-normalization) for more information.

## Examples
```javascript
import { foldWithInit } from 'taowei'

// basic reduction with initial value
foldWithInit((acc, x) => acc + x)('start')([], 1, [2], 'mid', [3])  // returns: 'start12mid3'

// works with different types
foldWithInit((acc, x) => acc + String(x))('start')([1, 2], 3, [4])  // returns: 'start123mid4'

// custom iterables
function* gen() { yield 10; yield 20 }
foldWithInit((acc, x) => Math.max(acc, x))(0)(gen(), 5)  // returns: 20
```