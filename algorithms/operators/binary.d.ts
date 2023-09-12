/**
 * Return the union of graphs `G` and `H`.
 *
 * Graphs `G` and `H` must be disjoint, otherwise an exception is raised.
 *
 * ### Notes
 *
 * To force a disjoint union with node relabeling, use `disjointUnion(G, H)` or
 * `convertNodeLabelsToIntegers()`.
 *
 * Graph, edge and node attributes are propagated from `G` and `H` to the union
 * Graph. If a graph attribute is present in both `G` and `H`, the value from
 * `H` is used.
 *
 * @see #disjointUnion
 *
 * @param {Graph} G
 * @param {Graph} H
 * @param {{rename: ?Array}} optParameters
 *   - rename: Node names `G` and `H` can be changed by specifying the tuple
 *     `['G-', 'H-']` (for example). Node `'u'` in `G` is then renamed to
 *     `'G-u'` and `'v'` in `H` is renamed to `'H-v'`.
 * @return {Graph} A union graph with the same type as G
 */
export function union(G: Graph, H: Graph, { rename }?: {
    rename: any[] | null;
}): Graph;
/**
 * Return the disjoint union of graphs `G` and `H`.
 *
 * This algorithm forces distinct integer node labels.
 *
 * ### Notes
 *
 * A new graph is created, of the same class as `G`.  It is recommended that `G`
 * and `H` be either both directed or both undirected.
 *
 * The nodes of `G` are relabeled `0` to `numberOfNodes(G) - 1`, and the nodes
 * of `H` are relabeled `numberOfNodes(G)` to
 * `numberOfNodes(G) + numberOfNodes(H) - 1`.
 *
 * Graph, edge, and node attributes are propagated from `G` and `H` to the union
 * graph. If a graph attribute is present in both `G` and `H` the value from `H`
 * is used.
 *
 * @param {Graph} G
 * @param {Graph} H
 * @return {Graph} A union graph with the same type as G.
 */
export function disjointUnion(G: Graph, H: Graph): Graph;
/**
 * Return a new graph that contains only edges that exist in both `G` and `H`.
 *
 * The node set of `H` and `G` must be the same.
 *
 * ### Notes
 *
 * Attributes from the graph, nodes and edges are not copied to the new graph.
 * If you want a new graph of the intersection of `G` and `H` with the
 * attributes, (including edge data) from `G` use `removeNode()` as follows
 *
 * ```
 * var G = jsnx.pathGraph(3);
 * var H = jsnx.pathGraph(5);
 * var R = G.copy();
 * for (var n of G) {
 *   if (!H.hasNode(n)) {
 *     R.removeNode(n);
 *   }
 * }
 * ```
 *
 * @param {Graph} G
 * @param {Graph} H
 * @return {Graph} A new graph with the same types as G
 */
export function intersection(G: Graph, H: Graph): Graph;
/**
 * Return a new graph that contains the edges that exist in `G` but not in `H`.
 *
 * The node sets of `H` and `G` must be the same.
 *
 * ### Notes
 *
 * Attributes from the graph, nodes and edges are not copied to the new graph.
 * If you want a new graph of the difference of `G` and `H` with the attributes
 * (including edge data) from `G`, use `removeNodes()` as follows:
 *
 * ```
 * var G = jsnx.pathGraph(3);
 * var H = jsnx.pathGraph(5);
 * var R = G.copy();
 * for (var n of G) {
 *   if (!H.hasNode(n)) {
 *     R.removeNode(n);
 *   }
 * }
 * ```
 *
 * @param {Graph} G
 * @param {Graph} H
 * @return {Graph} A new graph with the same types as G
 */
export function difference(G: Graph, H: Graph): Graph;
/**
 * Return new graph with edges that exit in either `G` or `H` but not both.
 *
 * The node sets of `H` and `G` must be the same.
 *
 * ### Notes
 *
 * Attributes from the graph, nodes and edges are not copied to the new graph.
 *
 * @param {Graph} G
 * @param {Graph} H
 * @return {Graph} A new graph with the same types as G
 */
export function symmetricDifference(G: Graph, H: Graph): Graph;
/**
 * Return a new graph of `G` composed with `H`.
 *
 * Composition is the simple union of the node sets and edge sets. The node sets
 * of `G` and `H` do not need to be disjoint.
 *
 * ### Notes
 *
 * It is recommended that `G` and `H` be either both directed or both
 * undirected. Attributes from `H` take precedent over attributes from `G`.
 *
 * @param {Graph} G
 * @param {Graph} H
 * @return {Graph} A new graph with the same type as G
 */
export function compose(G: Graph, H: Graph): Graph;
