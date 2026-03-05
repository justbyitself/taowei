export default items => function* (iter) { yield* items; yield* iter }
