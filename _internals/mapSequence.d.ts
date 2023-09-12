/**
 * Helper to map sequence types (arrays, array-like objects, objects, etc).
 * Note that if an array-like object is passed, an array is returned:
 *
 * Array -> Array
 * ArrayLike -> Array
 * Iterator -> Iterator
 * Iterable -> Iterator
 * Object -> Object
 *
 * @param {Iterable} sequence
 * @param {function(this:T,...)} callback
 * @param {T=} this_obj
 * @template T
 *
 * @return {(Array|Object|Iterator)}
 */
export default function mapSequence<T>(sequence: Iterable, callback: (this: T, ...arg1: any[]) => any, thisObj: any): (any[] | any | Iterator);
