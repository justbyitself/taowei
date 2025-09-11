export default limit => iterable => function* () {
  if (limit === 0) return

  let count = 0
  for (const value of iterable) {
    if (count >= limit) break
    yield value
    count++
  }
}()
