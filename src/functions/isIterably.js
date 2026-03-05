import isIterable from '#internal/isIterable.js'
import isString from '#internal/isString.js'
import and from '#internal/and.js'
import not from '#internal/not.js'

export default and(isIterable)(not(isString))