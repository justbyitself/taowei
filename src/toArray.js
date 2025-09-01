import concat from './concat'

export default (...args) => Iterator.from(concat(...args))
  .toArray()