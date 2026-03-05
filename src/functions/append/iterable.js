export default item => function* (iter) { yield* iter; yield item }
