import toReusable from '#internal/toReusable.js'

export default fn => iterable => toReusable(function* () {
  for (const value of iterable) {
    yield fn(value)
  }
})
