export default predicate => iterable => {
  for (const value of iterable) {
    if (!predicate(value)) return false
  }
  return true
}
