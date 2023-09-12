export default class Graph<Node = unknown> {
    /**
     * Holds the graph type (class) name for information.
     *
     * @type {string}
     */
    static get __name__(): string;
    constructor(optData: any, optAttr: any);
    graph: {};
    node: Map;
    adj: Map;
    edge: Map;
    set name(arg: string);
    /**
     * Gets or sets the name of the graph.
     *
     * @param {string=} opt_name Graph name.
     * @return {(string|undefined)} Graph name if no parameter was passed.
     */
    get name(): string;
    /**
     * Return the graph name
     *
     * @return {string} Graph name.
     */
    toString(): string;
    /**
     * Return a Map of neighbors of node n.
     *
     * @param {Node} n  A node in the graph.
     *
     * @return {!Map} The adjacency dictionary for nodes connected to n.
     */
    get(n: Node): Map;
    /**
     * Add a single node n and update node attributes.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addNode(1);
     * G.addNode('Hello');
     * G.numberOfNodes();
     * 2
     * ```
     *
     * @see #addNodesFrom
     *
     * @param {Node} n Node
     * @param {Object=} opt_attr_dict Dictionary of node attributes.
     *      Key/value pairs will update existing data associated with the node.
     */
    addNode(n: Node, optAttrDict?: {}): void;
    /**
     * Add multiple nodes.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph(); // or DiGraph, MultiGraph, MultiDiGraph
     * G.addNodesFrom([1,2,3]);
     * G.nodes();
     * // [1,2,3]
     * ```
     *
     * Use the second argument to update specific node attributes for every node.
     *
     * ```
     * G.addNodesFrom([1,2], {size: 10});
     * G.addNodesFrom([2,3], {weight: 0.4});
     * ```
     *
     * Use `(node, object)` tuples to update attributes for specific nodes.
     *
     * ```
     * G.addNodesFrom([[1, {size: 11}], [2, {color: 'blue'}]]);
     * G.node.get(1).size
     * // 11
     * var H = new jsnx.Graph();
     * H.addNodesFrom(G.nodes(true));
     * H.node.get(1).size
     * // 11
     * ```
     *
     * @see #addNode
     *
     * @param {Iterable} nodes
     *      An iterable of nodes
     *      OR
     *      An iterable of (node, object) tuples.
     *
     * @param {Object=} optAttr  Update attributes for all nodes in nodes.
     *       Node attributes specified in nodes as a tuple
     *       take precedence over attributes specified generally.
     */
    addNodesFrom(nodes: Iterable, optAttr?: any | undefined): void;
    /**
     * Remove node n.
     *
     * Removes the node n and all adjacent edges.
     * Attempting to remove a non-existent node will raise an exception.
     *
     * ### Example
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * G.edges();
     * // [[0,1], [1,2]]
     * G.removeNode(1);
     * G.edges();
     * // []
     * ```
     *
     * @see #removeNodesFrom
     *
     * @param {Node} n  A node in the graph
     */
    removeNode(n: Node): void;
    /**
     * Remove multiple nodes.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * var e = G.nodes(); // [0,1,2]
     * G.removeNodesFrom(e);
     * G.nodes();
     * // []
     * ```
     *
     * @see #removeNode
     *
     * @param {Iterable} nodes  A container of nodes.
     *      If a node in the container is not in the graph it is silently ignored.
     */
    removeNodesFrom(nodes: Iterable): void;
    /**
     * Return an iterator over the nodes.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * var data = [];
     * Array.from(G.nodesIter(true)).map(([node, data]) => data);
     * // [{}, {}, {}]
     * ```
     *
     * ### Notes
     *
     * If the node is not required, it is simpler and equivalent to use `G`, e.g.
     * `Array.from(G)` or `for (var node of G)`.
     *
     * @param {boolean=} optData If false the iterator returns
     *   nodes. If true return a two-tuple of node and node data dictionary.
     *
     * @return {Iterator} of nodes If data=true the iterator gives
     *           two-tuples containing (node, node data, dictionary).
     */
    nodesIter(optData?: boolean | undefined): Iterator;
    /**
     * Return a list of the nodes in the graph.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * G.nodes();
     * // [0,1,2]
     * G.addNode(1, {time: '5pm'});
     * G.nodes(true);
     * // [[0,{}], [1,{time: '5pm'}], [2,{}]]
     * ```
     *
     * @param {boolean=} optData If false the iterator returns
     *   nodes. If true return a two-tuple of node and node data dictionary.
     *
     * @return {!Array} of nodes If data=true a list of two-tuples containing
     *           (node, node data object).
     */
    nodes(optData?: boolean | undefined): any[];
    /**
     * Return the number of nodes in the graph.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * G.numberOfNodes();
     * // 3
     * ```
     *
     * @see #order
     *
     * @return {number} The number of nodes in the graph.
     */
    numberOfNodes(): number;
    /**
     * Return the number of nodes in the graph.
     *
     * @see #numberOfNodes
     *
     * @return {number} The number of nodes in the graph.
     */
    order(): number;
    /**
     * Return true if the graph contains the node n.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * G.hasNode(0);
     * // true
     * ```
     *
     * @param {Node} n node.
     * @return {boolean}
     */
    hasNode(n: Node): boolean;
    /**
     * Add an edge between u and v.
     *
     * The nodes u and v will be automatically added if they are
     * not already in the graph.
     *
     * Edge attributes can be specified with keywords or by providing
     * a object with key/value pairs as third argument.
     *
     *
     * ### Examples
     *
     * The following all add the edge `(1,2)` to graph `G`:
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addEdge(1,2);
     * G.addEdgesFrom([[1,2]]);
     * ```
     *
     * Associate data to edges using an object:
     *
     * ```
     * G.addEdge(1, 2, {weight: 3});
     * G.addEdge(1, 3, {weight: 7, capacity: 15, length: 342.7});
     * ```
     *
     * ### Notes
     *
     * Adding an edge that already exists updates the edge data.
     *
     * Many algorithms designed for weighted graphs use as the edge weight a
     * numerical value assigned to an attribute which by default is 'weight'.
     *
     * @see #addEdgesFrom
     *
     * @param {Node} u Node
     * @param {Node} v Node
     * @param {Object=} optAttrDict Object of edge attributes.
     *      Key/value pairs will update existing data associated with the edge.
     */
    addEdge(u: Node, v: Node, optAttrDict?: any | undefined): void;
    /**
     * Add all the edges in `ebunch`.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addEdgesFrom([[0,1], [1,2]]); // using a list of edges
     * ```
     *
     * Associate data to edges
     *
     * ```
     * G.addEdgesFrom([[1,2], [2,3]], {weight: 3});
     * G.addEdgesFrom([[3,4], [1,4]], {label: 'WN2898'});
     * ```
     *
     * ### Notes
     *
     * Adding the same edge twice has no effect but any edge data
     * will be updated when each duplicate edge is added.
     *
     * @see #add_edge
     * @see #addWeightedEdgesFrom
     *
     * @param {Iterable} ebunch container of edges
     *      Each edge given in the container will be added to the
     *      graph. The edges must be given as as 2-tuples (u,v) or
     *      3-tuples (u,v,d) where d is a dictionary containing edge data.
     *
     * @param {Object=} optAttrDict Object of edge attributes.
     *      Dictionary of edge attributes.  Key/value pairs will
     *      update existing data associated with each edge.
     */
    addEdgesFrom(ebunch: Iterable, optAttrDict?: any | undefined): void;
    /**
     * Add all the edges in `ebunch` as weighted edges with specified weights.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addWeightedEdgesFrom([[0,1,3.0], [1,2,7.5]]);
     * ```
     *
     * ### Note
     *
     * Adding the same edge twice for Graph/DiGraph simply updates
     * the edge data.  For MultiGraph/MultiDiGraph, duplicate edges
     * are stored.
     *
     * @see #addEdge
     * @see #addEdgesFrom
     *
     * @param {Iterable} ebunch  container of edges
     *      Each edge given in the list or container will be added
     *      to the graph. The edges must be given as 3-tuples (u,v,w)
     *      where w is a number.
     * @param {string=} optWeight (default 'weight')
     *      The attribute name for the edge weights to be added.
     * @param {Object=} optAttr Edge attributes to add/update for all edges.
     */
    addWeightedEdgesFrom(ebunch: Iterable, optWeight?: string | undefined, optAttr?: any | undefined): void;
    /**
     * Remove the edge between u and v.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.removeEdge(0,1);
     * ```
     *
     * @see #removeEdgesFrom
     *
     * @param {Node} u Node
     * @param {Node} v Node
     */
    removeEdge(u: Node, v: Node): void;
    /**
     * Remove all edges specified in `ebunch`.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * var ebunch = [[1,2], [2,3]];
     * G.removeEdgesFrom(ebunch);
     * ```
     *
     * ### Notes
     *
     * Will fail silently if an edge in `ebunch` is not in the graph.
     *
     * @param {Iterable} ebunch Iterable of edge tuples
     *      Each edge given in the list or container will be removed
     *      from the graph. The edges can be:
     *        - 2-tuples (u,v) edge between u and v.
     *        - 3-tuples (u,v,k) where k is ignored.
     */
    removeEdgesFrom(ebunch: Iterable): void;
    /**
     * Return True if the edge (u,v) is in the graph.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.hasEdge(0, 1);
     * // true
     * var edge = [0, 1];
     * G.hasEdge.apply(G, edge);
     * // true
     * ```
     *
     * @param {Node} u Node.
     * @param {Node} v Node.
     *
     * @return {boolean} True if edge is in the graph, False otherwise.
     */
    hasEdge(u: Node, v: Node): boolean;
    /**
     * Return a list of the nodes connected to the node n.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.neighbors(0);
     * // [1]
     * ```
     *
     * ### Notes
     *
     * It can be more convenient to access the adjacency map as `G.get(n)`:
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addEdge('a', 'b', {weight: 7});
     * G.get('a');
     * // Map {'b': {weight: 7}}
     * ```
     *
     * @param {!Node} n A node in the graph.
     * @return {!Array} A list of nodes that are adjacent to n.
     */
    neighbors(n: Node): any[];
    /**
     * Return an iterator over all neighbors of node n.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * Array.from(G.neighborsIter(0));
     * // [1]
     * ```
     *
     * You could also iterate over the adjacency map instead:
     *
     * ```
     * Array.from(G.get(0).keys());
     * ```
     *
     * @param {!Node} n A node in the graph.
     * @return {!Iterator} A list of nodes that are adjacent to n.
     */
    neighborsIter(n: Node): Iterator;
    /**
     * Return a list of edges.
     *
     * Edges are returned as tuples with optional data
     * in the order (node, neighbor, data).
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * G.addEdge(2, 3, {weight: 5});
     * G.edges();
     * // [[0,1], [1,2], [2,3]]
     * G.edges(true);
     * // [[0,1,{}], [1,2,{}], [2,3, {weight: 5}]
     * G.edges([0,3]);
     * // [[0,1], [3,2]]
     * G.edges(0);
     * // [[0,1]]
     * ```
     *
     * ### Note
     *
     * Nodes in `nbunch` that are not in the graph will be (quietly) ignored.
     * For directed graphs this returns the out-edges.
     *
     * @param {?(Node|Iterable)=} optNbunch A container of nodes.
     *      The container will be iterated through once.
     * @param {?boolean=} optData Return two tuples (u,v) (False)
     *      or three-tuples (u,v,data) (True).
     * @return {!Array} list of edge tuples
     *      Edges that are adjacent to any node in nbunch, or a list
     *      of all edges if nbunch is not specified.
     */
    edges(optNbunch?: ((Node | Iterable) | null) | undefined, optData?: (boolean | null) | undefined): any[];
    /**
     * Return an iterator over the edges.
     *
     * Edges are returned as tuples with optional data
     * in the order (node, neighbor, data).
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2]);
     * G.addEdge(2, 3, {weight: 5});
     * Array.from(G.edgesIter());
     * // [[0,1], [1,2], [2,3]]
     * Array.from(G.edgesIter(true));
     * // [[0,1,{}], [1,2,{}], [2,3, {weight: 5}]
     * Array.from(G.edgesIter([0,3]));
     * // [[0,1], [3,2]]
     * Array.from(G.edgesIter(0));
     * // [[0,1]]
     * ```
     *
     * ### Note
     *
     * Nodes in `nbunch` that are not in the graph will be (quietly) ignored.
     * For directed graphs this returns the out-edges.
     *
     * @param {?(Node|Iterable)=} optNbunch A container of nodes.
     *      The container will be iterated through once.
     * @param {?boolean=} optData Return two tuples (u,v) (False)
     *      or three-tuples (u,v,data) (True).
     * @return {!Iterator} iterater if `(u,v)` or `(u,v,d)` edge tuples
     */
    edgesIter(optNbunch?: ((Node | Iterable) | null) | undefined, optData?: (boolean | null) | undefined): Iterator;
    /**
     * Return the attribute object associated with edge (u,v).
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.getEdgeData(0,1);
     * // {}
     * ```
     *
     * If the edge exists, it may be simpler to access `G.get(0).get(1)`.
     *
     * @param {Node} u Node.
     * @param {Node} v Node.
     * @param {*} optDefault
     *   Value to return if the edge (u,v) is not found.
     * @return {*} The edge attribute object.
     */
    getEdgeData(u: Node, v: Node, optDefault?: any): any;
    /**
     * Return an adjacency list representation of the graph.
     *
     * The output adjacency list is in the order of G.nodes().
     * For directed graphs, only outgoing adjacencies are included.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.adjacencyList();
     * // [[1], [0,2], [1,3], [2]]
     * ```
     *
     * @return {!Array.<Array>} The adjacency structure of the graph as a
     *      list of lists.
     */
    adjacencyList(): Array<any[]>;
    /**
     * Return an iterator of (node, adjacency map) tuples for all nodes.
     *
     * For directed graphs, only outgoing adjacencies are included.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph() // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * Array.from(G.adjacencyIter());
     * // [
     * //   [0, Map {1: {}}],
     * //   [1, Map {0: {}, 2: {}}],
     * //   [2, Map {1: {}, 3: {}}],
     * //   [3, Map {2: {}]]
     * // ]
     * ```
     *
     * @return {!Iterator} An array of (node, adjacency map) tuples
     *      for all nodes in the graph.
     */
    adjacencyIter(): Iterator;
    /**
     * Return the degree of a node or nodes.
     *
     * The node degree is the number of edges adjacent to that node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();  // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3])
     * G.degree(0)
     * // 1
     * G.degree([0,1])
     * // Map {0: 1, 1: 2}
     * Array.from(G.degree([0,1]).values())
     * // [1, 2]
     * ```
     *
     * @param {(Node|Iterable)=} optNbunch (default=all nodes)
     *      An iterable of nodes.  The iterable will be iterated
     *      through once.
     * @param {string=} optWeight
     *      The edge attribute that holds the numerical value used
     *      as a weight.  If null or not defined, then each edge has weight 1.
     *      The degree is the sum of the edge weights adjacent to the node.
     * @return {!(number|Map)} A dictionary with nodes as keys and
     *      degree as values or a number if a single node is specified.
     */
    degree(optNbunch?: (Node | Iterable) | undefined, optWeight?: string | undefined): (number | Map);
    /**
     * Return an array for (node, degree).
     *
     * The node degree is the number of edges adjacent to that node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();  // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3])
     * Array.from(G.degreeIter(0));
     * // [[0, 1]]
     * Array.from(G.degreeIter([0,1]));
     * // [[0, 1], [1, 2]]
     * ```
     *
     * @param {(Node|Iterable)=} optNbunch (default=all nodes)
     *       A container of nodes.  The container will be iterated
     *       through once.
     * @param {string=} optWeight
     *      The edge attribute that holds the numerical value used
     *      as a weight.  If null or not defined, then each edge has weight 1.
     *      The degree is the sum of the edge weights adjacent to the node.
     * @return {!Iterator} of two-tuples of (node, degree).
     *
     * @export
     */
    degreeIter(optNbunch?: (Node | Iterable) | undefined, optWeight?: string | undefined): Iterator;
    /**
     * Remove all nodes and edges from the graph.
     *
     * This also removes the name, and all graph, node, and edge attributes.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph(); // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.clear();
     * G.nodes();
     * // []
     * G.edges();
     * // []
     * ```
     */
    clear(): void;
    /**
     * Return a copy of the graph.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph(); // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * var H = G.copy();
     * ```
     *
     * ### Notes
     *
     * This makes a complete copy of the graph including all of the
     * node or edge attributes.
     *
     * @return {!Graph}
     */
    copy(): Graph;
    /**
     * Return True if graph is a multigraph, False otherwise.
     *
     * @return {boolean} True if graph is a multigraph, False otherwise.
     */
    isMultigraph(): boolean;
    /**
     * Return True if graph is directed, False otherwise.
     *
     * @return {boolean}  True if graph is directed, False otherwise.
     */
    isDirected(): boolean;
    /**
     * Return a directed representation of the graph.
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
     * @return {!DiGraph}
     *   A directed graph with the same name, same nodes, and with
     *   each edge (u,v,data) replaced by two directed edges
     *   (u,v,data) and (v,u,data).
     */
    toDirected(): DiGraph;
    /**
     * Return an undirected copy of the graph.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph(); // or MultiGraph, etc
     * G.addPath([0,1]);
     * var H = G.toDirected();
     * G.edges();
     * // [[0,1], [1,0]]
     * var G2 = H.toUndirected();
     * G2.edges();
     * // [[0,1]]
     * ```
     *
     * ### Notes
     *
     * This returns a "deepcopy" of the edge, node, and
     * graph attributes which attempts to completely copy
     * all of the data and references.
     *
     * This is in contrast to the similar `var H = new jsnx.Graph(G);` which
     * returns a shallow copy of the data.
     *
     * @return {!Graph} A deepcopy of the graph.
     * @export
     */
    toUndirected(): Graph;
    /**
     * Return the subgraph induced on nodes in nbunch.
     *
     * The induced subgraph of the graph contains the nodes in nbunch
     * and the edges between those nodes.
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
     *      An iterable of nodes which will be iterated through once.
     * @return {Graph}
     */
    subgraph(nbunch: Iterable): Graph;
    /**
     * Return a list of nodes with self loops.
     *
     * A node with a self loop has an edge with both ends adjacent
     * to that node.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addEdge(1, 1)
     * G.addEdge(1, 2)
     * G.nodesWithSelfloops()
     * // [1]
     * ```
     *
     * @return {Array} A list of nodes with self loops.
     */
    nodesWithSelfloops(): any[];
    /**
     * Return a list of selfloop edges.
     *
     * A selfloop edge has the same node at both ends.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addEdge(1,1)
     * G.addEdge(1,2)
     * G.selfloopEdges()
     * // [(1, 1)]
     * G.selfloop_edges(true)
     * // [(1, 1, {})]
     * ```
     *
     * @param {boolean=} optData
     *      Return selfloop edges as two tuples (u,v) (data=False)
     *      or three-tuples (u,v,data) (data=True).
     *
     * @return {Array}  A list of all selfloop edges.
     */
    selfloopEdges(optData?: boolean | undefined): any[];
    /**
     * Return the number of selfloop edges.
     *
     * A selfloop edge has the same node at both ends.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.add_edge(1,1)
     * G.add_edge(1,2)
     * G.number_of_selfloops()
     * // 1
     * ```
     *
     * @return {number} The number of selfloops.
     */
    numberOfSelfloops(): number;
    /**
     * Return the number of edges.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3])
     * G.size()
     * // 3
     *
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addEdge('a',' b', {weight: 2});
     * G.addEdge('b', 'c', {weight: 4});
     * G.size()
     * // 2
     * G.size('weight');
     * // 6.0
     * ```
     *
     * @param {string=} optWeight The edge attribute that holds the numerical
     *      value used as a weight.  If not defined, then each edge has weight 1.
     * @return {number} The number of edges or sum of edge weights in the graph.
     */
    size(optWeight?: string | undefined): number;
    /**
     * Return the number of edges between two nodes.
     *
     * ### Examples
     *
     * ```
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.numberOfEdges();
     * // 3
     * G.number_of_edges(0,1);
     * // 1
     * ```
     *
     * @param {!Node=} u node.
     * @param {!Node=} v node
     *       If u and v are both specified, return the number of edges between
     *       u and v. Otherwise return the total number of all edges.
     * @return {number} The number of edges in the graph.
     *      If nodes u and v are specified return the number of edges between
     *      those nodes.
     */
    numberOfEdges(u?: Node | undefined, v?: Node | undefined): number;
    /**
     * Add a star.
     *
     * ### Examples
     * ```
     * var G = new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addStar([0,1,2,3]);
     * G.addStar([10,11,12], {weight: 2});
     * ```
     *
     * The first node in nodes is the middle of the star.  It is connected
     * to all other nodes.
     *
     * @param {Iterable} nodes A container of nodes.
     * @param {Object=} optAttr  Attributes to add to every edge in the star.
     */
    addStar(nodes: Iterable, optAttr?: any | undefined): void;
    /**
     * Add a path.
     *
     * ### Examples
     *
     * ```
     * var G= new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addPath([0,1,2,3]);
     * G.addPath([10,11,12], {weight: 7});
     * ```
     *
     * @param {Iterable} nodes A container of nodes.
     *      A path will be constructed from the nodes (in order)
     *      and added to the graph.
     * @param {Object=} optAttr Attributes to add to every edge in path.
     */
    addPath(nodes: Iterable, optAttr?: any | undefined): void;
    /**
     * Add a cycle.
     *
     * ### Examples
     *
     * ```
     * var G= new jsnx.Graph();   // or DiGraph, MultiGraph, MultiDiGraph, etc
     * G.addCycle([0,1,2,3]);
     * G.addCycle([10,11,12], {weight: 7});
     * ```
     *
     * @param {Iterable} nodes A container of nodes.
     *      A cycle will be constructed from the nodes (in order)
     *      and added to the graph.
     * @param {Object=} optAttr  Attributes to add to every edge in cycle.
     */
    addCycle(nodes: Iterable, optAttr?: any | undefined): void;
    /**
     * Return an iterator of nodes contained in `nbunch` that are
     * also in the graph.
     *
     * The nodes in `nbunch` are checked for membership in the graph
     * and if not are silently ignored.
     *
     * ### Notes
     *
     * When `nbunch` is an iterator, the returned iterator yields values
     * directly from `nbunch`, becoming exhausted when `nbunch` is exhausted.
     *
     * To test whether `nbunch` is a single node, one can use
     * `if (this.hasNode(nbunch))`, even after processing with this routine.
     *
     * If `nbunch` is not a node or a (possibly empty) sequence/iterator
     * or not defined, an Error is raised.
     *
     * @param {(Node|Iterable)=} optNbunch (default=all nodes)
     *      A container of nodes.  The container will be iterated
     *      through once.
     * @return {!Iterator} An iterator over nodes in nbunch
     *      that are also in the graph.
     *      If nbunch is null or not defined, iterate over all nodes in the graph.
     */
    nbunchIter(optNbunch?: (Node | Iterable) | undefined): Iterator;
}
import Map from '../_internals/Map';
