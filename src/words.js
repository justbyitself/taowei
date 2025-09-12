export default str => function* () {
  yield* str.trim().split(/\s+/).filter(Boolean)
}()
