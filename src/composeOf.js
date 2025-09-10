import compose from './compose.js'

import foldWithInit from './foldWithInit.js'
import id from './id.js'

export default foldWithInit(compose)(id)

