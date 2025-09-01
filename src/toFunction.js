import always from './always'
import ifThenElse from './ifThenElse'
import isFunction from './isFunction'

export default x => ifThenElse(isFunction(x))(x)(always(x))