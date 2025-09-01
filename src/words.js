export default str => function* () {
  str = str.trim()

  const regex = /\s+/g
  let startIndex = 0
  let match

  while ((match = regex.exec(str)) !== null) {
    yield str.slice(startIndex, match.index)
    startIndex = match.index + match[0].length
  }

  if (startIndex < str.length) {
    yield str.slice(startIndex)
  }
}()