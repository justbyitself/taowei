import zip from './zip.js'
import enumFrom from './enumFrom.js'

export default iterable => zip(iterable, enumFrom(0))
