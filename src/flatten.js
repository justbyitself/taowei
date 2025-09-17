import isIterably from './isIterably.js'
import toReusable from './toReusable.js'

const flatten = (depth = Infinity) => iterable => toReusable(function* () {
  for (const item of iterable) {
    if (depth > 0 && isIterably(item)) {
      yield* flatten(depth - 1)(item)
    } else {
      yield item
    }
  }
})

export default flatten
