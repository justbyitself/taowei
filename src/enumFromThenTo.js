import enumFromThen  from './enumFromThen'
import takeWhile from './takeWhile'
import lte from './isLesserThanOrEqualTo'
import gte from './isGreaterThanOrEqualTo'
import ifThenElse from './ifThenElse'

/*
export default from => then => to => takeWhile((ifThenElse(gte(then)(from))(lte)(gte))(to))
  (enumFromThen(from)(then))
*/

export default from => then => to => {
  const step = then - from
  const pred = step >= 0 ? x => x <= to : x => x >= to
  return takeWhile(pred)(enumFromThen(from)(then))
}
