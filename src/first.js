import concat from './concat.js'

export default (...args) => {
  const it = concat(...args)
  const res = it.next()
  return res.done ? undefined : res.value
}
