export default iterable => {
  if (iterable == null) return false
  const it = iterable[Symbol.iterator]
  if (typeof it !== 'function') return false
  const first = it.call(iterable).next()
  return first.done === true
}
