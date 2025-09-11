import isString from './isString.js'
import isIterable from './isIterable.js'

const flat = depth => iterable => function* () {
  for (const item of iterable) {
    if (depth > 0 && isIterable(item) && !isString(item)) {
      yield* flat(depth - 1)(item)
    } else {
      yield item
    }
  }
}()

export default flat