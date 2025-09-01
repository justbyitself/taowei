import concat from './concat'

export default (separator = '') => (...args) => Iterator.from(concat(...args))
  .toArray()
  .join(separator)