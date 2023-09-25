/**
 * A directed graph class that can store multiedges.
 *
 * Multiedges are multiple edges between two nodes. Each edge can hold optional
 * data or attributes.
 *
 * A MultiDiGraph holds directed edges. Self loops are allowed. Edges are
 * respresented as links between nodes with optional key/value attributes.
 *
 * ### Example
 *
 * Create an empty graph structure (a "null graph") with no nodes and no edges:
 *
 * ```
 * var G = new jsnx.MultiDiGraph();
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
 * G.addNodesFrom([2,3]);
 * var H = new jsnx.Graph();
 * H.addPath([0,1,2,3,4,5]);
 * G.addNodesFrom(H);
 * ```
 *
 * In addition to strings and integers, any object that implements a custom
 * `toString` method can represent a node.
 *
 * #### Edges
 *
 * `G` can also be grown by adding edges. Add one edge,
 *
 * ```
 * G.addEdge(1, 2);
 * ```
 *
 * a list of edges,
 *
 * ```
 * G.addEdgesFrom([[1,2], [1,3]]);
 * ```
 *
 * or a collection of edges
 *
 * ```
 * G.addEdgesFrom(H.edges());
 * ```
 *
 * If some edges connect nodes not yet in the graph, the nodes are added
 * automatically. If an edge already exists, an additional edge is created and
 * stored using a key to identify the edge. By default the key is the lowest
 * unused integer.
 *
 * ```
 * G.addEdgesFrom([[4,5,{route:282}], [4,5,{route:37}]]);
 * G.get(4);
 * // Map {5: {0: {}, 1: {route: 282}, 2: {route: 37}}}
 *
 * #### Attributes
 *
 * Each graph, node and edge can hold key/value attribute pairs in an associated
 * attribute object. By default these are empty, but can be added or changed
 * using `addEdge` or `addNode`.
 *
 * ```
 * G.addNode(1, {time: '5pm'});
 * G.addNodesFrom([3], {time: '2pm'});
 * G.nodes(true);
 * // [[1, {time: '5pm'}], [3, {time: '2pm'}]]
 * ```
 *
 * Add edge attributes using `addEdge` and `addEdgesFrom`:
 *
 * ```
 * G.addEdge(1, 2, {weight: 4.7});
 * G.addEdgesFrom([[3,4], [4,5]], {color: 'red'});
 * G.addEdgesFrom([[1,2,{color: 'blue'}], [2,3,{weight: 8}]]);
 * ```
 */

