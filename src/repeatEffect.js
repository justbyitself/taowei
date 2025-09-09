export default f => (function* () {
  while (true) {
    yield f()
  }
})()
