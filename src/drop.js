import concat from './concat.js'

export default limit => (...args) => Iterator.from(concat(...args))
  .drop(limit)