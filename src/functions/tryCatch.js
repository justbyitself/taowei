export default callbackTry => callbackCatch => (...args) => {
  try {
    return callbackTry(...args)
  } catch (e) {
    return callbackCatch(e, ...args)
  }
}
