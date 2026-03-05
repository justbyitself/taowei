import randomInt from '#internal/randomInt.js'
import at from '#internal/at.js'
import length from '#internal/length.js'

export default iterable => {
  const l = length(iterable)
  if (l > 0) {
    return at(randomInt(0)(l - 1))(iterable)
  }
}
