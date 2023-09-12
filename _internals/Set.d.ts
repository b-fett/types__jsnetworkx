export function symmetricDifference(a: any, b: any): Set;
export function union(a: any, b: any): Set;
export default class Set {
    /**
     * @param {Iterable} opt_data An object, array or iterator to populate the set
     * with.
     */
    constructor(optData: any);
    _map: Map;
    /**
     * Returns true if the key is in the map.
     *
     * @param {*} value
     *
     * @return {boolean}
     */
    has(value: any): boolean;
    /**
     * Adds the value and key to the map.
     *
     * @param {*} value
     *
     * @export
     */
    add(value: any): void;
    /**
     * Remove value with given key.
     *
     * @param {*} value
     *
     * @export
     */
    delete(value: any): boolean;
    /**
     * Returns an array of values.
     *
     * @return {!Iterator}
     * @export
     */
    values(): Iterator;
    /**
     * Returns an array of values.
     *
     * @return {!Iterator}
     * @export
     */
    keys(): Iterator;
    /**
     * Returns an array of values.
     *
     * @return {!Iterator}
     * @export
     */
    entries(): Iterator;
    /**
     * Returns the number of element in the set.
     *
     * @return {number}
     * @export
     */
    get size(): number;
    /**
     * Empties the set.
     *
     * @export
     */
    clear(): void;
    /**
     * Executes the provided callback for each item in the set.
     *
     * @param {function(*)} callback A function which gets the key as first
     *  argument and value as second argument.
     * @param {*=} opt_this Object/value to set this to inside the callback
     * @export
    */
    forEach(callback: (arg0: any) => any, optThis: any): void;
    /** EXTENSIONS **/
    /**
     * The following methods are not part of the ES6 Set class but are provided
     * for convenience. Once Sets become more widely available, we could simply
     * extend the native Set class.
     */
    /**
     * Returns a new set with the values of this set, not found in the other
     * sets.
     *
     * @param {...(Set|Array)} others
     */
    difference(...others: (Set | any[])[]): Set;
    /**
     * Returns a new set containing only elements found in this and every
     * other set/array.
     *
     * @param {...(Set|Array)} others
     */
    intersection(...others: (Set | any[])[]): Set;
    /**
     * Removes and returns an element from the set.
     *
     * @return {?}
     */
    pop(): unknown;
}
import Map from './Map';
