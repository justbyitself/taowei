import toReusable from './toReusable.js'

export default f => toReusable(function* () {
  while (true) {
    yield f()
  }
})
