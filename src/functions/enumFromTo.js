import enumFrom from '#internal/enumFrom.js'
import takeWhile from '#internal/takeWhile.js'
import lte from '#internal/isLesserThanOrEqualTo.js'

export default from => to => takeWhile(lte(to))(enumFrom(from))
