# foldWithInit

Reduces an iterable to a single value using an initial value and a folding function.

## Signature
(A -> B -> A) -> A -> Iterable B -> A

## Examples
```javascript
import { foldWithInit } from 'taowei'

const sum = foldWithInit((acc)(x) => acc + x)(0)
sum([1, 2, 3, 4])      // 10

const concat = foldWithInit((acc)(x) => acc + x)('')
concat(['hello', ' ', 'world'])  // 'hello world'

const max = foldWithInit((acc)(x) => x > acc ? x : acc)(-Infinity)
max([1, 5, 3, 9, 2])   // 9

```
