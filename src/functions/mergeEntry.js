import isEntryCollection from "#internal/isEntryCollection.js";
import isValueCollection from "#internal/isValueCollection.js";
import cond from "#internal/cond.js";
import append from "#internal/append.js";
import when from "#internal/when.js";
import otherwise from "#internal/otherwise.js";
import second from "#internal/second.js";
import every from "#internal/every.js";
import has from "#internal/has.js";
import get from "#internal/get.js";
import merge from "#internal/merge.js";
import appendAll from "#internal/appendAll.js";

const mergeConflict = cond([
  [every(isEntryCollection), ([a, b]) => merge(a)(b)],
  [every(isValueCollection), ([a, b]) => appendAll(b)(a)],
  [otherwise, second],
]);

export default (collection) => ([key, value]) => {
  const collision = has(key)(collection);
  const oldValue = get(key)(collection);
  const newValue = when(collision)(mergeConflict([oldValue, value]))(value);

  return append([key, newValue])(collection);
};
