import toIterator from './toIterator.js'

export default iterable => {
  const it = toIterator(iterable)
  let res = it.next()
  if (res.done) return undefined
  let last = res.value
  while (!(res = it.next()).done) {
    last = res.value
  }
  return last
}
