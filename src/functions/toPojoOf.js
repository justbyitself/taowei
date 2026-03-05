import foldWithInit from '#internal/foldWithInit.js'
import merge from '#internal/merge.js'
import map from '#internal/map.js'
import toPojo from '#internal/toPojo.js'

export default iterable => foldWithInit(merge)({})(map(toPojo)(iterable))