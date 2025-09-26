import isArray from './isArray.js'
import isSet from './isSet.js'
import or from './or.js'

export default or(isArray)(isSet)