import defer2 from '#internal/defer2.js'
import defer3 from '#internal/defer3.js'

const implementations = {
  2: defer2,
  3: defer3,
}

export default arity => implementations[arity]
