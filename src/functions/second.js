import first from '#internal/first.js'
import drop from '#internal/drop.js'

export default iterable => first(drop(1)(iterable))
