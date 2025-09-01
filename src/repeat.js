import iterate from './iterate'
import always from './always'

export default x => iterate(always(x))(x)
