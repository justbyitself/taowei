import whenElse from './whenElse.js'
import id from './id.js'

export default predicate => ifTruthy => whenElse(predicate)(ifTruthy)(id)
