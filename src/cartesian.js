export default a => b => function* () {
  for (const va of a) {
    for (const vb of b) {
      yield [va, vb]
    }
  }
}()
