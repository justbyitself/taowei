import constant from './constant.js'
import ifThenElse from './ifThenElse.js'
import isFunction from './isFunction.js'

export default x => ifThenElse(isFunction(x))(x)(constant(x))