import isString from './isString.js'

export default s => {
  if (!isString(s)) throw new TypeError('chars: argument must be a string')
  
    return s[Symbol.iterator]()
}
