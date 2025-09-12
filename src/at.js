import first from './first.js'
import drop from './drop.js'

export default n => iterable => first(drop(n)(iterable)) 