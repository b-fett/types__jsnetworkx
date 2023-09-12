/**
 * Returns true if the value can be properly serialized, otherwise false.
 *
 * @param {*} value
 * @return {boolean}
 */
export function isSupported(value: any): boolean;
export function serialize(value: any): any;
export function deserialize(value: any): any;
/**
 * Serialize an array of values (e.g. arguments passed to a method).,
 *
 * @param {Array} values
 * @return {{serializable: bool, values: Array}}
 */
export function serializeAll(values?: any[]): {
    serializable: bool;
    values: any[];
};
