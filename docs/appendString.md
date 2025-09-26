# appendString

Adds a string to the end of another string.

## Signature
String -> String -> String

## Examples
```javascript
import { append } from 'taowei'

appendString('hello')('!')     // 'hello!'
appendString('hello')(' world')  // 'hello world'
appendString('test')('')       // 'test'
```
