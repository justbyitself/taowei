import filter from './filter.js'
import first from './first.js'

export default predicate => iterable => first(filter(predicate)(iterable))
