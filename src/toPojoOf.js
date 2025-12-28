import foldWithInit from './foldWithInit.js'
import merge from './merge.js'
import map from './map.js'
import toPojo from './toPojo.js'

export default iterable => foldWithInit(merge)({})(map(toPojo)(iterable))