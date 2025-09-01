import concat from './concat'

export default (...args) => {
  const it = Iterator.from(concat(...args))
  // advance once to skip the first
  const first = it.next()
  if (first.done) return undefined
  const second = it.next()
  return second.done ? undefined : second.value
}
