import isIterable from './isIterable'
import isString from './isString'

export default (...args) => (function* () {
  for (const arg of args) {
    if (isString(arg)) {
      // By default, we don't iterate over characters
      yield arg
    } else if (isIterable(arg)) {
      yield* arg
    } else {
      yield arg
    }
  }
})()

