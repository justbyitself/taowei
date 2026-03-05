import take from '#internal/take.js'
import repeatEffect from '#internal/repeatEffect.js'

export default n => f => take(n)(repeatEffect(f))
