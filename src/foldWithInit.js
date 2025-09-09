import concat from './concat.js'

export default fn => init => (...args) => {
  const iterable = concat(...args)

  let acc = init
  for (const value of iterable) {
    acc = fn(acc)(value)
  }
  return acc
}