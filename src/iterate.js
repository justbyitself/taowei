import toReusable from './toReusable.js'

export default f => initial => toReusable(function* () {
  let value = initial
  while (true) {
    yield value
    value = f(value)
  }
})
