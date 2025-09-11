export default fn => iterable => {
  for (const value of iterable) {
    fn(value)
  }
}
