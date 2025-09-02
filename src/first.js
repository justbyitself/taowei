import concat from './concat.js'

export default (...args) => {
  const it = Iterator.from(concat(...args))
  const res = it.next()
  return res.done ? undefined : res.value
}
