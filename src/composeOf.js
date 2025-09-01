import compose from './compose'
import uncurry from './uncurry'
import fold from './fold'
import id from './id'

export default fold(uncurry(compose))(id)

