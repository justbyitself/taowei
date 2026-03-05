import toReusable from '#internal/toReusable.js'

export default x => toReusable(function* () {
  yield x
})
