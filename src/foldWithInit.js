export default fn => init => iterable => {
  let acc = init
  for (const value of iterable) {
    acc = fn(acc)(value)
  }
  return acc
}