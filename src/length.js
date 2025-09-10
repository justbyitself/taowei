import foldWithInit from './foldWithInit.js'
import always from './always.js'
import succ from './succ.js'

export default foldWithInit(acc => always(succ(acc)))(0)
