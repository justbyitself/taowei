import not from './not'
import filter from './filter'

export default predicate => filter(not(predicate))
