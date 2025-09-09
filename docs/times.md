# times

Repeats a function a specified number of times.

## Signature
Number -> (() -> Any) -> Iterable

## Behavior
- Executes the given function a specified number of times
- Returns an iterable with the results of each function call

## Examples
```javascript
import { times } from 'taowei'

// Log 'Hello' 3 times
times(3)(() => console.log('Hello'))

// Generate 5 random numbers
times(5)(() => Math.random())

// Increment a counter
let counter = 0
times(4)(() => ++counter)
```