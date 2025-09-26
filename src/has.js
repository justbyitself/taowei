import isMap from './isMap.js'
import cond from './cond.js'
import isObject from './isObject.js'

const hasObject = key => obj => Object.prototype.hasOwnProperty.call(obj, key)
const hasMap = key => map => map.has(key)

export default key => obj => cond([
  [isMap, () => hasMap(key)(obj)],
  [isObject, () => hasObject(key)(obj)],
])(obj)
