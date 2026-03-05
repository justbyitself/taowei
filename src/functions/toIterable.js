import unless from '#internal/unless.js'
import isIterably from '#internal/isIterably.js'
import singleton from '#internal/singleton.js'

export default unless(isIterably)(singleton)