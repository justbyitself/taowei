import toReusable from './toReusable.js'

export default x => toReusable(function* () {
  yield x
})
