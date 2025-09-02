import enumFromThen  from './enumFromThen.js'
import takeWhile from './takeWhile.js'
import lte from './isLesserThanOrEqualTo.js'
import gte from './isGreaterThanOrEqualTo.js'
import ifThenElse from './ifThenElse.js'

/*
export default from => then => to => takeWhile((ifThenElse(gte(then)(from))(lte)(gte))(to))
  (enumFromThen(from)(then))
*/

export default from => then => to => {
  const step = then - from
  const pred = step >= 0 ? x => x <= to : x => x >= to
  return takeWhile(pred)(enumFromThen(from)(then))
}
