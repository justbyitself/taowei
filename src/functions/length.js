import foldWithInit from '#internal/foldWithInit.js'
import constant from '#internal/constant.js'
import succ from '#internal/succ.js'

export default foldWithInit(acc => constant(succ(acc)))(0)
