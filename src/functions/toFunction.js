import constant from '#internal/constant.js'
import isFunction from '#internal/isFunction.js'

export default x => isFunction(x) ? x : constant(x)