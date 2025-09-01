import concat from './concat'

export default f => (...args) => Iterator.from(concat(...args))
  .map(f)