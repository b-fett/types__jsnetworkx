/**
 * Implements a simple event emitter to be merged into other objects.
 *
 * Usage:
 *
 * var e = require('./emitter');
 * var emit = e(someObject);
 *
 * // somewhere else
 * someObject.on('foo', x => console.log(x));
 *
 * // here
 * emit('foo', 'bar');
 */
export default function _default(obj: any): ((type: any, msg: any) => void) | {
    on: (type: any, listener: any, thisObj: any) => void;
    off: (type: any, listener: any) => void;
    emit: (type: any, msg: any) => void;
};
