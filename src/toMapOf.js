import foldWithInit from './foldWithInit.js'
import merge from './merge.js'
import map from './map.js'
import toMap from './toMap.js'

export default iterable => foldWithInit(merge)(new Map())(map(toMap)(iterable))