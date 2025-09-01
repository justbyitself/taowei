import concat from './concat'

export default predicate => (...args) => function* () {
  const iterator = Iterator.from(concat(...args))
  for (let value of iterator) {
    if (!predicate(value)) {
      break
    }
    yield value
  }
}()
