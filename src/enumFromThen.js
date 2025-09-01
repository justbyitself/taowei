import iterate from './iterate'
import add from './add'

export default from => then => iterate(add(then - from))(from)

