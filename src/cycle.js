import toReusable from './toReusable.js'

export default iterable => toReusable(function* () {
  const array = Array.from(iterable)
  while (true) {
    for (const i of array) {
      yield i
    }
  }
})