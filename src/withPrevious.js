import toFunction from './toFunction.js'

export default (n = Infinity) => iterable => {
  const previous = []

  return (function* () {
    for (const item of iterable) {
      const f = toFunction(item)
      const result = f(previous)

      previous.push(result)
      if (previous.length > n) {
        previous.shift()
      }

      yield result
    }
  })()
}
