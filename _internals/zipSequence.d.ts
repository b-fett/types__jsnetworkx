/**
 * Helper to zip sequence types (arrays, array-like objects, objects, etc).
 * All arguments must be the same type. The first argument is used to determine
 * the type.
 * This behaves the same as Python's zip function, i.e. the result has the
 * length of the shortest input.
 *
 * Array -> Array
 * Array-like -> Array
 * Iterator -> Iterator
 *
 * @param {...(Iterable)} var_args
 *
 * @return {!(Array|Iterator)}
 */
export default function zipSequence(...varArgs: any[]): (any[] | Iterator);
