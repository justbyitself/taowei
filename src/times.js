import take from './take.js'
import repeatEffect from './repeatEffect.js'

export default n => f => take(n)(repeatEffect(f))
