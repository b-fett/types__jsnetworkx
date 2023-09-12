/**
 * Compute the shortest path lengths from source to all reachable nodes.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var length = jsnx.singleSourceShortestPathLength(G, 0);
 * length.get(4);
 * // 4
 * length
 * // Map {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}
 * ```
 *
 * @see shortestPathLength
 *
 * @param {Graph} G graph
 * @param {Node} source Starting node for path
 * @param {number=} optCutoff
 *    Depth to stop the search. Only paths of length <= cutoff are returned.
 *
 * @return {!Map} Map of shortest path lengths keyed by target.
 */
export function singleSourceShortestPathLength(G: Graph, source: Node, optCutoff?: number | undefined): Map;
/**
 * Compute the shortest path lengths between all nodes in G.
 *
 * The map returned only has keys for reachable node pairs.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var length = jsnx.allPairsShortestPathLength(G);
 * length.get(1).get(4);
 * // 3
 * length.get(1);
 * // Map {0: 1, 1: 0, 2: 1, 3: 2, 4: 3}
 * ```
 *
 * @param {Graph} G
 * @param {number=} optCutoff  depth to stop the search.
 *    Only paths of length <= cutoff are returned.
 *
 * @return {!Map}
 */
export function allPairsShortestPathLength(G: Graph, optCutoff?: number | undefined): Map;
/**
 * Return a list of nodes in a shortest path between source and target.
 *
 * This algorithm is used by `shortestPath(G, source, target)`.
 *
 * @see shortestPath
 *
 * @param {Graph} G
 * @param {Node} source starting node for path
 * @param {Node} target ending node for path
 *
 * @return {!Array}
 */
export function bidirectionalShortestPath(G: Graph, source: Node, target: Node): any[];
/**
 * Compute shortest path between source and all other nodes reachable from
 * source.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var path = jsnx.singleSourceShortestPath(G, 0);
 * path.get(4);
 * // [1, 2, 3, 4]
 * ```
 *
 * ### Notes
 *
 * The shortest path is not necessarily unique. So there can be multiple⋅
 * paths between the source and each target node, all of which have the⋅
 * same 'shortest' length. For each target node, this function returns⋅
 * only one of those paths.
 *
 *
 * @see shortestPath
 *
 * @param {Graph} G
 * @param {Node} source
 * @param {number=} optCutoff Depth to stop the search.
 *    Only paths of `length <= cutoff` are returned.
 *
 * @return {!Map<Array>} Map, keyed by target, of shortest paths.
 */
export function singleSourceShortestPath(G: Graph, source: Node, optCutoff?: number | undefined): any;
/**
 * Compute shortest paths between all nodes.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var path = jsnx.allPairsShortestPath(G);
 * path.get(0).get(4);
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * @see floydWarshall
 *
 * @param {Graph} G
 * @param {number=} optCutoff Depth to stop the search.
 *    Only paths of length <= cutoff are returned.
 *
 * @return {!Map} Map, keyed by source and target, of shortest paths.
 */
export function allPairsShortestPath(G: Graph, optCutoff?: number | undefined): Map;
/**
 * Returns a map of predecessors for the path from source to all nodes in G.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.pathGraph(4);
 * G.nodes();
 * // [0, 1, 2, 3, 4]
 * jsnx.predecessor(G, 0);
 * // Map {0: [], 1: [0], 2: [1], 3: [2]}
 *
 * @param {Graph} G
 * @param {Node} source Starting node for path
 * @param {{target: Node, cutoff: number, returnSeen: boolean}} optArgs
 *   - `target(=null)`: If provided only predecessors between⋅source and target
 *     are returned
 *   - `cutoff`: Depth to stop the search. Only paths of `length <= cutoff` are
 *     returned
 *   - `returnSeen(=false)`: If `true`, return `(seenNodes, predecessors)`
 *
 * @return {!(Map|Array)} Map, keyed by node, of predecessors in the shortest
 *   path.
 */
export function predecessor(G: Graph, source: Node, optArgs?: {
    target: Node;
    cutoff: number;
    returnSeen: boolean;
}): (Map | any[]);
import { Map } from '../../_internals';
