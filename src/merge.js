import mergeEntry from './mergeEntry.js'
import entries from './entries.js'
import foldWithInit from './foldWithInit.js'

export default a => b => foldWithInit(mergeEntry)(a)(entries(b))
