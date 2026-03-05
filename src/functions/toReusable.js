export default generatorFn => ({
    [Symbol.iterator]() {
      return generatorFn()
    }
})
