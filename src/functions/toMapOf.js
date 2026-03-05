import foldWithInit from '#internal/foldWithInit.js'
import merge from '#internal/merge.js'
import map from '#internal/map.js'
import toMap from '#internal/toMap.js'

export default iterable => foldWithInit(merge)(new Map())(map(toMap)(iterable))