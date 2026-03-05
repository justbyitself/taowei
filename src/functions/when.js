import whenElse from '#internal/whenElse.js'
import id from '#internal/id.js'

export default predicate => ifTruthy => whenElse(predicate)(ifTruthy)(id)
