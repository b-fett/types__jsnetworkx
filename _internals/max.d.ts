/**
 * Returns the maximum value from an iterable. It uses the optional callback
 * function to determine the value to compare.
 *
 * @param {Iterable} iterable
 * @param {function(?): ?} map
 * @return {?}
 */
export default function max(iterable: Iterable, map: (arg0: unknown) => unknown): unknown;
