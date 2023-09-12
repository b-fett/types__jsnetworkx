/**
 * Compute the shortest-path betweenness centrality for nodes.
 *
 * Betweenness centrality of a node `$v$` is the sum of the
 * fraction of all-pairs shortest paths that pass through `$v$`:
 *
 * ```math
 * c_B(v) = \sum_{s,t \in V} \frac{\sigma(s, t|v)}{\sigma(s, t)}
 * ```
 *
 * where `$V$` is the set of nodes, `$\sigma(s, t)$` is the number of
 * shortest `$(s, t)$`-paths,  and `$\sigma(s, t|v)$` is the number of those
 * paths  passing through some  node `$v$` other than `$s, t$`.
 * If `$s = t$`, `$\sigma(s, t) = 1$`, and if `$v \in {s, t}$`,
 * `$\sigma(s, t|v) = 0$` ([2][]).
 *
 * ### Notes
 *
 * The algorithm is from Ulrik Brandes ([1][]):
 *
 * See ([2][]) for details on algorithms for variations and related metrics.
 *
 * For approximate betweenness calculations set `k=#samples` to use
 * `k` nodes ("pivots") to estimate the betweenness values. For an estimate
 * of the number of pivots needed see ([3][]).
 *
 * For weighted graphs the edge weights must be greater than zero.
 * Zero edge weights can produce an infinite number of equal length
 * paths between pairs of nodes.
 *
 * ### References
 *
 * [1] [A Faster Algorithm for Betweenness Centrality.
 *    Ulrik Brandes,
 *    Journal of Mathematical Sociology 25(2):163-177, 2001.][1]
 * [1]: http://www.inf.uni-konstanz.de/algo/publications/b-fabc-01.pdf
 *
 * [2] [Ulrik Brandes: On Variants of Shortest-Path Betweenness
 *    Centrality and their Generic Computation.
 *    Social Networks 30(2):136-145, 2008.][2]
 * [2]: http://www.inf.uni-konstanz.de/algo/publications/b-vspbc-08.pdf
 *
 * [3] [Ulrik Brandes and Christian Pich:
 *    Centrality Estimation in Large Networks.
 *    International Journal of Bifurcation and Chaos 17(7):2303-2318, 2007.][3]
 * [3]: http://www.inf.uni-konstanz.de/algo/publications/bp-celn-06.pdf
 *
 * @see edgeBetweennessCentrality
 * @see loadCentrality
 *
 * @param {!Graph} G A JSNetworkX graph
 * @param {{k: ?number, normalized: ?bool, weight: ?string,endpoints: ?bool}=} optParameters
 *   - `k` (int)
 *
 *     If `k` is defined use `k` node samples to estimate betweenness.
 *     The value of `k <= n` where `n` is the number of nodes in the graph.
 *     Higher values give better approximation.
 *   - `normalized` (bool)
 *
 *     If `true`, the betweenness values are normalized by `2/((n-1)(n-2))`
 *     for graphs and `1/((n-1)(n-2))` for directed graphs where `n` is the
 *     number of nodes in G.
 *   - `weight` (default=null)
 *
 *     If null, all edge weights are considered equal.
 *     Otherwise holds the name of the edge attribute used as weight.
 *
 *   - `endpoints` (default=false)
 *
 *     If true include the endpoints in the shortest path counts.
 *
 * @return {Map} object with node keys with betweenness centrality as the value.
 */
export function betweennessCentrality(G: Graph, optArgDict?: {}): Map;
/**
 * Compute betweenness centrality for edges.
 *
 * Betweenness centrality of an edge `$e$` is the sum of the
 * fraction of all-pairs shortest paths that pass through `$e$`:
 *
 * ```math
 * c_B(v) = \sum_{s,t \in V} \frac{\sigma(s, t|e)}{\sigma(s, t)}
 * ```
 *
 * where `$V$` is the set of nodes, `$\sigma(s, t)$` is the number of
 * shortest `$(s, t)$`-paths, and `$\sigma(s, t|e)$` is the number of
 * those paths passing through edge `$e$` ([2][]).
 *
 * ### Notes
 *
 * The algorithm is from Ulrik Brandes ([1][]).
 *
 * For weighted graphs the edge weights must be greater than zero.
 * Zero edge weights can produce an infinite number of equal length
 * paths between pairs of nodes.
 *
 * ### References
 *
 * [1] [A Faster Algorithm for Betweenness Centrality. Ulrik Brandes,
 *    Journal of Mathematical Sociology 25(2):163-177, 2001.][1]
 * [1]: http://www.inf.uni-konstanz.de/algo/publications/b-fabc-01.pdf
 * [2] [Ulrik Brandes: On Variants of Shortest-Path Betweenness
 *    Centrality and their Generic Computation.
 *    Social Networks 30(2):136-145, 2008.][2]
 * [2]: http://www.inf.uni-konstanz.de/algo/publications/b-vspbc-08.pdf
 *
 * @see betweennessCentrality
 * @see edgeLoad
 *
 * @param {!Graph} G A NetworkX graph
 * @param {{normalized: bool=, weight: string=}=} optArgDict
 *   - `normalized` (default=false)
 *
 *     If true the betweenness values are normalized by `2/(n(n-1))`
 *     for graphs, and `1/(n(n-1))` for directed graphs where `n`
 *     is the number of nodes in G.
 *
 *   - `weight` (default=null)
 *
 *     If null, all edge weights are considered equal.
 *     Otherwise holds the name of the edge attribute used as weight.
 *
 * @return {Map} object with edge keys with betweenness centrality as the value.
*/
export function edgeBetweennessCentrality(G: Graph, optArgDict?: {
    normalized: bool;
    weight: string;
} | undefined): Map;
import { Map } from '../../_internals';
