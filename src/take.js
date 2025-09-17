import toReusable from './toReusable.js'

export default limit => iterable => toReusable(function* () {
  if (limit === 0) return

  let count = 0
  for (const value of iterable) {
    if (count >= limit) break
    yield value
    count++
  }
})
