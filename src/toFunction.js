import always from './always.js'
import ifThenElse from './ifThenElse.js'
import isFunction from './isFunction.js'

export default x => ifThenElse(isFunction(x))(x)(always(x))