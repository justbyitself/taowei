# fold

Reduces multiple sources to a single value using a curried reducer function without an initial value.

## Signature
(Any -> Any -> Any) -> (...Any) -> Any

## Behavior
- Applies the reducer function across all inputs
- Uses the first input as the initial accumulator
- See [Input normalization](/docs/README.md#input-normalization) for more information.

## Examples
```javascript
import { fold } from 'taowei'

// basic reduction
fold((x, y) => x + y)([1, 2], 3, [4])     // returns: 10

// works with different types
fold((acc, x) => acc + String(x))([1, 2], 3, [4])  // returns: '1234'

// custom iterables
function* gen() { yield 10; yield 20 }
fold((acc, x) => Math.max(acc, x))(gen(), 5)  // returns: 20
```