import concat from './concat'

export default (...args) => {
  const it = Iterator.from(concat(...args))
  let res = it.next()
  if (res.done) return undefined
  let last = res.value
  while (!(res = it.next()).done) {
    last = res.value
  }
  return last
}
