import concat from './concat.js'

export default fn => (...args) => function* () {
  const iterable = concat(...args)
  for (let value of iterable) {
    yield fn(value)
  }
}()