export default class Map<K = unknown, V = unknown> {
    /**
     * @param {Iterable=} opt_data An object, array or iterator to
     *  populate the map with. If 'data' is an array or iterable, each element is
     *  expected to be a 2-tuple. The first element will be the key and second the
     *  value.
     *  If it is an object, the property names will be the keys and the value the
     *  values.
     */
    constructor(optData: any);
    _stringValues: any;
    _numberValues: any;
    _values: any;
    _keys: any;
    /**
     * Returns the appropriate storage object for a given key.
     *
     * @param {*} key
     * @return {Object}
     * @private
     */
    private _getStorage;
    /**
     * Returns the value for the given key.
     *
     * Unlike native ES6 maps, this also accepts a default value which is returned
     * if the map does not contain the value.
     *
     * @param {*} key
     * @param {*=} optDefaultValue
     *
     * @return {*}
     * @export
     */
    get(key: K, optDefaultValue?: any | undefined): V | undefined;
    /**
     * Returns true if the key is in the map.
     *
     * @param {*} key
     *
     * @return {boolean}
     * @export
     */
    has(key: K): boolean;
    /**
     * Adds the value and key to the map.
     *
     * @param {*} key
     * @param {*} value
     *
     * @return {Map} the map object itself
     * @export
     */
    set(key: K, value: V): this;
    /**
     * Remove value with given key.
     *
     * @param {*} key
     *
     * @return {boolean}
     * @export
     */
    delete(key: K): boolean;
    /**
     * Returns an array of (key, value) tuples.
     *
     * @return {!Iterator}
     * @export
    */
    entries(): IterableIterator<[K, V]>;
    /**
     * Returns an iterator over keys.
     *
     * @return {!Iterator}
     * @export
    */
    keys(): Iterator<K>;
    /**
     * Returns an array of values.
     *
     * @return {!Array}
     * @export
    */
    values(): V[];
    /**
     * Returns the number of element in the map.
     *
     * @return {number}
     * @export
    */
    get size(): number;
    /**
     * Empties the map.
     *
     * @export
    */
    clear(): void;
    /**
     * Executes the provided callback for each item in the map.
     *
     * @param {function(*,*)} callback A function which gets the key as first
     *  argument and value as second argument.
     * @param {*=} opt_this Object/value to set this to inside the callback
     * @export
    */
    forEach(callback: (arg0: any, arg1: any) => any, optThis: any): void;
}
