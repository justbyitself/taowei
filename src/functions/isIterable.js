export default obj => typeof obj?.[Symbol.iterator] === 'function'
