import concat from './concat'

export default f => initial => (...args) => Iterator.from(concat(...args))
  .reduce(f, initial)