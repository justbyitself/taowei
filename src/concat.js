import isIterable from './isIterable.js'
import isIterator from './isIterator.js'
import isString from './isString.js'

function iteratorToIterable(it) {
  return (function* () {
    try {
      let res = it.next()
      while (!res.done) {
        yield res.value
        res = it.next()
      }
    } finally {
      if (typeof it.return === 'function') {
        try { it.return() } catch (_) {}
      }
    }
  })()
}

export default (...args) => (function* () {
  for (const arg of args) {
    if (isString(arg)) {
      yield arg
    } else if (isIterable(arg)) {
      yield* arg
    } else if (isIterator(arg)) {
      yield* iteratorToIterable(arg)
    } else {
      yield arg
    }
  }
})()
