import toIterator from './toIterator'

export default a => b => function* () {
  const iterA = toIterator(a)
  const iterB = toIterator(b)
  
  while (true) {
    const nextA = iterA.next()
    const nextB = iterB.next()
    
    if (nextA.done || nextB.done) break
    
    yield [nextA.value, nextB.value]
  }
}()