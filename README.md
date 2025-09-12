<div align="center">
  <a href="https://github.com/justbyitself/taowei">
    <img src="https://raw.githubusercontent.com/justbyitself/taowei/main/logo.svg" alt="Taowei logo" width="300"/>
  </a>
  
  **🚧 Work In Progress (WIP) 🚧**
  [![npm version](https://img.shields.io/npm/v/taowei.svg)](https://www.npmjs.com/package/taowei) ![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
</div>

## Introduction

Taowei is a functional, iterable-focused JavaScript library.

This is a curiosity-driven project that provides a set of utilities that make working with iterables and functional programming more intuitive and elegant.

## Goals
- Keep simple and fun
- Built for lazy reusable iterables
- Readable code
- Curried, functional-style composable, with a love for point-free programming
- Provide enough functions to cover most common programmer needs, allowing easy composition.
- Taowei should be fun to develop (with concise and clear implementations) and fun to use
- 100% test coverage
- Comprehensive documentation

## Non-goals

- Performance optimizations
- TypeScript support
- Async support

## Usage

### Node.js
Install via npm:
```bash
npm install taowei
```
And use it:
```javascript
import { isEven } from 'taowei'

console.log(isEven(5)) // false
```

### Browser
Use directly via CDN:
```javascript
import { isEven } from 'https://unpkg.com/taowei'

console.log(isEven(5)) // false
```

## Examples

### Project Euler #1
[![Open in CodePen](https://img.shields.io/badge/Open%20in-CodePen-black?logo=codepen)](https://codepen.io/justbyitself/pen/WbQBBEZ?editors=0012)

Find the sum of all multiples of 3 or 5 below 1000.
https://projecteuler.net/problem=1

```js
import { sum, filter, or, isDivisibleBy as isMultipleOf, enumFromTo } from 'taowei'

const nums = enumFromTo(1)(999)
const predicate = or(isMultipleOf(3))(isMultipleOf(5))
const filtered = filter(predicate)(nums)

console.log(sum(filtered)) // 233168
```

### Project Euler #2
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
https://projecteuler.net/problem=2

```js
import { withPrevious, takeWhile, isLesserThanOrEqualTo as lte, 
  repeat, sum, filter, flat, isEven } from 'taowei'

const fibonacci = withPrevious(2)(flat([1, 2, repeat(sum)]))
const evenFibonacci = filter(isEven)(fibonacci)
const firstEvenFibonacci = takeWhile(lte(4_000_000))(evenFibonacci)

console.log(sum(firstEvenFibonacci)) // 4613
```

For more examples, check out the [integration tests](https://github.com/justbyitself/taowei/tree/main/test/integration).

## Testing

To run tests, use:

```bash
npm run test
```