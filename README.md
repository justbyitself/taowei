<div align="center">
  <a href="https://github.com/justbyitself/taowei">
    <img src="https://raw.githubusercontent.com/justbyitself/taowei/main/logo.svg" alt="Taowei logo" width="300"/>
  </a>
  
  **🚧 Work In Progress (WIP) 🚧**
  
  ![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
</div>

## Introduction
Taowei is a functional, iterable-focused JavaScript library.

This library provides a set of utilities that make working with iterables and functional programming more intuitive and elegant.

## Features

- Extensive (+100) functional programming utilities
- Comprehensive iterable manipulation functions
- Predicate functions for type checking and comparison
- Currying and function composition support
- Sequence generation tools

## Installation

Install Taowei using npm:

```bash
npm install taowei
```

## Example

Let's get the first items of Fibonacci sequence:

```js
import { withPrevious, take, repeat, sum } from 'taowei'

const fibonacci = withPrevious(2)(0, 1, repeat(sum))
console.log(...take(10)(fibonacci))
```

For more advanced usage and examples, check out the [integration tests](https://github.com/justbyitself/taowei/tree/main/test/integration).


## Testing

To run tests, use:

```bash
npm run test
```