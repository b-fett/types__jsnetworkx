/**
 * Return `true` if `G` has a path from `source to `target`, `false` otherwise.
 *
 * @param {Graph} G
 * @param {{source: Node, target: node}} parameters
 *   - source: Starting node for path
 *   - target: Ending node for path
 * @return {boolean}
 */
export function hasPath(G: Graph, { source, target }: {
    source: Node;
    target: node;
}): boolean;
/**
 * Compute shortest paths in the graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * jsnx.shortestPath(G, {source: 0, target: 4});
 * // [0, 1, 2, 3, 4]
 * var paths = jsnx.shortestPath(G, {source: 0}); // target not specified
 * paths.get(4);
 * // [0, 1, 2, 3, 4]
 * paths = jsnx.shortestPath(G {target: 4}); // source not specified
 * paths.get(0);
 * // [0, 1, 2, 3, 4]
 * paths = jsnx.shortestPath(G); // source, target not specified
 * paths.get(0).get(4);
 * // [0, 1, 2, 3, 4]
 * ```
 *
 * ### Notes
 *
 * There may be more than one shortest path between a source and a target.
 * This returns only one of them.
 *
 * @see allPairsShortestPath
 * @see allPairsDijkstraPath
 * @see singleSourceShortestPath
 * @see singleSourceDijkstraPath
 *
 * @param {Graph} G
 * @param {?{source: ?Node, target: ?Node, weight: ?string}=} optParameters
 *   - source: Starting node for path.
 *     If not specified, compute the shortest paths using all nodes as source
 *     nodes.
 *   - target: Ending node for path.
 *     If not specified, compute the shortest paths using all nodes as target
 *     nodes.
 *   - weight:
 *     If not specified, every edge has weight/distance/cost of 1.
 *     If a string, use this edge attribute as the edge weight. Any edg
 *     attribute not present defaults to 1.
 * @return {(Array|Map)} All returned paths include both the source and the
 *   target in the path.
 *
 *   If the `source` and `target` are both specified, return a single list
 *   of nodes in a shortest path from the source to the target.
 *
 *   If only the `source` is specified, return a Map keyed by
 *   targets with a list of nodes in a shortest path from the source
 *   to one of the targets.
 *
 *   If only the `target` is specified, return a Map keyed by
 *   sources with a list of nodes in a shortest path from one of the
 *   sources to the target.
 *
 *   If neither the `source` nor `target` are specified return a Map
 *   of Maps with `Map {source: Map {target: [list of nodes in path] }}`.
 */
export function shortestPath(G: Graph, { source, target, weight }?: ({
    source: Node | null;
    target: Node | null;
    weight: string | null;
} | null) | undefined): (any[] | Map);
/**
 * Compute shortest path lengths in the graph.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(5);
 * jsnx.shortestPathLength(G, {source: 0, target: 4});
 * // 4
 * var paths = jsnx.shortestPathLength(G, {source: 0}); // target not specified
 * paths.get(4);
 * // 4
 * paths = jsnx.shortestPathLength(G {target: 4}); // source not specified
 * paths.get(0);
 * // 4
 * paths = jsnx.shortestPathLength(G); // source, target not specified
 * paths.get(0).get(4);
 * // 4
 * ```
 *
 * ### Notes
 *
 * The length of the path is always 1 less than the number of nodes involved in
 * the path since the length measures the number of edges followed.
 *
 * For digraphs this returns the shortest directed path length. To find path
 * lengths in the reverse directio, use `G.reverse(false)` first to flip the
 * edge orientation.
 *
 * @see allPairsShortestPathLength
 * @see allPairsDijkstraPathLength
 * @see singleSourceShortestPathLength
 * @see singleSourceDijkstraPathLength
 *
 * @param {Graph} G
 * @param {?{source: ?Node, target: ?Node, weight: ?string}=} optParameters
 *   - source: Starting node for path.
 *     If not specified, compute the shortest path lengths using all nodes as
 *     source nodes.
 *   - target: Ending node for path.
 *     If not specified, compute the shortest path length using all nodes as
 *     target nodes.
 *   - weight:
 *     If not specified, every edge has weight/distance/cost of 1.
 *     If a string, use this edge attribute as the edge weight. Any edg
 *     attribute not present defaults to 1.
 * @return {(number|Map)}
 *   If the `source` and `target` are both specified, return the length of the
 *   shortest path from the source to the target.
 *
 *   If only the `source` is specified, return a Map keyed by
 *   targets whose values are the lengths of the shortest path from the source
 *   to one of the targets.
 *
 *   If only the `target` is specified, return a Map keyed by
 *   sources whose values are the lengths of the shortest path from one of the
 *   sources to the target.
 *
 *   If neither the `source` nor `target` are specified return a Map
 *   of Maps with path[source][target]=L, where L is the length of the shortest
 *   path from source to target.
 */
export function shortestPathLength(G: Graph, { source, target, weight }?: ({
    source: Node | null;
    target: Node | null;
    weight: string | null;
} | null) | undefined): (number | Map);
