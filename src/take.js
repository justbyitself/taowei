import concat from './concat'

export default limit => (...args) => Iterator.from(concat(...args))
  .take(limit)