/**
 * Base class for directed graphs.
 *
 * A DiGraph stores nodes and edges with optional data, or attributes.
 *
 * DiGraphs hold directed edges.  Self loops are allowed but multiple
 * (parallel) edges are not.
 *
 * Nodes can be strings, numbers or any object with a custom `toString` method.
 *
 * Edges are represented as links between nodes with optional
 * key/value attributes.
 *
 * ### Examples
 *
 * Create an empty graph (a "null graph") with no nodes and no edges.
 *
 * ```
 * var G = new jsnx.DiGraph();
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
 * G.addNodesFrom(new Set('foo', 'bar'));
 * var H = jsnx.completeGraph(10);
 * G.addNodesFrom(H);
 * ```
 *
 * In addition to strings, numbers and arrays, any object that implements a
 * custom `toString` method can be used as node.
 *
 * #### Edges
 *
 * `G` can also be grown by adding edges.
 *
 * Add one edge,
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
 * or a collection of edges,
 *
 * ```
 * G.addEdgesFrom(H.edges);
 * ```
 *
 * If some edges connect nodes not yet in the graph, the nodes are added
 * automatically. There are no errors when adding nodes or edges that already
 * exist.
 *
 * #### Attributes
 *
 * Each graph, node and edge can hold key/value attribute pairs in an associated
 * attribute object (keys must be strings or numbers).
 * By default these are empty, but can added or changed using `addEdge`,
 * `addNode`.
 *
 * ```
 * var G = new jsnx.DiGraph(null, {day: 'Friday'});
 * G.graph
 * // {day: 'Friday'}
 * ```
 *
 * Add node attributes using `addNode()` or `addNodesFrom()`:
 *
 * ```
 * G.addNode(1, {time: '5pm'});
 * G.addNodesFrom([2, [3, {time: '3pm'}]], {time: '2pm'});
 * G.nodes(true);
 * // [[1, {time: '5pm'}], [2, {time: '2pm'}], [3, {time: '3pm'}]]
 * ```
 *
 * Add edge attributes using `addEdge()`, or `addEdgesFrom()`:
 *
 * ```
 * G.addEdge(1, w, {weight: 4.7});
 * G.addEdgesFrom([[3,4], [4,5]], {color: 'red'});
 * ```
 *
 * @see Graph
 * @see MultiGraph
 * @see MultiDiGraph
 */
