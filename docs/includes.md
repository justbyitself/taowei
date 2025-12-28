# includes

Check if a value is included in an array.

## Signature
Array -> Value -> Boolean

## Behavior
- Returns true if the value is found in the array, false otherwise.

## Examples
```javascript
import includes from 'taowei'

const hasCat = includes(['cat', 'dog', 'bat'])

console.log(hasCat('cat')) // true
console.log(hasCat('fox')) // false
```