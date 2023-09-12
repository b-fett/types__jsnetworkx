/**
 * Compute the number of triangles.
 *
 * Finds the number of triangles that include a node as one vertex.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.completeGraph(5);
 * jsnx.triangles(G, 0);
 * // 6
 * jsnx.triangles(G);
 * Map {0: 6, 1: 6, 2: 6, 3: 6, 4: 6}
 * Array.from(jsnx.triangles(G, [0,1]).values());
 * // [6, 6]
 * ```
 *
 * ### Notes
 *
 * When computing triangles for the entire graph each triangle is counted
 * three times, once at each node.  Self loops are ignored.
 *
 * @param {Graph} G A JSnetworkX graph
 * @param {Iterable=} optNodes (default: all nodes)
 *      Compute triangles for nodes in this container.
 *
 * @return {!(Map|number)} Number of triangles keyed by node label.
 */
export function triangles(G: Graph, optNodes?: Iterable): (Map | number);
/**
 * Compute the average clustering coefficient for the graph G.
 *
 * The clustering coefficient for the graph is the average,
 *
 * ```math
 * C = \frac{1}{n}\sum_{v \in G} c_v
 * ```
 *
 * where `$n$` is the number of nodes in `$G$`.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.completeGraph(5);
 * jsnx.averageClustering(G);
 * // 1
 * ```
 *
 * ### Notes
 *
 * Self loops are ignored.
 *
 *
 * ### References
 *
 * [1] [Generalizations of the clustering coefficient to weighted
 *     complex networks by J. Saramäki, M. Kivelä, J.-P. Onnela,
 *     K. Kaski, and J. Kertész, Physical Review E, 75 027105 (2007).][1]
 * [1]: http://jponnela.com/web_documents/a9.pdf
 * [2] [Marcus Kaiser,  Mean clustering coefficients: the role of isolated
 *     nodes and leafs on clustering measures for small-world networks.][2]
 * [2]:http://arxiv.org/abs/0802.2512
 *
 * @param {Graph} G graph
 * @param {?Iterable} optNodes (default: all nodes)
 *    Compute average clustering for nodes in this container.
 * @param {?string=} optWeight (default: null)
 *    The edge attribute that holds the numerical value used as a weight.
 *    If `null`, then each edge has weight `1`.
 * @param {?boolean=} optCountZeros
 *    If `false` include only the nodes with nonzero clustering in the average.
 * @return {number}
 */
export function averageClustering(G: Graph, optNodes: Iterable, optWeight?: (string | null) | undefined, optCountZeros?: (boolean | null) | undefined): number;
/**
 * Compute the clustering coefficient for nodes.
 *
 * For unweighted graphs the clustering of each node `$u$`
 * is the fraction of possible triangles through that node that exist,
 *
 * ```math
 * c_u = \frac{2 T(u)}{deg(u)(deg(u)-1)}
 * ```
 *
 * where `$T(u)$` is the number of triangles through node `$u$` and `$deg(u)$`
 * is the degree of `$u$`.
 *
 * For weighted graphs the clustering is defined as the geometric average of
 * the subgraph edge weights,
 *
 * ```math
 * c_u = \frac{1}{deg(u)(deg(u)-1)}
 *       \sum_{uv} (\hat{w}_{uv} \hat{w}_{uw} \hat{w}_{vw})^{1/3}
 * ```
 *
 * The edge weights `$\hat{w}_{uv}$` are normalized by the maximum weight in the
 * network `$\hat{w}_{uv} = w_{uv}/\max(2)$`.
 *
 * The value `$c_u$` is assigned to `$0$` if `$deg(u) < 2$`.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.completeGraph(5);
 * jsnx.clustering(G, 0);
 * // 1
 * jsnx.clustering(G);
 * // Map {0: 1, 1: 1, 2: 1, 3: 1, 4: 1}
 * ```
 *
 * @param {Graph} G graph
 * @param {?Iterable=} optNodes (default: all nodes)
 *      Compute average clustering for nodes in this container.
 * @param {?string=} optWeight (default: null)
 *  If the edge attribute that holds the numerical value used as a weight.
 *  If `null`, then each edge has weight `1`.
 *
 * @return {!(number|Map)} Clustering coefficient at specified nodes
 */
export function clustering(G: Graph, optNodes?: Iterable, optWeight?: (string | null) | undefined): (number | Map);
/**
 * Compute graph transitivity, the fraction of all possible triangles
 * present in G.
 *
 * Possible triangles are identified by the number of "triads"
 * (two edges with a shared vertex).
 *
 * The transitivity is
 *
 * ```math
 * T = 3\frac{\#triangles}{\#triads}
 * ```
 *
 * ### Example
 *
 * ```
 * var G = jsnx.completeGraph(5);
 * jsnx.transitivity(G);
 * // 1
 * ```
 *
 * @param {Graph} G graph
 * @return {number} Transitivity
 */
export function transitivity(G: Graph): number;
/**
 * Compute the squares clustering coefficient for nodes.
 *
 * For each node return the faction of possible squares that exist at the node
 *
 * ```math
 * C_4(v) = \frac{ \sum_{u=1}^{k_v}
 * \sum_{w=u+1}^{k_v} q_v(u,w) }{ \sum_{u=1}^{k_v}
 * \sum_{w=u+1}^{k_v} [a_v(u,w) + q_v(u,w)]}
 * ```
 *
 * where `$q_v(u,w)$` are the number of common neighbors of `$u$` and `$v$`
 * other than `$v$` (i.e. squares), and
 * `$a_v(u,w) = (k_u-(1+q_v(u,w)+\theta_{uv}))(k_w-(1+q_v(u,w)+\theta_{uw}))$`
 * where `$\theta_{uw} = 1$` if `$u$` and `$w$` are  connected and `$0$`
 * otherwise.
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.completeGraph(5);
 * jsnx.squareClustering(G, 0);
 * // 1
 * jsnx.squareClustering(G);
 * // Map {0: 1, 1: 1, 2: 1, 3: 1, 4: 1}
 * ```
 *
 * ### Notes
 *
 * While `$C_3(v)$` (triangle clustering) gives the probability that
 * two neighbors of node `$v$` are connected with each other, `$C_4(v)$` is
 * the probability that two neighbors of node `$v$` share a common
 * neighbor different from `$v$`. This algorithm can be applied to both
 * bipartite and unipartite networks.
 *
 * @param {Graph} G graph
 * @param {Iterable=} opt_nodes (default: all)
 *   Compute clustering for nodes in this container.
 *
 * @return {!(Map|number)}
 *      A dictionary keyed by node with the square clustering coefficient value.
 */
export function squareClustering(G: Graph, optNodes: any): (Map | number);
import { Map } from '../_internals';
