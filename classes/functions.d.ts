/**
 * Return a copy of the graph nodes in a list.
 *
 * @param {Graph} G Graph
 * @return {Array} List of nodes
 */
export function nodes(G: Graph): any[];
/**
 * Return an iterator over the graph nodes.
 *
 * @param {Graph} G Graph
 * @return {Iterator} Iterator over graph nodes
 */
export function nodesIter(G: Graph): Iterator;
/**
 * Return a list of edges adjacent to nodes in nbunch.
 *
 * Return all edges if nbunch is unspecified or nbunch=None.
 * For digraphs, edges=out_edges
 *
 * @param {Graph} G Graph
 * @param {NodeContainer=} opt_nbunch Nodes
 * @return {Array} List of edges
 */
export function edges(G: Graph, optNbunch: any): any[];
/**
 * Return iterator over  edges adjacent to nodes in nbunch.
 *
 * Return all edges if nbunch is unspecified or nbunch=None.
 * For digraphs, edges=out_edges
 *
 * @param {Graph} G Graph
 * @param {NodeContainer=} opt_nbunch Nodes
 * @return {Iterator} Iterator over edges
 */
export function edgesIter(G: Graph, optNbunch: any): Iterator;
/**
 * Return degree of single node or of nbunch of nodes.
 * If nbunch is omitted, then return degrees of *all* nodes.
 *
 * @param {Graph} G Graph
 * @param {NodeContainer=} opt_nbunch Nodes
 * @param {string=} opt_weight Weight attribute name
 * @return {(number|Map)} Degree of node(s)
 */
export function degree(G: Graph, optNbunch: any, optWeight: any): (number | Map);
/**
 * Return a list of nodes connected to node n.
 *
 * @param {Graph} G Graph
 * @param {Node} n Node
 * @return {Array} List of nodes
 */
export function neighbors(G: Graph, n: Node): any[];
/**
 * Return the number of nodes in the graph.
 *
 * @param {Graph} G Graph
 * @return {number} Number of nodes
 */
export function numberOfNodes(G: Graph): number;
/**
 * Return the number of edges in the graph.
 *
 * @param {Graph} G Graph
 * @return {number} Number of edges
 */
export function numberOfEdges(G: Graph): number;
/**
 * Return the density of a graph.
 * The density for undirected graphs is
 *
 * ```math
 * d = \frac{2m}{n(n-1)}
 * ```
 *
 * and for directed graphs is
 *
 * ```math
 * \frac{m}{n(n-1)}
 * ```
 *
 * where n is the number of nodes and m is the number of edges in G
 *
 * The density is 0 for an graph without edges and 1.0 for a complete graph.
 * The density of multigraphs can be higher than 1.
 *
 * @param {Graph} G Graph
 * @return {number} Density
 */
export function density(G: Graph): number;
/**
 * Return a list of the frequency of each degree value.
 *
 * Note: the bins are width one, hence list.length can be large
 * (Order(number_of_edges))
 *
 *
 * @param {Graph} G Graph
 * @return {Array} A list of frequencies of degrees.
 *      The degree values are the index in the list.
 */
export function degreeHistogram(G: Graph): any[];
/**
 * Return True if graph is directed.
 *
 * @param {Graph} G Graph
 * @return {boolean}  True if graph is directed
 */
export function isDirected(G: Graph): boolean;
/**
 * Modify graph to prevent addition of nodes or edges.
 *
 * This does not prevent modification of edge data.
 * To "unfreeze" a graph you must make a copy.
 *
 * @see #is_frozen
 *
 * @param {Graph} G Graph
 * @return {Graph} A reference to the input graph
 */
export function freeze(G: Graph): Graph;
/**
 * Return True if graph is frozen.
 *
 * @see #freeze
 *
 * @param {Graph} G Graph
 * @return {boolean}  True if graph is frozen.
 */
export function isFrozen(G: Graph): boolean;
/**
 * Return the subgraph induced on nodes in nbunch.
 *
 * Note:  subgraph(G) calls G.subgraph()
 *
 * @param {Graph} G Graph
 * @param {NodeContainer} nbunch
 *      A container of nodes that will be iterated through once (thus
 *      it should be an iterator or be iterable).  Each element of the
 *      container should be a valid node type: any hashable type except
 *      None.  If nbunch is None, return all edges data in the graph.
 *      Nodes in nbunch that are not in the graph will be (quietly)
 *      ignored.
 * @return {Graph} Subgraph
 */
export function subgraph(G: Graph, nbunch: NodeContainer): Graph;
/**
 * Return a copy of the graph G with all of the edges removed.
 *
 * Notes: Graph, node, and edge data is not propagated to the new graph.
 *
 * @param {Graph} G Graph
 * @param {boolean} opt_with_nodes (default=True)
 *      Include nodes.
 *
 * @return {Graph} A copy of the graph
 */
export function createEmptyCopy(G: Graph, optWithNodes?: boolean): Graph;
/**
 * Print short summary of information for the graph G or the node n.
 *
 * @param {Graph} G Graph
 * @param {Node=} opt_n A node in the graph G
 * @return {string} Info
 */
export function info(G: Graph, optN: any): string;
/**
 * Set node attributes from dictionary of nodes and values
 *
 * @param {Graph} G Graph
 * @param {string} name Attribute name
 * @param {(Object|Map)} attributes Dictionary of attributes keyed by node
 */
export function setNodeAttributes(G: Graph, name: string, attributes: (any | Map)): void;
/**
 * Get node attributes from graph
 *
 * @param {Graph} G Graph
 * @param {string} name Attribute name
 * @return {!Map} Dictionary of attributes keyed by node.
 */
export function getNodeAttributes(G: Graph, name: string): Map;
/**
 * Set edge attributes from dictionary of edge tuples and values
 *
 * @param {Graph} G Graph
 * @param {string} name Attribute name
 * @param {Map} attributes
 *    Dictionary of attributes keyed by edge (tuple).
 */
export function setEdgeAttributes(G: Graph, name: string, attributes: Map): void;
/**
 * Get edge attributes from graph
 *
 * Since keys can only be strings in JavaScript, the edge is returned as
 * {@code "node1,node2"} string. You'd have to call {@code .split(',')} on
 * the keys to extract the actual node names.
 *
 * @param {Graph} G Graph
 * @param {string} name Attribute name
 * @return {!Map} Dictionary of attributes keyed by edge.
 */
export function getEdgeAttributes(G: Graph, name: string): Map;
