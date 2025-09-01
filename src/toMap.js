import isPojo from './isPojo'
import isArray from './isArray'

export default (...args) => {
  const itemToMap = v => {
    if (isPojo(v)) {
      return Object.entries(v)
    }

    try {
      return new Map(v)
    } catch {
      if (isArray(v)) {
        return new Map([v])
      } else {
        return new Map([[v]])
      }
    }
  }

  const result = new Map()
  for (const arg of args) {
    const map = itemToMap(arg)
    for (const [key, value] of map) {
      result.set(key, value)
    }
  }

  return result
}