import toReusable from './toReusable.js'

export default predicate => iterable => toReusable(function* () {
  for (const value of iterable) {
    if (predicate(value)) {
      yield value
    }
  }
})
