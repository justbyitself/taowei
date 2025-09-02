import fold from './fold.js'
import add from './add.js'
import uncurry from './uncurry.js'

export default fold(uncurry(add))(0)
