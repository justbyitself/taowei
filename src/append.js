import isArray from './isArray.js'
import isMap from './isMap.js'
import isPojo from './isPojo.js'
import cond from './cond.js'
import isSet from './isSet.js'
import appendValuesArray from './appendValuesArray.js'
import appendValuesSet from './appendValuesSet.js'
import appendEntriesMap from './appendEntriesMap.js'
import appendEntriesObject from './appendEntriesObject.js'

export default value => cond([
  [isArray, appendValuesArray(value)],
  [isSet,   appendValuesSet(value)],
  [isMap,   appendEntriesMap(value)],
  [isPojo,  appendEntriesObject(value)],
])