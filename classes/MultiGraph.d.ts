/**
 * An undirected graph class that can store multiedges.
 *
 * Multiedges are multiple edges between two nodes.  Each edge
 * can hold optional data or attributes. A MultiGraph holds undirected edges.
 * Self loops are allowed.
 *
 * Edges are represented as links between nodes with optional
 * key/value attributes.
 *
 * ### Examples
 *
 * Create an empty graph structure (a "null graph") with no nodes and no edges.
 *
 * ```
 * var G = jsnx.MultiGraph();
 * ```
 *
 * G can be grown in several ways.
 *
 * #### Nodes
 *
 * Add one node at a time:
 *
 * ```
 * G.addNode(1);
 * ```
 *
 * Add the nodes from any iterable:
 *
 * ```
 * G.addNodesFrom([2, 3]);
 * var H = jsnx.Graph();
 * H.addPath([0,1,2,3,4,5,6,7,8,9]);
 * G.addNodesFrom(h);
 * ```
 *
 * In addition to strings and integers, any object that implements a custom
 * `toString` method can be used as node. For example, arrays:
 *
 * ```
 * G.addNode([1,2]);
 * ```
 *
 * #### Edges
 *
 * A graph can also be grown by adding edges.
 *
 * Add one edge,
 *
 * ```
 * G.addEdge(1, 2);
 * ```
 *
 * a list or collection of edges,
 *
 * ```
 * G.addEdgesFrom([[1,2], [1,3]]);
 * G.addEdgesFrom(H.edges());
 * ```
 *
 * If some edges connect nodes not yet in the graph, the nodes are added
 * automatically. If an edge already exists, an addition edge is created and
 * stored using a key to identify the edge. By default, the key is the lowest
 * unused integer.
 *
 * ```
 * G.addEdgesFrom([[4,5,{route: 282}], [4,5,{route: 37}]]);
 * G.get(4);
 * // Map { 3: {0: {}}, 5: {0: {}, 1: {route: 282}, 2: {route: 37}}}
 * ```
 *
 * #### Attributes
 *
 * Each graph, node and edge can hold key/value attribute pairs in an associated
 * attribute "dictionary" (object). By defauly these are empty, but can be added
 * or changed using `addEdge` or `addNode`.
 *
 * ```
 * var G = jsnx.MultiGraph(null, {day: Friday}):
 * G.graph
 * // {day: 'Friday'}
 *
 * G.addNode(1, {time: '5pm'});
 * G.addNodesFrom([3], {time: '2pm'});
 * G.nodes(true);
 * // [[1, {time: '5pm'}], [3, {time: '2pm'}]]
 * ```
 *
 * @see Graph
 * @see DiGraph
 * @see MultiDiGraph
 *
 */
