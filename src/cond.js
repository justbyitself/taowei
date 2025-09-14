import toMap from './toMap.js'
import toFunction from './toFunction.js'
import toPredicate from './toPredicate.js'

export default predicates => {
  const map = toMap(predicates)

  return value => {
    for (const [predicate, transformer] of map) {
      if (toPredicate(predicate)(value)) return toFunction(transformer)(value)
    }
  }
}
