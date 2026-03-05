import toReusable from '#internal/toReusable.js'
import method from '#internal/method.js'
import compose from '#internal/compose.js'

export default compose(toReusable)(method('entries'))
