# id

Returns its argument unchanged (identity function).

## Signature
(x: Any) -> Any

## Examples
```javascript
import { id } from 'taowei'

id(5)                 // 5
id('hello')           // 'hello'
const obj = {}
id(obj) === obj       // true
id(null)              // null
id(undefined)         // undefined
id(() => 1)()         // 1
```