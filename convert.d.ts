/**
 * Make a JSNetworkX graph from a known data structure.
 *
 * The preferred way to call this is automatically from the class constructor
 *
 * ```
 * var data = {0: {1 : {weight: 1}}} // object of objects single edge (0,1)
 * var G = new jsnx.Graph(d);
 * ```
 *
 * instead of the equivalent
 *
 * ```
 * var G = jsnx.fromDictOfDicts(d);
 * ```
 *
 * @param {?} data An object to be converted
 *   Current accepts types are:
 *
 *   - any JSNetworkX graph
 *   - object of objects
 *   - object of lists
 *   - list of edges
 *
 * @param {Graph=} optCreateUsing NetworkX graph
 *     Use specified graph for result.  Otherwise a new graph is created.
 * @param {boolean=} optMultigraphInput
 *     If `true` and  `data` is an object of objects,
 *     try to create a multigraph assuming object of objects of lists
 *     If data and createUsing are both multigraphs then create
 *     a multigraph from a multigraph.
 * @return {Graph}
 */
export function toNetworkxGraph(data: unknown, optCreateUsing?: Graph, optMultigraphInput?: boolean | undefined): Graph;
/**
 * Return a new undirected representation of the graph G.
 *
 * @param {Graph} G Graph to convert
 * @return {!Graph}
 */
export function convertToUndirected(G: Graph): Graph;
/**
 * Return a new directed representation of the graph G.
 *
 * @param {Graph} G Graph to convert
 * @return {!Graph}
 */
export function convertToDirected(G: Graph): Graph;
/**
 * Return adjacency representation of graph as a dictionary of lists.
 *
 * Completely ignores edge data for MultiGraph and MultiDiGraph.
 *
 * @param {Graph} G A JSNetworkX graph
 * @param {Iterable=} optNodelist Use only nodes specified in nodelist
 *
 * @return {!Object.<Array>}
 */
export function toDictOfLists(G: Graph, optNodelist?: Iterable): any;
/**
 * Return a graph from a dictionary of lists.
 *
 * ### Examples
 *
 * ```
 * var data = {0: [1]}; // single edge (0,1)
 * var G = jsnx.fromDictOfLists(data);
 * // or
 * var G = new jsnx.Graph(data);
 * ```
 *
 * @param {!Object.<Array>} d A dictionary of lists adjacency representation.
 * @param {Graph=} optCreateUsing Use specified graph for result.
 *    Otherwise a new graph is created.
 * @return {!Graph}
 */
export function fromDictOfLists(d: any, optCreateUsing?: Graph): Graph;
/**
 * Return adjacency representation of graph as a dictionary of dictionaries.
 *
 * @param {Graph} G A jsnx Graph
 * @param {Iterable=} optNodelist Use only nodes specified in nodelist
 * @param {Object=} optEdgeData If provided,  the value of the dictionary will
 *      be set to edgeData for all edges.  This is useful to make
 *      an adjacency matrix type representation with 1 as the edge data.
 *      If edgedata is null or undefined, the edgedata in G is used to fill
 *      the values.
 *      If G is a multigraph, the edgedata is a dict for each pair (u,v).
 * @return {!Object.<Object>}
 */
export function toDictOfDicts(G: Graph, optNodelist?: Iterable, optEdgeData?: any | undefined): any;
/**
 * Return a graph from a dictionary of dictionaries.
 *
 *
 * ### Examples
 *
 * ```
 * var data = {0: {1: {weight: 1}}}; // single edge (0,1)
 * var G = jsnx.fromDictOfDicts(data);
 * // or
 * var G = new jsnx.Graph(data);
 * ```
 *
 * @param {!Object.<!Object>} d A dictionary of dictionaries adjacency
 *      representation.
 * @param {Graph=} optCreateUsing Use specified graph for result.
 *      Otherwise a new graph is created.
 * @param {boolean=} optMultigraphInput
 *      When `true`, the values of the inner object are assumed
 *      to be containers of edge data for multiple edges.
 *      Otherwise this routine assumes the edge data are singletons.
 *
 * @return {Graph}
 */
export function fromDictOfDicts(d: any, optCreateUsing?: Graph, optMultigraphInput?: boolean | undefined): Graph;
/**
 * Return a list of edges in the graph.
 *
 * @param {Graph} G A JSNetworkX graph
 * @param {Iterable=} optNodelist Use only nodes specified in nodelist
 * @return {!Array}
 */
export function toEdgelist(G: Graph, optNodelist?: Iterable): any[];
/**
 * Return a graph from a list of edges.
 *
 * @param {Array.<Array>} edgelist Edge tuples
 * @param {Graph=} optCreateUsing Use specified graph for result.
 *      Otherwise a new graph is created.
 * @return {!Graph}
 */
export function fromEdgelist(edgelist: Array<any[]>, optCreateUsing?: Graph): Graph;
