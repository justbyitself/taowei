import every from './every.js'
import not from './not.js'

export default predicate => iterable => every(not(predicate))(iterable)

