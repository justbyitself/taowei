import compose from './compose'
import uncurry from './uncurry'
import fold from './fold'
import id from './id'
import flip from './flip'

export default fold(uncurry(flip(compose)))(id)

