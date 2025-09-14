import whenElse from './whenElse.js'
import id from './id.js'

export default predicate => ifFalsy => whenElse(predicate)(id)(ifFalsy)
