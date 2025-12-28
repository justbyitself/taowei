# toPojo

Convert different types of key-value collections into a plain JavaScript object (POJO).

## Signature
Map | Array<[key, value]> | Object -> Object

## Behavior
- Converts a Map or an array of entries (key-value pairs) into a plain object.
- Returns the same object if the input is already a plain object.
- Does not modify the original input; returns a new object when converting.
- For other input types, returns the input as is.

## Examples
```javascript
import { toPojo } from 'taowei'

// Map to POJO
const map = new Map([['a', 1], ['b', 2]])
console.log(toPojo(map)) // { a: 1, b: 2 }

// Array of entries to POJO
const entries = [['x', 10], ['y', 20]]
console.log(toPojo(entries)) // { x: 10, y: 20 }

// Plain object input returns the same object
const obj = { foo: 'bar' }
console.log(toPojo(obj)) // { foo: 'bar' }
```