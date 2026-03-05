export default items => obj => ({ ...obj, ...Object.fromEntries(items) })
