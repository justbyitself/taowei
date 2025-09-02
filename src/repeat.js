import iterate from './iterate.js'
import always from './always.js'

export default x => iterate(always(x))(x)
