import foldWithInit from './foldWithInit.js'
import first from './first.js'
import drop from './drop.js'

export default fn => iterable => foldWithInit(fn)(first(iterable))(drop(1)(iterable))
