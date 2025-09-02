import compose from './compose.js'
import uncurry from './uncurry.js'
import fold from './fold.js'
import id from './id.js'
import flip from './flip.js'

export default fold(uncurry(flip(compose)))(id)