export default class DiGraph<Node = unknown> extends Graph<Node> {
    /**
     * @param {Iterable} optData
     *      Data to initialize graph.  If data=None (default) an empty
     *      graph is created.  The data can be an edge list, or any
     *      JSNetworkX graph object.
     *
     * @param {Object=} optAttr
     *       Attributes to add to graph as key=value pairs.
     */
    constructor(optData: Iterable, optAttr?: any | undefined);
    pred: Map;
    succ: Map;
    /**
     * Return True if node u has successor v.
     *
     * This is true if graph has the edge u->v.
     *
     * @param {Node} u Node
     * @param {Node} v Node
     * @return {boolean} True if node u has successor v
     */
    hasSuccessor(u: Node, v: Node): boolean;
    /**
     * Return True if node u has predecessor v.
     *
     * This is true if graph has the edge u<-v.
     *
     * @param {Node} u Node
     * @param {Node} v Node
     * @return {boolean} True if node u has predecessor v
     */
    hasPredecessor(u: Node, v: Node): boolean;
    /**
     * Return an iterator over successor nodes of n.
     *
     * `neighborsIter()` and `successorsIter()` are the same.
     *
     * @param {Node} n Node
     * @return {!Iterator} Iterator over successor nodes of n
     */
    successorsIter(n: Node): Iterator;
    /**
     * Return an iterator over predecessor nodes of n.
     *
     * @param {Node} n Node
     * @return {!Iterator} Iterator over predecessor nodes of n
     */
    predecessorsIter(n: Node): Iterator;
    /**
     * Return a list of successor nodes of n.
     *
     * `neighbors()` and `successors()` are the same.
     *
     * @param {Node} n Node
     * @return {!Array} List of successor nodes of n
     */
    successors(n: Node): any[];
    /**
     * Return list of predecessor nodes of n.
     *
     * @param {Node} n Node
     * @return {!Array} List of predecessor nodes of n
     */
    predecessors(n: Node): any[];
    /**
     * @alias successors
     */
    neighbors(n: any): any[];
    /**
     * @alias successorsIter
     */
    neighborsIter(n: any): Iterator;
    /**
     * Return an iterator over the edges.
     *
     * Edges are returned as tuples with optional data in the order
     * `(node, neighbor, data)`.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.DiGraph() // or MultiDiGraph, etc
     * G.addPath([0,1,2]);;
     * G.addEdge(2, 3, {weight: 5});
     * Array.from(G.edgesIter());
     * // [[0,1], [1,2], [2,3]]
     * Array.from(G.edgeIter(true)); // default data is {}
     * // [[0,1,{}], [1,2,{}], [2,3,{weight: 5}]]
     * Array.from(G.edgesIter([0,2]));
     * // [[0,1], [2,3]]
     * Array.from(G.edgesIter(0));
     * // [[0,1]]
     * ```
     *
     *
     * ### Notes
     *
     * Nodes in `nbunch` that are not in the graph will be (quietly) ignored.
     *
     * @see #edges
     *
     * @param {?boolean=} optNbunch A container of nodes.
     *       The container will be iterated through once.
     * @param {?boolean=} optData
     *      If True, return edge attribute dict in 3-tuple (u,v,data).
     * @return {!Iterator} An iterator of (u,v) or (u,v,d) tuples of edges.
     */
    edgesIter(optNbunch?: (boolean | null) | undefined, optData?: (boolean | null) | undefined): Iterator;
    /**
     * @alias edgesIter
     */
    outEdgesIter(optNbunch: any, optData: any): Iterator;
    /**
     * @alias edges
     */
    outEdges(optNbunch: any, optData: any): any[];
    /**
     * Return an iterator over the incoming edges.
     *
     * @see edgesIter
     *
     * @param {?boolean=} optNbunch A container of nodes.
     *       The container will be iterated through once.
     * @param {?boolean=} optData
     *      If True, return edge attribute dict in 3-tuple (u,v,data).
     * @return {!Iterator} An iterator of (u,v) or (u,v,d) tuples of
     *      incoming edges.
     */
    inEdgesIter(optNbunch?: (boolean | null) | undefined, optData?: (boolean | null) | undefined): Iterator;
    /**
     * Return a list of the incoming edges.
     *
     * @see #edges
     *
     * @param {?Iterable=} optNbunch A container of nodes.
     *       The container will be iterated through once.
     * @param {?boolean=} opt_data
     *      If True, return edge attribute dict in 3-tuple (u,v,data).
     * @return {!Array} A list of incoming edges
     */
    inEdges(optNbunch?: Iterable, optData?: boolean): any[];
    /**
     * Return an iterator for (node, in-degree).
     *
     * The node in-degree is the number of edges pointing in to the node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.DiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.inDegreeIter(0));
     * // [[0, 0]]
     * Array.from(G.inDegreeIter([0,1]));
     * // [[0, 0], [1, ]]
     * ```
     *
     * @see #degree
     * @see #inDegree
     * @see #outDegree
     * @see #outDegreeIter
     *
     * @param {(Node|Iterable)=} optNbunch  A container of nodes.
     *       The container will be iterated through once.
     *
     * @param {string=} optWeight
     *       The edge attribute that holds the numerical value used
     *       as a weight.  If null or undefined, then each edge has weight 1.
     *       The degree is the sum of the edge weights adjacent to the node.
     * @return {Iterator}  The iterator returns two-tuples of (node, in-degree).
     */
    inDegreeIter(optNbunch?: (Node | Iterable) | undefined, optWeight?: string | undefined): Iterator;
    /**
     * Return an iterator for (node, out-degree).
     *
     * The node out-degree is the number of edges pointing in to the node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.DiGraph();
     * G.addPath([0,1,2,3]);
     * Array.from(G.outDegreeIter(0));
     * // [[0, 1]]
     * Array.from(G.outDegreeIter([0,1]));
     * // [[0, 1], [1, ]]
     *
     *
     * @see #degree
     * @see #inDegree
     * @see #outDegree
     * @see #inDegreeIter
     *
     * @param {(Node|Iterable)=} opt_nbunch  A container of nodes.
     *       The container will be iterated through once.
     * @param {string=} optWeight
     *       The edge attribute that holds the numerical value used
     *       as a weight.  If None, then each edge has weight 1.
     *       The degree is the sum of the edge weights adjacent to the node.
     * @return {Iterator}  The iterator returns two-tuples of (node, out-degree).
     */
    outDegreeIter(optNbunch: any, optWeight?: string | undefined): Iterator;
    /**
     * Return the in-degree of a node or nodes.
     *
     * The node in-degree is the number of edges pointing in to the node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.DiGraph(); // or MultiDiGraph
     * G.addPath([0,1,2,3]);
     * G.inDegree(0);
     * // 0
     * G.inDegree([0,1]);
     * // Map {0: 0, 1: 1}
     * Array.from(G.inDegree([0,1]).values());
     * // [0, 1]
     * ```
     *
     * @see #degree
     * @see #outDegree
     * @see #inDegreeIter
     *
     *
     * @param {(Node|Iterable)=} optNbunch  A container of nodes.
     *       The container will be iterated through once.
     * @param {string=} opt_weight
     *       The edge attribute that holds the numerical value used
     *       as a weight.  If None, then each edge has weight 1.
     *       The degree is the sum of the edge weights adjacent to the node.
     * @return {(number|Map)}
     *       A dictionary with nodes as keys and in-degree as values or
     *       a number if a single node is specified.
     */
    inDegree(optNbunch?: (Node | Iterable) | undefined, optWeight: any): (number | Map);
    /**
     * Return the out-degree of a node or nodes.
     *
     * The node out-degree is the number of edges pointing out of the node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.DiGraph(); // or MultiDiGraph
     * G.addPath([0,1,2,3]);
     * G.outDegree(0);
     * // 1
     * G.outDegree([0,1]);
     * // Map {0: 1, 1: 1}
     * Array.from(G.inDegree([0,1]).values());
     * // [1, 1]
     * ```
     *
     * @see #degree
     * @see #out_degree
     * @see #in_degree_iter
     *
     * @param {(Node|Iterable)=} optNbunch  A container of nodes.
     *       The container will be iterated through once.
     * @param {string=} optWeight
     *       The edge attribute that holds the numerical value used
     *       as a weight.  If None, then each edge has weight 1.
     *       The degree is the sum of the edge weights adjacent to the node.
     * @return {(number|Map)}
     *       A dictionary with nodes as keys and in-degree as values or
     *       a number if a single node is specified.
     */
    outDegree(optNbunch?: (Node | Iterable) | undefined, optWeight?: string | undefined): (number | Map);
    /**
     * Return a directed copy of the graph.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph(); // or MultiGraph, etc
     * G.addPath([0,1]);
     * var H = G.toDirected();
     * H.edges();
     * // [[0,1], [1,0]]
     * ```
     *
     * If already directed, return a (deep) copy
     *
     * ```
     * var G = new jsnx.DiGraph(); // or MultiDiGraph, etc
     * G.addPath([0,1]);
     * var H = G.toDirected();
     * H.edges();
     * // [[0,1]]
     * ```
     *
     * ### Notes
     *
     * This returns a "deepcopy" of the edge, node, and
     * graph attributes which attempts to completely copy
     * all of the data and references.
     *
     * This is in contrast to the similar `var H = new jsnx.DiGraph(G)` which
     * returns a shallow copy of the data.
     *
     * @return {!DiGraph} A deepcopy of the graph
     */
    toDirected(): DiGraph;
    /**
     * Return an undirected representation of the digraph.
     *
     * ### Notes
     *
     * If edges in both directions (u,v) and (v,u) exist in the
     * graph, attributes for the new undirected edge will be a combination of
     * the attributes of the directed edges.  The edge data is updated
     * in the (arbitrary) order that the edges are encountered.  For
     * more customized control of the edge attributes use `addEdge()`.
     *
     * This returns a "deepcopy" of the edge, node, and graph attributes which
     * attempts to completely copy all of the data and references.
     *
     * This is in contrast to the similar `var H = new jsnx.Graph(G)`
     * which returns a shallow copy of the data.
     *
     * @param {boolean=} optReciprocal
     *      If True only keep edges that appear in both directions
     *      in the original digraph.
     * @return {!Graph}
     *      An undirected graph with the same name and nodes and
     *      with edge (u,v,data) if either (u,v,data) or (v,u,data)
     *      is in the digraph.  If both edges exist in digraph and
     *      their edge data is different, only one edge is created
     *      with an arbitrary choice of which edge data to use.
     *      You must check and correct for this manually if desired.
     */
    toUndirected(optReciprocal?: boolean | undefined): Graph;
    /**
     * Return the reverse of the graph.
     *
     * The reverse is a graph with the same nodes and edges
     * but with the directions of the edges reversed.
     *
     * @param {boolean=} optCopy (default=True)
     *      If True, return a new DiGraph holding the reversed edges.
     *      If False, reverse the reverse graph is created using
     *      the original graph (this changes the original graph).
     *
     * @return {!DiGraph} A copy of the graph or the graph itself
     */
    reverse(optCopy?: boolean | undefined): DiGraph;
    /**
     * Return the subgraph induced on nodes in `nbunch`.
     *
     * The induced subgraph of the graph contains the nodes in `nbunch`
     * and the edges between those nodes.
     *
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * var H = G.subgraph([0,1,2]);
     * H.edges();
     * // [[0,1], [1,2]]
     * ```
     *
     * ### Notes
     *
     * The graph, edge or node attributes just point to the original graph.
     * So changes to the node or edge structure will not be reflected in
     * the original graph while changes to the attributes will.
     *
     * To create a subgraph with its own copy of the edge/node attributes use:
     * `new jsnx.Graph(G.subgraph(nbunch))`.
     *
     * For an inplace reduction of a graph to a subgraph you can remove nodes:
     *
     * ```
     * G.removeNodesFrom(G.nodes().filter(function(n) {
     *      return nbunch.indexOf(n) > -1;
     * }))
     * ```
     *
     * @param {Iterable} nbunch
     *      A container of nodes which will be iterated through once.
     * @return {DiGraph} A subgraph of the graph with the same edge
     *   attributes.
     */
    subgraph(nbunch: Iterable): DiGraph;
}
import Graph from './Graph';
import Map from '../_internals/Map';
