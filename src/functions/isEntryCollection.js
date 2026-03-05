import isMap from '#internal/isMap.js'
import isPojo from '#internal/isPojo.js'
import or from '#internal/or.js'

export default or(isMap)(isPojo)