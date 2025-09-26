import toReusable from './toReusable.js'
import method from './method.js'
import compose from './compose.js'

export default compose(toReusable)(method('entries'))
