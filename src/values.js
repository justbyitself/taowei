import method from './method.js'
import toReusable from './toReusable.js'
import compose from './compose.js'

export default compose(toReusable)(method('values'))