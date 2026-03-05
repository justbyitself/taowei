import every from '#internal/every.js'
import not from '#internal/not.js'

export default predicate => iterable => every(not(predicate))(iterable)
