import isEntryCollection from './isEntryCollection.js'
import isValueCollection from './isValueCollection.js'
import cond from './cond.js'
import appendItem from './appendItem.js'
import append from './append.js'
import when from './when.js'
import otherwise from './otherwise.js'
import second from './second.js'
import every from './every.js'
import has from './has.js'
import get from './get.js'
import merge from './merge.js'

const mergeConflict = cond([
  [every(isEntryCollection), ([a, b]) => merge(a)(b)], 
  [every(isValueCollection), ([a, b]) => append(a)(b)],
  [otherwise, second] // last-win
])

const mergeEntry = collection => ([key, value]) => {
  const collision = has(key)(collection)
  const oldValue = get(key)(collection)
  const newValue =  when(collision)(mergeConflict([oldValue, value]))(value)

  return appendItem([key, newValue])(collection)
}

export default mergeEntry