export default items => function* (iter) { yield* iter; yield* items }
