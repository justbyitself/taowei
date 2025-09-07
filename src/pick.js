import randomInt from './randomInt.js'
import concat from './concat.js'
import length from './length.js'

export default (...values) => {
  const iterable = concat(...values)
  const l = length(iterable)

  if (l > 0) {
    return values[randomInt(0)(l - 1)]
  }
}
