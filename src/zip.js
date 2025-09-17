import toIterator from './toIterator.js'
import toReusable from './toReusable.js'

export default a => b => toReusable(function* () {
  const iterA = toIterator(a)
  const iterB = toIterator(b)
  
  while (true) {
    const nextA = iterA.next()
    const nextB = iterB.next()
    
    if (nextA.done || nextB.done) break
    
    yield [nextA.value, nextB.value]
  }
})