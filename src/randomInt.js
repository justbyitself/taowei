import isInteger from './isInteger.js'

export default min => {
  if (!isInteger(min)) {
    throw new TypeError('min must be an integer')
  }

  return max => {
    if (!isInteger(max)) {
      throw new TypeError('max must be an integer')
    }
    if (min > max) {
      throw new RangeError('min must be <= max')
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
