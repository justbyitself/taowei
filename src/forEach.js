import concat from './concat'

export default callback => (...args) => Iterator.from(concat(...args))
  .forEach(callback)