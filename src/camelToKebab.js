export default str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
