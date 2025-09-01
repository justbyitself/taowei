export default f => initial => (function* () {
  let value = initial
  while (true) {
    yield value
    value = f(value)
  }
})()
