import toArray from './toArray.js'

export default separator => iterable => toArray(iterable).join(separator)