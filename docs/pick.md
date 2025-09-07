# pick

Chooses one of the provided values at random.

## Signature
(...Any) -> Any

## Behavior
- See [Input normalization](/docs/README.md#input-normalization) for more information.

## Examples
```javascript
import { pick } from 'taowei'

pick(1, 2, 3)          // 1 or 2 or 3
pick('a')              // 'a'
pick()                 // undefined
```