import promote2 from '#internal/promote2.js'
import promote3 from '#internal/promote3.js'

const implementations = {
  2: promote2,
  3: promote3,
}

export default arity => implementations[arity]
