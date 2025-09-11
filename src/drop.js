export default limit => iterable => function* () {
  if (limit === 0) {
    yield* iterable
    return
  }

  let count = 0
  for (const value of iterable) {
    if (count >= limit) {
      yield value
    }
    count++
  }
}()
