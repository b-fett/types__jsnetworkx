/**
 * Return a small undirected graph described by `graphDescription`.
 *
 * @see makeSmallGraph.
 *
 * @param {Array} graphDescription
 *    Description of the graph to create in the form `{type, name, n, list}`.
 * @param {Graph=}
 *    optCreateUsing Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function makeSmallUndirectedGraph(graphDescription: any[], optCreateUsing?: Graph): Graph;
/**
 * Return the small graph described by graph_description.
 *
 * `graphDescription` is a list of the form `{type, name, n, list}`.
 *
 * Here `ltype` is one of `"adjacencylist"` or `"edgelist"`,
 * `name` is the name of the graph and `n` the number of nodes.
 * This constructs a graph of `n` nodes with integer labels 0,..,n-1.
 *
 * If `ltype="adjacencylist"` then `xlist` is an adjacency list
 * with exactly `n` entries, in with the `j`'th entry (which can be empty)
 * specifies the nodes connected to vertex `j`.
 *
 * E.g. the "square" graph `$C_4$` can be obtained by
 *
 * ```
 * var G = makeSmallGraph({
 *   type: "adjacencylist",
 *   name: "C_4",
 *   n: 4,
 *   list: [[2,4],[1,3],[2,4],[1,3]]
 * });
 * ```
 *
 * or, since we do not need to add edges twice,
 *
 * ```
 * var G = makeSmallGraph({
 *   type: "adjacencylist",
 *   name: "C_4",
 *   n: 4,
 *   list: [[2,4],[3],[4],[]]]
 * });
 * ```
 *
 * If `ltype="edgelist"` then `xlist` is an edge list written as
 * `[[v1,w2],[v2,w2],...,[vk,wk]]`, where `vj` and `wj` integers in the range
 * 1,..,n
 *
 * E.g. the "square" graph `$C_4$` can be obtained by
 *
 * ```
 * var G = makeSmallGraph({
 *   type: "edgelist",
 *   name: "C_4",
 *   n: 4,
 *   list: [[1,2],[3,4],[2,3],[4,1]]]
 * });
 * ```
 *
 * Use the `optCreateUsing` argument to choose the graph class/type.
 *
 * @param {Array} graphDescription
 *    Description of the graph to create in the form `{type, name, n, list}`.
 * @param {Graph=} optCreateUsing Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function makeSmallGraph({ type, name, n, list }: any[], optCreateUsing?: Graph): Graph;
/**
 * Return the Bull graph.
 *
 * @param {Graph=} optCreateUsing  Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function bullGraph(optCreateUsing?: Graph): Graph;
/**
 * Return the Krackhardt Kite Social Network.
 *
 * A 10 actor social network introduced by David Krackhardt
 * to illustrate: degree, betweenness, centrality, closeness, etc.
 * The traditional labeling is:
 * Andre=1, Beverley=2, Carol=3, Diane=4,
 * Ed=5, Fernando=6, Garth=7, Heather=8, Ike=9, Jane=10.
 *
 * @param {Graph=} opt_create_using Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function krackhardtKiteGraph(optCreateUsing: any): Graph;
