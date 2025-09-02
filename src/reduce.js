import concat from './concat.js'

export default f => (...args) => Iterator.from(concat(...args))
  .reduce(f)