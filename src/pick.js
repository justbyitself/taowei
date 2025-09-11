import randomInt from './randomInt.js'
import at from './at.js'
import length from './length.js'

export default iterable => {
  const l = length(iterable)

  if (l>0) {
    return at(randomInt(0)(l - 1))(iterable)
  }
}