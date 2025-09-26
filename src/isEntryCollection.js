import isMap from './isMap.js'
import isPojo from './isPojo.js'
import or from './or.js'

export default or(isMap)(isPojo)