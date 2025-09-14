import zip from './zip.js'
import fold from './fold.js'
import map from './map.js'
import flatten from './flatten.js'
import toArray from './toArray.js'
import compose from './compose.js'

export default iterable => map(compose(toArray)(flatten()))(fold(zip)(iterable))