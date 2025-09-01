import enumFrom from './enumFrom'
import takeWhile from './takeWhile'
import lte from './isLesserThanOrEqualTo'

export default from => to => takeWhile(lte(to))(enumFrom(from))

