import compose from './compose.js'
import foldWithInit from './foldWithInit.js'
import id from './id.js'
import flip from './flip.js'

export default foldWithInit(flip(compose))(id)

