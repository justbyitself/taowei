import concat from './concat.js'

export default (separator = '') => (...args) => Iterator.from(concat(...args))
  .toArray()
  .join(separator)