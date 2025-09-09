import concat from './concat.js'

export default fn => (...args) => function* () {
  const iterable = concat(...args)
  for (const value of iterable) {
    yield fn(value)
  }
}()