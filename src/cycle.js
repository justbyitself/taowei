export default iterable => function* () {
  const array = Array.from(iterable)
  while (true) {
    for (const i of array) {
      yield i
    }
  }
}()