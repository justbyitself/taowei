import unless from './unless.js'
import isIterably from './isIterably.js'
import singleton from './singleton.js'

export default unless(isIterably)(singleton)