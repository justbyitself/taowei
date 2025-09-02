import concat from './concat.js'

export default predicate => (...args) => Iterator.from(concat(...args))
  .find(predicate)