import toPredicate from '#internal/toPredicate.js'
import toFunction from '#internal/toFunction.js'

export default predicate => ifTruthy => ifFalsy => value =>
  toPredicate(predicate)(value)
    ? toFunction(ifTruthy)(value)
    : toFunction(ifFalsy)(value)
