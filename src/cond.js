import toMap from './toMap'
import isFunction from './isFunction'
import isEqualTo from './isEqualTo'

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