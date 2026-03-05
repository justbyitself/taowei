// Predicate order for polymorphic dispatch (arity 1 only)
// Ordered from most specific to most general
// Used by the code generator — do not reorder without care

export default [
  "isNull",
  "isUndefined",
  "isNullish",

  "isTrue",
  "isFalse",
  "isBoolean",

  "isInteger",
  "isZero",
  "isPositive",
  "isNegative",
  "isEven",
  "isOdd",
  "isNumber",

  "isString",
  "isFunction",

  "isGenerator",
  "isIterator",

  "isArray",
  "isSet",
  "isValueCollection",

  "isMap",
  "isPojo",
  "isEntryCollection",

  "isIterably",
  "isIterable",

  "isObject",

  "isTruthy",
  "isFalsy",

  "isEmpty",
  "isNotEmpty",

  "isOtherwise",
];
