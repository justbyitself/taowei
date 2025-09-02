import not from './not.js'
import filter from './filter.js'

export default predicate => filter(not(predicate))
