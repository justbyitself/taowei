import not from '#internal/not.js'
import filter from '#internal/filter.js'

export default predicate => filter(not(predicate))
