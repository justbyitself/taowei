import iterate from './iterate.js'
import add from './add.js'

export default from => then => iterate(add(then - from))(from)

