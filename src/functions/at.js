import first from '#internal/first.js'
import drop from '#internal/drop.js'

export default n => iterable => first(drop(n)(iterable))
