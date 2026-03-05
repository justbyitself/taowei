import toArray from '#internal/toArray.js'

export default separator => iterable => toArray(iterable).join(separator)
