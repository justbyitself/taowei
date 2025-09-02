import toFunction from './toFunction.js'
import concat from './concat.js'

export default (n = Infinity) => (...args) => {
  const iterator = Iterator.from(concat(...args))
  const previous = []

  return (function* () {
    for (const item of iterator) {
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
