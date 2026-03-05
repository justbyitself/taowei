import toFunction from '#internal/toFunction.js'
import toReusable from '#internal/toReusable.js'

export default (n = Infinity) => iterable => {
  const previous = []

  return (toReusable(function* () {
    for (const item of iterable) {
      const f = toFunction(item)
      const result = f(previous)

      previous.push(result)
      if (previous.length > n) {
        previous.shift()
      }

      yield result
    }
  }))
}
