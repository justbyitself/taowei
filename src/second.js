import first from './first.js'
import drop from './drop.js'

export default iterable => first(drop(1)(iterable))
