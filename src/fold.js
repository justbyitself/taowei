import concat from './concat.js'

export default f => initial => (...args) => Iterator.from(concat(...args))
  .reduce(f, initial)