import foldWithInit from './foldWithInit.js'
import constant from './constant.js'
import succ from './succ.js'

export default foldWithInit(acc => constant(succ(acc)))(0)
