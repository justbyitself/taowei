import isPojo from './isPojo.js'

export default v => {
  if (isPojo(v)) return new Map(Object.entries(v))

  return new Map(v)
}