export default class MultiGraph extends Graph {
    /**
     * @param {?} optData Data to initialze graph.
     *      If no data is provided, an empty graph is created. The data can be
     *      an edge list or any graph object.
     * @param {Object=} optAttr Attributes to add to graph as key=value pairs.
     */
    constructor(optData: unknown, optAttr?: any | undefined);
    /**
     * Add an edge between u and v.
     *
     * The nodes u and v will be automatically added if they are
     * not already in the graph.
     *
     * Edge attributes can be specified with keywords or by providing
     * a dictionary with key/value pairs.
     *
     * ### Notes:
     *
     * To replace/update edge data, use the optional key argument
     * to identify a unique edge.  Otherwise a new edge will be created.
     *
     * NetworkX algorithms designed for weighted graphs cannot use
     * multigraphs directly because it is not clear how to handle
     * multiedge weights.  Convert to Graph using edge attribute
     * 'weight' to enable weighted graph algorithms.
     *
     * ### Example
     *
     * The following all add the edge [1,2] to the graph G:
     *
     * ```
     * var G = jsnx.MultiGraph();
     * var e = [1,2];
     * G.addEdge(1, 2);
     * G.addEdge.apply(G, e);
     * G.addEdgesFrom([e]);
     * ```
     * Associate data to edges by passing a data object:
     *
     * ```
     * G.addEdge(1, 2, {weight: 3});
     * G.addEdge(1, 2, 0, {weight: 4}); // update data for key=0
     * G.addEdge(1, 3, {weight: 7, capacity: 15, length: 342.7});
     * ```
     * @see #addEdgesFrom
     *
     * @param {Node} u node
     * @param {Node} v node
     * @param {?(number|string)=} optKey identifier
     *      Used to distinguish multiedges between a pair of nodes. Default is
     *      the lowest unused integer.
     * @param {?Object=} optAttrDict  Dictionary of edge attributes.
     *      Key/value pairs will update existing data associated with the edge.
     */
    addEdge(u: Node, v: Node, optKey?: ((number | string) | null) | undefined, optAttrDict?: (any | null) | undefined): void;
    /**
     * Remove an edge between u and v.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addPath([0,1,2,3]);
     * G.removeEdge(0, 1);
     * ```
     *
     * For multiple edges
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addEdgesFrom([[1,2], [1,2], [1,2]]);
     * G.removeEdge(1, 2); // remove a single edge
     * ```
     *
     * For edges with keys
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addEdge(1, 2, 'first');
     * G.addEdge(1, 2, 'second');
     * G.removeEdge(1, 2, 'second');
     * ```
     *
     * @see #removeEdgesFrom
     *
     * @param {Node} u
     * @param {Node} v
     * @param {(number|string)=} optKey
     *      Used to distinguish multiple edges between a pair of nodes.
     *      If null or undefined remove a single (arbitrary) edge between u and v.
     */
    removeEdge(u: Node, v: Node, optKey?: (number | string) | undefined): void;
    /**
     * Return True if the graph has an edge between nodes u and v.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addPath([0,1,2,3]);
     * G.hasEdge(0,1);
     * // true
     * G.addEdge(0, 1, 'a');
     * G.hasEdge(0, 1, 'a');
     * // true
     * ```
     *
     * The following syntax are equivalent:
     *
     * ```
     * G.hasEdge(0, 1);
     * // true
     * G.get(0).has(1);
     * // true
     * ```
     *
     * @param {Node} u node
     * @param {Node} v node
     * @param {(string|number)=} optKey If specified return true only
     *      if the edge with key is found.
     *
     * @return {boolean} true if edge is in the graph, false otherwise.
     */
    hasEdge(u: Node, v: Node, optKey?: (string | number) | undefined): boolean;
    /**
     * Return a list of edges.
     *
     * Edges are returned as tuples with optional data and keys in the order
     * (node, neighbor, key, data).
     *
     * Nodes in `nbunch` that are not in the graph will be (quietly) ignored.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addPath([0,1,2,3]);
     * G.edges();
     * // [[0,1], [1,2], [2,3]]
     * G.edges(true);
     * // [[0,1,{}], [1,2,{}], [2,3,{}]]
     * G.edges(false, true);
     * // [[0,1,0], [1,2,0], [2,3,0]]
     * G.edges(true, true);
     * // [[0,1,0,{}], [1,2,0,{}], [2,3,0,{}]]
     * G.edges([0,3]);
     * // [[0,1], [3, 2]]
     * G.edges(0);
     * // [[0,1]]
     * ```
     *
     * @see #edgesIter
     *
     * @param {?NodeContainer=} optNbunch A container of nodes.
     *      The container will be iterated through once.
     * @param {?boolean=} optData (default=False)
     *      Return two tuples (u,v) (False) or three-tuples (u,v,data) (True).
     * @param {?boolean=} optKeys (default=False)
     *      Return two tuples (u,v) (False) or three-tuples (u,v,key) (True).
     *
     * @return {!Array} list of edge tuples
     *      Edges that are adjacent to any node in nbunch, or a list
     *      of all edges if nbunch is not specified.
     */
    edges(optNbunch?: NodeContainer, optData?: (boolean | null) | undefined, optKeys?: (boolean | null) | undefined): any[];
    /**
     * Return an iterator over edges.
     *
     * Edges are returned as tuples with optional data and keys
     * in the order (node, neighbor, key, data).
     *
     * Nodes in nbunch that are not in the graph will be (quietly) ignored.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.edgesIter);
     * // [[0,1], [1,2], [2,3]]
     * Array.from(G.edges(true));
     * // [[0,1,{}], [1,2,{}], [2,3,{}]]
     * Array.from(G.edges(false, true));
     * // [[0,1,0], [1,2,0], [2,3,0]]
     * Array.from(G.edges(true, true));
     * // [[0,1,0,{}], [1,2,0,{}], [2,3,0,{}]]
     * Array.from(G.edges([0,3]));
     * // [[0,1], [3, 2]]
     * Array.from(G.edges(0));
     * // [[0,1]]
     * ```
     *
     * @see #edges
     *
     * @param {?(NodeContainer|boolean)=} optNbunch A container of nodes.
     *      The container will be iterated through once.
     * @param {?boolean=} optData (default=False)
     *      If True, return edge attribute dict with each edge.
     * @param {?boolean=} optKeys (default=False)
     *      If True, return edge keys with each edge.
     *
     * @return {!Iterator}
     *      An iterator of (u,v), (u,v,d) or (u,v,key,d) tuples of edges.
     *
     * @override
     * @export
     */
    override edgesIter(optNbunch?: ((NodeContainer | boolean) | null) | undefined, optData?: (boolean | null) | undefined, optKeys?: (boolean | null) | undefined): Iterator;
    /**
     * Return the attribute dictionary associated with edge (u,v).
     *
     * ### Example
     *
     * ```
     * var G = jsnx.MultiGraph();
     * G.addPath([0,1,2,3]);
     * G.getEdgeData(0, 1);
     * // {0: {}}
     * G.getEdgeData('a', 'b', null, 0); // edge not in graph, return 0
     * // 0
     * ```
     *
     * @param {Node} u node
     * @param {Node} v node
     * @param {(string|number)=} optKey Return data only for the edge with
     *      specified key.
     * @param {T=} optDefault Value to return if the edge (u,v) is not found.
     *
     * @return {(Object|T)} The edge attribute dictionary.
     * @template T
     */
    getEdgeData<T>(u: Node, v: Node, optKey?: (string | number) | undefined, optDefault?: T): any;
    /**
     * Return a list of selfloop edges.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiGraph();
     * G.addEdge(1, 1);
     * G.addEdge(1, 2);
     * G.selfloopEdges();
     * // [[1,1]]
     * G.selfloopEdges(true);
     * // [[1,1,{}]]
     * G.selfloopEdges(false, true);
     * // [[1,1,0]]
     * G.selfloopEdges(true, true);
     * // [[1,1,0,{}]]
     * ```
     *
     * @see #nodesWithSelfloops
     * @see #numberOfSelfloops
     *
     *
     * @param {boolean=} optData  (default=False)
     *      Return selfloop edges as two tuples (u,v) (data=False)
     *      or three-tuples (u,v,data) (data=True)
     * @param {boolean=} optKeys  (default=False)
     *       If True, return edge keys with each edge
     *
     * @return {Array} A list of all selfloop edges
     */
    selfloopEdges(optData?: boolean | undefined, optKeys?: boolean | undefined): any[];
    /**
     * Return the subgraph induced on nodes in nbunch.
     *
     * The induced subgraph of the graph contains the nodes in nbunch and the
     * edges between those nodes.
     *
     * ### Notes
     *
     * The graph, edge or node attributes just point to the original graph.
     * So changes to the node or edge structure will not be reflected in
     * the original graph while changes to the attributes will.
     *
     * To create a subgraph with its own copy of the edge/node attributes use:
     * `jsnx.Graph(G.subgraph(nbunch))`
     *
     * If edge attributes are containers, a deep copy can be obtained using:
     * `G.subgraph(nbunch).copy()`.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.Graph();
     * G.addPath([0,1,2,3]);
     * var H = G.subgraph([0,1,2]);
     * H.edges();
     * // [[0,1], [1,2]]
     * ```
     *
     * @param {NodeContainer=} nbunch A container of nodes which will be
     *      iterated through once.
     * @return {MultiGraph} A subgraph of the graph with the same edge attributes.
     */
    subgraph(nbunch?: NodeContainer): MultiGraph;
}
import Graph from './Graph';
