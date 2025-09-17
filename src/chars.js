import toReusable from './toReusable.js'

export default s => toReusable(function* () {
  for (const character of s) {
    yield character
  }
})
