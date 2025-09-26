import isArray from './isArray.js'
import isMap from './isMap.js'
import isPojo from './isPojo.js'
import cond from './cond.js'
import isSet from './isSet.js'
import appendValueArray from './appendValueArray.js'
import appendEntryMap from './appendEntryMap.js'
import appendEntryObject from './appendEntryObject.js'
import appendValueSet from './appendValueSet.js'

export default value => cond([
  [isArray, appendValueArray(value)],
  [isSet,   appendValueSet(value)],
  [isMap,   appendEntryMap(value)],
  [isPojo,  appendEntryObject(value)],
])