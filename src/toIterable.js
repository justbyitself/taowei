import ifThenElse from './ifThenElse.js'
import isIterably from './isIterably.js'
import singleton from './singleton.js'

export default x => ifThenElse(isIterably(x))(x)(singleton(x))