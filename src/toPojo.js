import isMap from './isMap.js'
import isArray from './isArray.js'

export default v => {
  if (isMap(v)) return Object.fromEntries(v)
  if (isArray(v)) return Object.fromEntries(v)
  return v
}
