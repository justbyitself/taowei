import every from './every.js'
import not from './not.js'

export default predicate => (...args) => every(not(predicate))(...args)

