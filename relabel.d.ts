/**
 * Relabel the nodes of the graph G.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(3);  // nodes 0-1-2
 * var mapping = {0: 'a', 1: 'b', 2: 'c'};
 * // var mapping = new Map([[0, 'a'], [1, 'b'], [2, 'c']]);
 * var H = jsnx.relabelNodes(G, mapping);
 * H.nodes();
 * // ['a', 'b', 'c']
 * ```
 *
 * Partial in-place mapping
 *
 * ```
 * var G = jsnx.pathGraph(3);  // nodes 0-1-2
 * var mapping = {0: 'a', 1: 'b'};
 * // var mapping = new Map([[0, 'a'], [1, 'b']]);
 * var H = jsnx.relabelNodes(G, mapping, false);
 * H.nodes();
 * // [2, 'b', 'c']
 * ```
 *
 * Mapping as function:
 *
 * ```
 * var G = jsnx.pathGraph(3);
 * var H = jsnx.relabelNodes(G, x => Math.pow(x, 2));
 * H.nodes()
 * // [0, 1, 4]
 * ```
 *
 * ### Notes
 *
 * Only the nodes specified in the mapping will be relabeled.
 *
 * The setting `copy=false` modifies the graph in place.
 * This is not always possible if the mapping is circular.
 * In that case use copy=true.
 *
 * @see #convertNodeLabelsToIntegers
 *
 * @param {Graph} G A JSNetworkX graph
 * @param {(Object|Map|function(Node):Node)} mapping
 *      A dictionary with the old labels as keys and new labels as values.
 *      A partial mapping is allowed.
 * @param {boolean=} optCopy
 *      If `true` return a copy or if `false` relabel the nodes in place.
 * @return {Graph}
 */
export function relabelNodes(G: Graph, mapping: (any | Map | ((arg0: Node) => Node)), optCopy?: boolean | undefined): Graph;
/**
 * Return a copy of G node labels replaced with integers.
 *
 * ### Notes
 *
 * Node and edge attribute data are copied to the new (relabeled) graph.
 *
 * @param {Graph} G A JSNetworkX graph
 * @param {?number=} optFirstLabel
 *      An integer specifying the offset in numbering nodes.
 *      The n new integer labels are numbered firstLabel, ..., n-1+firstLabel.
 * @param {?string=} optOrdering
 *   - "default" : inherit node ordering from `G.nodes()`
 *   - "sorted"  : inherit node ordering from `G.nodes().sort()`
 *   - "increasing degree" : nodes are sorted by increasing degree
 *   - "decreasing degree" : nodes are sorted by decreasing degree
 * @param {?boolean=} optDiscardOldLabels
 *      If true discard old labels. If false, create a node attribute
 *      'oldLabel' to hold the old labels.
 * @return {Graph}
 */
export function convertNodeLabelsToIntegers(G: Graph, optFirstLabel?: (number | null) | undefined, optOrdering?: (string | null) | undefined, optDiscardOldLabels?: (boolean | null) | undefined): Graph;
import { Map } from './_internals';
