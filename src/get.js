import isMap from './isMap.js'
import cond from './cond.js'
import isObject from './isObject.js'

export default key => obj => cond([
  [isMap, () => obj.get(key)],
  [isObject, () => obj[key]],
])(obj)
