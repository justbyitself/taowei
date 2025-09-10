# between

Wraps a string between two other strings.

## Signature
String -> String -> String -> String

## Examples
```javascript
import { between } from 'taowei'

between('<')('>')('hello')     // '<hello>'
between('(')(')')('test')      // '(test)'
between('/')('/')(12)         // '/12/'
between('')('')('plain')     // 'plain'

```
