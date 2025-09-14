import isIterably from './isIterably.js'

const flatten = (depth = Infinity) => iterable => function* () {
  for (const item of iterable) {
    if (depth > 0 && isIterably(item)) {
      yield* flatten(depth - 1)(item)
    } else {
      yield item
    }
  }
}()

export default flatten
