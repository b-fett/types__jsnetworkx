/**
 * Makes a graph observable, i.e. external code can bind event handlers to
 * be notified about changes in the graph (adding or removing nodes or edges).
 *
 * @param {Graph} G The graph to make observable
 * @return {Graph} The same graph passed as argument (not a new graph)
 */
export function observe(G: Graph): Graph;
/**
 * Removes the properties added to a graph for event handling.
 *
 * @param {Graph} G
 * @return {Graph} The graph passed to the function
 */
export function unobserve(G: Graph): Graph;
/**
 * Tests whether the graph is observable.
 *
 * @param {Graph} G
 * @return {boolean}
 */
export function isObservable(G: Graph): boolean;
