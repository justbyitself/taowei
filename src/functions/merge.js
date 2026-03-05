import mergeEntry from '#internal/mergeEntry.js'
import entries from '#internal/entries.js'
import foldWithInit from '#internal/foldWithInit.js'

export default a => b => foldWithInit(mergeEntry)(a)(entries(b))
