/**
 * Takes a number of iterators and returns a new iterator which emits an array
 * of each of the iterators next values. Stops when the shortest iterator is
 * exhausted.
 *
 * @param {...Iterator} var_args
 * @return {Iterator}
 */
export default function zipIterator(...args: Iterator[]): Iterator;
