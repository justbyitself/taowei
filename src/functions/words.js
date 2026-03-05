import toReusable from '#internal/toReusable.js'

export default str => toReusable(function* () {
  yield* str.trim().split(/\s+/).filter(Boolean)
})
