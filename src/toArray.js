import concat from './concat.js'

export default (...args) => Iterator.from(concat(...args))
  .toArray()