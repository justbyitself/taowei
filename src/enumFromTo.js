import enumFrom from './enumFrom.js'
import takeWhile from './takeWhile.js'
import lte from './isLesserThanOrEqualTo.js'

export default from => to => takeWhile(lte(to))(enumFrom(from))

