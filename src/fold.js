import foldWithInit from './foldWithInit.js'
import first from './first.js'
import drop from './drop.js'

export default fn => (...args) => foldWithInit(fn)(first(...args))(drop(1)(...args))