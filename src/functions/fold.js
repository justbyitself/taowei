import foldWithInit from '#internal/foldWithInit.js'
import first from '#internal/first.js'
import drop from '#internal/drop.js'

export default fn => iterable => foldWithInit(fn)(first(iterable))(drop(1)(iterable))
