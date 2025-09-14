import constant from './constant.js'
import isFunction from './isFunction.js'

export default x => isFunction(x) ? x : constant(x)