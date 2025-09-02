import concat from './concat.js'

export default callback => (...args) => Iterator.from(concat(...args))
  .forEach(callback)