/**
 * Returns the shortest path from `source` to `target` in a weighted graph G.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * jsnx.dijkstraPath(G, {source: 0, target: 4});
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical. Distances are calculated as sums
 * of weighted edges traversed.
 *
 * @see bidirectionalDijkstra
 *
 * @param {Graph} G
 * @param {{source: Node, target: Node, weight: ?string}} parameters
 *   - source: Starting node
 *   - target: Ending node
 *   - weight(='weight'): Edge data key corresponding to the edge weight
 * @return {Array} List of nodes in a shortest path
 */
export function dijkstraPath(G: Graph, { source, target, weight }: {
    source: Node;
    target: Node;
    weight: string | null;
}): any[];
/**
 * Returns the shortest path length from `source` to `target` in a weighted
 * graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * jsnx.dijkstraPathLength(G, {source: 0, target: 4});
 * // 4
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical. Distances are calculated as sums
 * of weighted edges traversed.
 *
 * @see bidirectionalDijkstra
 *
 * @param {Graph} G
 * @param {{source: Node, target: Node, weight: ?string}} parameters
 *   - source: Starting node
 *   - target: Ending node
 *   - weight(='weight'): Edge data key corresponding to the edge weight
 * @return {number} Shortest path length
 */
export function dijkstraPathLength(G: Graph, { source, target, weight }: {
    source: Node;
    target: Node;
    weight: string | null;
}): number;
/**
 * Compute shortest path between source and all other reachable nodes for a
 * weighted graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var path = jsnx.singleSourceDijkstraPath(G, {source: 0});
 * path.get(4);
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical. Distances are calculated as sums
 * of weighted edges traversed.
 *
 * @see singleSourceDijkstra
 *
 * @param {Graph} G
 * @param {{source: Node, weight: ?string, cutoff: ?number}} parameters
 *   - source: Starting node for path
 *   - weight: Edge data key corresponding to the edge weight
 *   - cutoff: Depth to stop the search. Only paths of length <= cutoff are
 *     returned.
 * @return {Map} Map of shortest paths keyed by target
 */
export function singleSourceDijkstraPath(G: Graph, { source, cutoff, weight }: {
    source: Node;
    weight: string | null;
    cutoff: number | null;
}): Map;
/**
 * Compute the shortest path length between source and all other reachable
 * nodes for a weighted graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var length = jsnx.singleSourceDijkstraPathLength(G, {source: 0});
 * length.get(4);
 * // 4
 * length
 * // Map {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical. Distances are calculated as sums
 * of weighted edges traversed.
 *
 * @see singleSourceDijkstra
 *

 * @param {Graph} G
 * @param {{source: Node, weight: ?string, cutoff: ?number}} parameters
 *   - source: Starting node for path
 *   - weight: Edge data key corresponding to the edge weight
 *   - cutoff: Depth to stop the search. Only paths of length <= cutoff are
 *     returned.
 * @return {Map} Map of shortest paths keyed by target
 */
export function singleSourceDijkstraPathLength(G: Graph, { source, cutoff, weight }: {
    source: Node;
    weight: string | null;
    cutoff: number | null;
}): Map;
/**
 * Compute shortest paths and lengths in a weighted graph G.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var [lengths, paths] = jsnx.singleSourceDijkstra(G, {source: 0});
 * lengths.get(4);
 * // 4
 * lengths
 * // Map {0: 0, 1: 1, 2: 2, 3: 3, 4: 4}
 * paths.get(4);
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical.
 * Distances are calculated as sums of weighted edges traversed.
 *
 * This algorithm is not guaranteed to work if edge weights are negative or are
 * floating point numbers (overflows and roundoff errors can cause problems).
 *
 * @see singleSourceDijkstraPath
 * @see singleSourceDijkstraPathLength
 *
 * @param {Graph} G
 * @param {{source: Node, target: ?Node, cutoff: ?number, weight: ?string}}
 *   parameters
 *   - source: Starting node for path
 *   - target: Ending node in the path (optional)
 *   - weight: Edge data key corresponding to the edge weight
 *   - cutoff: Depth to stop the search. Only paths of length <= cutoff are
 *     returned.
 * @return {Array<Map>}
 *   Returns a tuple of two Maps keyed by node. The first Map stores distances
 *   from the source. The second one stores the path from the source to that
 *   node.
 */
export function singleSourceDijkstra(G: Graph, { source, target, cutoff, weight }: {
    source: Node;
    target: Node | null;
    cutoff: number | null;
    weight: string | null;
}): Array<Map>;
/**
 * Compute shortest path lengths between all nodes in a weighted graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var path = jsnx.allPairsDijkstraPath(G);
 * path.get(1).get(4);
 * // 3
 * path.get(1);
 * // Map {0: 1, 1: 0, 2: 1, 3: 2, 4: 3}
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical.
 * Distances are calculated as sums of weighted edges traversed.
 *
 * The Map returned only has keys for reachable node pairs.
 *
 * @param {Graph} G
 * @param {{weight: ?string, cutoff: ?number}=} optParameters
 *   - weight: Edge data key corresponding to the edge weight
 *   - cutoff: Depth to stop the search. Only paths of length <= cutoff are
 *     returned.
 * @return {Map} A Map of Maps of shortest path lengths
 */
export function allPairsDijkstraPathLength(G: Graph, { cutoff, weight }?: {
    weight: string | null;
    cutoff: number | null;
} | undefined): Map;
/**
 * Compute shortest paths between all nodes in a weighted graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * var path = jsnx.allPairsDijkstraPath(G);
 * path.get(0).get(4);
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * ### Notes
 *
 * Edge weight attributes must be numerical.
 * Distances are calculated as sums of weighted edges traversed.
 *
 * @param {Graph} G
 * @param {{weight: ?string, cutoff: ?number}=} optParameters
 *   - weight: Edge data key corresponding to the edge weight
 *   - cutoff: Depth to stop the search. Only paths of length <= cutoff are
 *     returned.
 * @return {Map} A Map of Maps of shortest paths.
 */
export function allPairsDijkstraPath(G: Graph, { cutoff, weight }?: {
    weight: string | null;
    cutoff: number | null;
} | undefined): Map;
import { Map } from '../../_internals';
