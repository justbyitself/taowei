import toReusable from '#internal/toReusable.js'

export default f => toReusable(function* () {
  while (true) {
    yield f()
  }
})
