import toMap from '#internal/toMap.js'
import toFunction from '#internal/toFunction.js'
import toPredicate from '#internal/toPredicate.js'

export default predicates => {
  const map = toMap(predicates)

  return value => {
    for (const [predicate, transformer] of map) {
      if (toPredicate(predicate)(value)) return toFunction(transformer)(value)
    }
  }
}
