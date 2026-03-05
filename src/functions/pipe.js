import compose from '#internal/compose.js'
import foldWithInit from '#internal/foldWithInit.js'
import id from '#internal/id.js'
import flip from '#internal/flip.js'

export default foldWithInit(flip(compose))(id)

