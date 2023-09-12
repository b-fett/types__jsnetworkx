/**
 * This function always returns the same instance of an array for a given number
 * of arguments.
 * It should be used instead of creating temporary arrays, if the arrays are
 * consumed immediately anyways.
 *
 * @param {...*} var_args The elemens of the tuple
 * @return {Array}
 */
export function tuple2(x: any, y: any): any[];
export function tuple3(x: any, y: any, z: any): any[];
export function tuple4(a: any, b: any, c: any, d: any): any[];
/**
 * Same as tuple2, but sets the values on container instead of the allocated
 * array here. Useful to reuse an existing array.
 *
 * @param {...*} var_args The elemens of the tuple
 * @param {Array} opt_container If present, set values there instead
 * @return {Array}
 */
export function tuple2c(x: any, y: any, container: any): any[];
export function tuple3c(x: any, y: any, z: any, container: any): any;
export function tuple4c(a: any, b: any, c: any, d: any, container: any): any;
export function createTupleFactory(count: any): (a: any, b: any, c: any) => any[];
