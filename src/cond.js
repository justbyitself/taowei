import toMap from './toMap.js'
import isFunction from './isFunction.js'
import isEqualTo from './isEqualTo.js'

export default (...predicates) => v => {
  const map = toMap(...predicates)
  const toFunction = v => isFunction(v) ? v : isEqualTo(v)

  for (const [key, value] of map) {
    const predicate = toFunction(key)
    if (predicate(v)) {
      return value
    }
  }
}