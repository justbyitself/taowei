export default fn => iterable => function* () {
  for (const value of iterable) {
    yield fn(value)
  }
}()