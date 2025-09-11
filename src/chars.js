export default s => function* () {
  for (const character of s) {
    yield character
  }
}()
