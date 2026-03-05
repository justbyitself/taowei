import isArray from '#internal/isArray.js'
import isSet from '#internal/isSet.js'
import or from '#internal/or.js'

export default or(isArray)(isSet)