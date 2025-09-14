import toPredicate from './toPredicate.js'
import toFunction from './toFunction.js'

export default predicate => ifTruthy => ifFalsy => value => toPredicate(predicate)(value) ? 
    toFunction(ifTruthy)(value) : 
    toFunction(ifFalsy)(value)


