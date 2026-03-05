import compose from '#internal/compose.js'
import foldWithInit from '#internal/foldWithInit.js'
import id from '#internal/id.js'

export default foldWithInit(compose)(id)

