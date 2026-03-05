export default item => function* (iter) { yield item; yield* iter }
