import isEqualTo from './isEqualTo.js'
import isFunction from './isFunction.js'
import isBoolean from './isBoolean.js'
import constant from './constant.js'

export default x =>{
  if (isFunction(x)) return x

  return isBoolean(x) ? constant(x) : isEqualTo(x)
}