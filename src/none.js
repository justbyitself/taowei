import every from './every'
import not from './not'

export default predicate => (...args) => every(not(predicate))(...args)

