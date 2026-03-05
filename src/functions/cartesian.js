import toReusable from '#internal/toReusable.js'

export default a => b => toReusable(function* () {
  for (const va of a) {
    for (const vb of b) {
      yield [va, vb]
    }
  }
})
