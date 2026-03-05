import iterate from '#internal/iterate.js'
import add from '#internal/add.js'

export default from => then => iterate(add(then - from))(from)
