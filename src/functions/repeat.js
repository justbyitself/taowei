import iterate from '#internal/iterate.js'
import constant from '#internal/constant.js'

export default x => iterate(constant(x))(x)
