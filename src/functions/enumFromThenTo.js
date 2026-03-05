import enumFromThen from '#internal/enumFromThen.js'
import takeWhile from '#internal/takeWhile.js'

export default from => then => to => {
  const step = then - from
  const pred = step >= 0 ? x => x <= to : x => x >= to
  return takeWhile(pred)(enumFromThen(from)(then))
}
