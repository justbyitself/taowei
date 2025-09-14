import isIterable from './isIterable.js'
import isString from './isString.js'
import and from './and.js'
import not from './not.js'

export default and(isIterable)(not(isString))