export default obj => typeof obj === 'object' &&
  obj !== null &&
  Object.getPrototypeOf(obj) === Object.prototype &&
  !Object.getOwnPropertyDescriptor(obj, '__proto__')
