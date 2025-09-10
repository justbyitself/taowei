import iterate from './iterate.js'
import constant from './constant.js'

export default x => iterate(constant(x))(x)
