import first from './first'
import drop from './drop'

export default n => iterable => first(drop(n)(iterable)) 