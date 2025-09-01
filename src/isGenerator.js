export default fn =>
  typeof fn === 'function' &&
  Object.prototype.toString.call(fn) === '[object GeneratorFunction]'
