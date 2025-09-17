import toReusable from './toReusable.js'

export default fn => iterable => toReusable(function* () {
  for (const value of iterable) {
    yield fn(value)
  }
})