import method from '#internal/method.js'
import toReusable from '#internal/toReusable.js'
import compose from '#internal/compose.js'


export default compose(toReusable)(method('keys'))