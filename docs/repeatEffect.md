# repeatEffect

Creates an infinite iterator by repeatedly calling a function with side effects.

## Signature
(() -> Any) -> Iterable

## Behavior
- Executes the given function to generate an initial value.
- Uses the same function to generate subsequent values.
- Creates an infinite iterable with the results of repeatedly calling a function with side effects.

## Examples
```javascript
import { repeatEffect } from 'taowei'

// Generate random numbers
const randomNumbers = repeatEffect(() => Math.random())

// Increment a counter
let counter = 0
const incrementing = repeatEffect(() => ++counter)

// Simulate API calls or other side effects
const fetchData = repeatEffect(() => fetch('/api/data'))
```
