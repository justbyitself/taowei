import isEqualTo from '#internal/isEqualTo.js'
import isFunction from '#internal/isFunction.js'
import isBoolean from '#internal/isBoolean.js'
import constant from '#internal/constant.js'

export default x =>{
  if (isFunction(x)) return x

  return isBoolean(x) ? constant(x) : isEqualTo(x)
}