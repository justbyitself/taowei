import cond from './cond.js'
import isPojo from './isPojo.js'
import isMap from './isMap.js'
import entriesMap from './entriesMap.js'
import entriesObject from './entriesObject.js'

const entries = cond([
  [isMap, entriesMap],
  [isPojo, entriesObject]
])

export default entries