import zip from '#internal/zip.js'
import fold from '#internal/fold.js'
import map from '#internal/map.js'
import flatten from '#internal/flatten.js'
import toArray from '#internal/toArray.js'
import compose from '#internal/compose.js'

export default iterable => map(compose(toArray)(flatten()))(fold(zip)(iterable))
