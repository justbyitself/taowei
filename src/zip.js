import map from './map.js'
import some from './some.js'

// TODO: implementaro sólo para iterables, no iteradores
export default (...iterables) => function* () {
  // TODO: refactorizar con toIterator
  const iterators = [...map(iterable => 
    Symbol.iterator in iterable ? iterable[Symbol.iterator]() : iterable
  )(iterables)]

  while (true) {
    const values = [...map(iterator => iterator.next())(iterators)]
    
    if (some(({ done }) => done)(values)) return

    yield [...map(({ value }) => value)(values)]
  }
}()
