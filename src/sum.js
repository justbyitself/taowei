import fold from './fold'
import add from './add'
import uncurry from './uncurry'

export default fold(uncurry(add))(0)
