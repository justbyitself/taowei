import concat from './concat.js'

export default limit => (...args) => Iterator.from(concat(...args))
  .take(limit)