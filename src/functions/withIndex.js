import zip from '#internal/zip.js'
import enumFrom from '#internal/enumFrom.js'

export default iterable => zip(iterable)(enumFrom(0))
