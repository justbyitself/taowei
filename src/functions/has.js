import isMap from '#internal/isMap.js'
import cond from '#internal/cond.js'
import isObject from '#internal/isObject.js'

const hasObject = key => obj => Object.prototype.hasOwnProperty.call(obj, key)
const hasMap = key => map => map.has(key)

export default key => obj => cond([
  [isMap, () => hasMap(key)(obj)],
  [isObject, () => hasObject(key)(obj)],
])(obj)
