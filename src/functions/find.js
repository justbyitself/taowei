import filter from '#internal/filter.js'
import first from '#internal/first.js'

export default predicate => iterable => first(filter(predicate)(iterable))
