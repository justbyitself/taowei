import isMap from '#internal/isMap.js'
import cond from '#internal/cond.js'
import isObject from '#internal/isObject.js'

export default key => obj => cond([
  [isMap, () => obj.get(key)],
  [isObject, () => obj[key]],
])(obj)
