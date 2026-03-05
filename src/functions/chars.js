import toReusable from '#internal/toReusable.js'

export default s => toReusable(function* () {
  for (const character of s) {
    yield character
  }
})
