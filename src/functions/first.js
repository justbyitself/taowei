import toIterator from '#internal/toIterator.js'

export default iterable => {
  const res = toIterator(iterable).next()
  return res.done ? undefined : res.value
}
