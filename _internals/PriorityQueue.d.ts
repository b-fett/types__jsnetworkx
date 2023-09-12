/**
 * A simple priority queue implementation.
 */
export default class PriorityQueue {
    /**
     * Accepts an iterable that emits `[priority, value]` pairs. Iterates over the
     * iterable only once.
     *
     * `priority` must be a number.
     *
     * @param {Iterable} iterable
     */
    constructor(iterable: Iterable);
    _values: any[][];
    /**
     * Adds a value to the queue. It will be inserted into the queue according to
     * `priority`.
     *
     * @param {number} priority
     * @param {*} value
     */
    enqueue(priority: number, value: any): void;
    /**
     * Removes and returns the smallest [priority, value] tuple from the queue.
     *
     * @return {?}
     */
    dequeue(): unknown;
    /**
     * Returns the current size of the queue.
     *
     * @return {number}
     */
    get size(): number;
}
