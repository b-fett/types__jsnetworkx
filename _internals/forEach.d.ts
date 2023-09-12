/**
 * Helper to iterate over sequence types (arrays, array-like objects,
 * objects, etc)
 *
 * @param {Iterable} seq
 * @param {function(this:T, ...)} callback
 * @param {T=} optThisObj
 * @template T
 */
export default function forEach<T>(seq: Iterable, callback: (this: T, ...arg1: any[]) => any, optThisObj?: T): void;
