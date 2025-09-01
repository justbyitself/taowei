export default iterable => function* () {
  let array = Array.from(iterable)
  while (true) {
    for (let i of array) {
      yield i
    }
  }
}()