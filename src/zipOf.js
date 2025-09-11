import zip from './zip'
import fold from './fold'
import map from './map'
import flat from './flat'
import toArray from './toArray'
import compose from './compose'

export default iterable => map(compose(toArray)(flat))(fold(zip)(iterable))