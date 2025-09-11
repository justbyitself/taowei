export default predicate => iterable => function* () {
  for (const value of iterable) {
   if (!predicate(value)) {
      break
    }
    yield value
  }
}()
