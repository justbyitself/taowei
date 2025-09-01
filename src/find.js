import concat from './concat'

export default predicate => (...args) => Iterator.from(concat(...args))
  .find(predicate)