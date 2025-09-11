export default predicate => iterable => {
  for (const value of iterable) {
    if (predicate(value)) return true
  }
  return false
}