import Graph from './Graph'
export default class MultiDiGraph<Node = unknown> extends DiGraph<Node> {
    /**
     * @param {(Object|Array|Graph)} optData Data to initialize graph.
     *   If no data is passed, an empty graph is created. The data can be an edge
     *   list, or any JSNetworkX graph object.
     * @param {Object=} opt_attr (default= no attributes)
     *       Attributes to add to graph as key=value pairs.
     */
    constructor(optData: (any | any[] | Graph<Node>), optAttr: any);
    /**
     * Add an edge between u and v.
     *
     * The nodes u and v will be automatically added if they are not already in
     * the graph.
     *
     * Edge attributes can be specified by providing an object with key/value
     * pairs.
     *
     * ### Note
     *
     * To replace/update edge data, use the optional key argument to identify a
     * unique edge. Otherwise a new edge will be created.
     *
     * ### Example
     *
     * The following add the edge e=(1,2) to graph G:
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addEdge(1, 2);
     * G.addEdgesFrom([[1,2]]);
     * ```
     *
     * Associate data to edges using keywords:
     *
     * ```
     * G.addEdge(1, 2, {weight: 3});
     * G.addEdge(1, 2, 0, {weight: 4}); // update data for key=0
     * G.addEdge(1, 3, {weight: 7, capacity: 15, length: 342.7});
     * ```
     * @param {Node} u
     * @param {Node} v
     * @param {(string|number)} optKey (default=lowest unused integer) Used to
     *   distinguish multiedges between a pair of nodes.
     * @param {Object} opAttrDict Object of edge attributes. Key/value pairs will
     *   update existing data associated with the edge.
     */
    addEdge(u: Node, v: Node, optAttrDict?: any): void;
    addEdge(u: Node, v: Node, optKey?: (string | number), optAttrDict?: any): void;
    /**
     * Remove an edge between u and v.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addPath([0,1,2,3]);
     * G.removeEdge(0, 1);
     * ```
     *
     * For multiple edges:
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addEdgesFrom([[1,2], [1,2], [1,2]]);
     * G.removeEdge(1, 2); // remove a single (arbitrary) edge
     * ```
     *
     * For edges with keys:
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addEdge(1, 2, 'first');
     * G.addEdge(1, 2, 'second');
     * G.removeEdge(1, 2, 'second');
     * ```
     * @param {Node} u
     * @param {Node} v
     * @param {(string|number)} optKey Used to distinguish multiple edges between
     *   a pair of nodes. If undefined, remove a single (arbitrary) edge between
     *   u and v.
     */
    removeEdge(u: Node, v: Node, optKey?: (string | number)): void;
    /**
     * Return an iterator over the edges.
     *
     * Edges are returned as tuples with optional data and keys in the order
     * `(node, neighbor, key, data)`.
     *
     * ### Note
     *
     * Nodes in `optNbunch` that are not in the graph will be (quietly) ignored.
     * For directed graphs this returns the out-edges.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.edgesIter());
     * // [[0,1], [1,2], [2,3]]
     * Array.from(G.edgesIter(true));
     * // [[0,1,{}], [1,2,{}], [2,3,{}]]
     * Array.from(G.edgesIter([0,2]));
     * // [[0,1], [2,3]]
     * ```
     *
     * @alias outEdgesIter
     *
     * @param {Iterable} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated over only once.
     * @param {boolean} optData (default=false) If true, return edge attribute
     *   dictionaries with each edge.
     * @param {boolean} optKeys (default=flase) If true, return edge keys with
     *   each edge.
     * @return {Iterator} An iterator of `(u,v)`, `(u,v,d)` or `(u,v,key,d)` edges
     */
    edgesIter(optNbunch: Iterable, optData?: boolean, optKeys?: boolean): Iterator;
    /**
     * @alias edgesIter
     */
    outEdgesIter(optNbunch: any, optData: any, optKeys: any): Iterator;
    /**
     * Return a list of the outgoing edges.
     *
     * Edges are returned as tuples with optional data and keys in the order
     * `(node, neighbor, key, data)`.
     *
     * ### Note
     *
     * Nodes in `optNbunch` that are not in the graph will be (quietly) ignored.
     * For directed graphs `edges()` is the same as `outEdges()`.
     *
     * @see inEdges
     *
     * @param {Iterable} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated over only once.
     * @param {boolean} optData (default=false) If true, return edge attribute
     *   dictionaries with each edge.
     * @param {boolean} optKeys (default=flase) If true, return edge keys with
     *   each edge.
     * @return {Array} A list of `(u,v)`, `(u,v,d)` or `(u,v,key,d)` tuples of
     *   edges
     */
    outEdges(optNbunch: Iterable, optData: boolean, optKeys?: boolean): any[];
    /**
     * Return an iterator over the incoming edges.
     *
     * Edges are returned as tuples with optional data and keys in the order
     * `(node, neighbor, key, data)`.
     *
     * @see edgesIter
     *
     * @param {Iterable=} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated over only once.
     * @param {boolean=} optData (default=false) If true, return edge attribute
     *   dictionaries with each edge.
     * @param {boolean=} optKeys (default=flase) If true, return edge keys with
     *   each edge.
     * @return {Iterator} An iterator of `(u,v)`, `(u,v,d)` or `(u,v,key,d)` edges
     */
    inEdgesIter(optNbunch?: Iterable, optData?: boolean | undefined, optKeys?: boolean | undefined): Iterator;
    /**
     * Return a list of the incoming edges.
     *
     * @see outEdges
     *
     * @param {Iterable=} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated over only once.
     * @param {boolean=} optData (default=false) If true, return edge attribute
     *   dictionaries with each edge.
     * @param {boolean=} optKeys (default=flase) If true, return edge keys with
     *   each edge.
     * @return {Array} A list of `(u,v)`, `(u,v,d)` or `(u,v,key,d)` tuples of
     *   edges
     */
    inEdges(optNbunch?: Iterable, optData?: boolean | undefined, optKeys?: boolean | undefined): any[];
    /**
     * Return an iterator for `(node, degree)`.
     *
     * The node degree is the number of edges adjacent to the node.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.degreeIter([0,1]));
     * // [[0,1], [1,2]]
     * ```
     *
     * @param {Iterable=} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated through once.
     * @param {string=} optString (default=null)
     *   The edge attribute that holds the numerical value used as a weight. If
     *   None, then each edge has weight 1.
     *   The degree is the sum of the edge weights.
     * @return {Iterator} The iterator returns two-tuples of `(node, degree)`.
     */
    degreeIter(optNbunch?: Iterable, optWeight: any): Iterator;
    /**
     * Return an iterator for `(node, in-degree)`.
     *
     * The node in-degree is the number of edges pointing to the node.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.degreeIter([0,1]));
     * // [[0,0], [1,1]]
     * ```
     *
     * @param {Iterable=} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated through once.
     * @param {string=} optString (default=null)
     *   The edge attribute that holds the numerical value used as a weight. If
     *   None, then each edge has weight 1.
     *   The degree is the sum of the edge weights.
     * @return {Iterator} The iterator returns two-tuples of `(node, degree)`.
     */
    inDegreeIter(optNbunch?: Iterable, optWeight: any): Iterator;
    /**
     * Return an iterator for `(node, out-degree)`.
     *
     * The node out-degree is the number of edges pointing out of the node.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.degreeIter([0,1]));
     * // [[0,1], [1,1]]
     * ```
     *
     * @param {Iterable=} optNbunch (default=all nodes) A container of nodes.
     *   The container will be iterated through once.
     * @param {string=} optString (default=null)
     *   The edge attribute that holds the numerical value used as a weight. If
     *   None, then each edge has weight 1.
     *   The degree is the sum of the edge weights.
     * @return {Iterator} The iterator returns two-tuples of `(node, degree)`.
     */
    outDegreeIter(optNbunch?: Iterable, optWeight: any): Iterator;
    /**
     * Return a directed copy of the graph.
     *
     * ### Notes
     *
     * This returns a deep copy of the edge, node, and
     * graph attributes which attempts to completely copy
     * all of the data and references.
     *
     * This is in contrast to the similar `var G = new MultiDiGraph(D);`, which
     * returns a shallow copy of the data.
     *
     * @return {MultiDiGraph} A deep copy of the graph.
     */
    toDirected(): MultiDiGraph;
    /**
     * Return an undirected representation of the digraph.
     *
     * ### Notes
     *
     * The result is an undirected graph with the same name, nodes and
     * with edge `(u,v,data)` if either `(u,v,data)` or `(v,u,data)`
     * is in the digraph.  If both edges exist in digraph and
     * their edge data is different, only one edge is created
     * with an arbitrary choice of which edge data to use.
     * You must check and correct for this manually if desired.
     *
     * This returns a deep copy of the edge, node, and
     * graph attributes which attempts to completely copy
     * all of the data and references.
     *
     * This is in contrast to the similar `var G = new MultiGraph(D);`, which
     * returns a shallow copy of the data.
     *
     * @param {boolean=} optReciprocal If true, only keep edges that appear in
     *   both directions in the original digraph.
     * @return {MultiGraph}
     */
    toUndirected(optReciprocal?: boolean | undefined): MultiGraph;
    /**
     * Return the subgraph induced on nodes in `nbunch`.
     *
     * The induced subgraph of the graph contains the nodes in `optNbunch` and the
     * edges between those nodes.
     *
     * ### Notes
     *
     * The graph, edge or node attributes just point to the original graph.
     * So changes to the node or edge structure will not be reflected in
     * the original graph while changes to the attributes will.
     *
     * To create a subgraph with its own copy of the edge/node attributes use:
     * `jsnx.MultiDiGraph(G.subgraph(nbunch))`.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.MultiDiGraph();
     * G.addPath([0,1,2,3]);
     * var H = G.subgraph([0,1,2]);
     * H.edges();
     * // [[0,1], [1,2]]
     * ```
     *
     * @param {Iterable} nBunch A container of nodes which will be iterated
     *   through once.
     * @return {MultiDiGraph}
     */
    subgraph(nBunch: Iterable): MultiDiGraph;
    /**
     * Return the reverse of the graph.
     *
     * The reverse is a graph with the same nodes and edges but with the
     * directions of the edges reversed.
     *
     * @param {boolean=} optCopy If true, return a new MultiDiGraph holding the
     *   reversed edges. If false, the reverse graph is created using the original
     *   graph (this changes the original graph).
     * @return {?MultiDiGraph}
     */
    reverse(optCopy?: boolean | undefined): MultiDiGraph | null;
}
import DiGraph from './DiGraph';
import MultiGraph from './MultiGraph';
