/**
 * Creates a full r-ary tree of n vertices.
 *
 * Sometimes called a k-ary, n-ary, or m-ary tree.  "... all non-leaf
 * vertices have exactly r children and all levels are full except
 * for some rightmost position of the bottom level (if a leaf at the
 * bottom level is missing, then so are all of the leaves to its
 * right." (1)
 *
 * ### References
 *
 * [1] An introduction to data structures and algorithms,
 *    James Andrew Storer,  Birkhauser Boston 2001, (page 225).
 *
 * @param {number} r branching factor of the tree
 * @param {number} n number of nodes in the tree
 * @param {Graph=} optCreateUsing
 *   Use specified type to construct graph
 * @return {Graph} An r-ary tree with n nodes.
 */
export function fullRaryTree(r: number, n: number, optCreateUsing?: Graph | undefined): Graph;
/**
 * Return the perfectly balanced r-tree of height h.
 *
 * This is the rooted tree where all leaves are at distance h from
 * the root. The root has degree r and all other internal nodes have
 * degree r+1.
 *
 * Node labels are the integers 0 (the root) up to  numberOfNodes - 1.
 *
 * Also referred to as a complete r-ary tree.
 *
 * @param {number} r  Branching factor of the tree
 * @param {number} h Height of the tree
 * @param {Graph} optCreateUsing
 *    Use specified type to construct graph
 * @return {Graph}
 */
export function balancedTree(r: number, h: number, optCreateUsing: Graph): Graph;
/**
 * Return the complete graph `$K_n$` with n nodes.
 *
 * Node labels are the integers 0 to n-1.
 * @param {number} n The number of nodes to add to the graph
 * @param {Graph=} optCreateUsing Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function completeGraph(n: number, optCreateUsing?: Graph | undefined): Graph;
/**
 * Return the cycle graph C_n over n nodes.
 *
 * `$C_n$` is the n-path with two end-nodes connected.
 *
 * Node labels are the integers 0 to n-1
 * If `optCreateUsing` is a DiGraph, the direction is in increasing order.
 *
 * @param {number} n The number of nodes to add to the graph
 * @param {Graph=} optCreateUsing Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function cycleGraph(n: number, optCreateUsing?: Graph | undefined): Graph;
/**
 * Return the empty graph with n nodes and zero edges.
 *
 * Node labels are the integers 0 to n-1
 *
 * ### Example
 *
 * ```
 * var G = jsnx.emptyGraph(10)
 * G.numberOfNodes()
 * // 10
 * G.numberOfEdges()
 * // 0
 * ```
 *
 * The variable `optCreateUsing` should point to a "graph"-like object that
 * will be cleaned (nodes and edges will be removed) and refitted as
 * an empty "graph" with n nodes with integer labels. This capability
 * is useful for specifying the class-nature of the resulting empty
 * "graph" (i.e. Graph, DiGraph, MyWeirdGraphClass, etc.).
 *
 * The variable `optCreateUsing` has two main uses:
 * Firstly, the variable `optCreateUsing` can be used to create an
 * empty digraph, network,etc.  For example,
 *
 * ```
 * var n = 10;
 * var G = jsnx.emptyGraph(n, new jsnx.DiGraph());
 * ```
 *
 * will create an empty digraph on n nodes.
 *
 * Secondly, one can pass an existing graph (digraph, pseudograph,
 * etc.) via `optCreateUsing`. For example, if `G` is an existing graph
 * (resp. digraph, pseudograph, etc.), then `emptyGraph(n,G)`
 * will empty G (i.e. delete all nodes and edges using `G.clear()` in
 * base) and then add n nodes and zero edges, and return the modified
 * graph (resp. digraph, pseudograph, etc.).
 *
 * @see createEmptyCopy
 *
 * @param {?number=} optN The number of nodes to add to the graph
 * @param {?Graph=} optCreateUsing Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function emptyGraph(optN?: (number | null) | undefined, optCreateUsing?: (Graph | null) | undefined): Graph;
/**
 * Return the 2d grid graph of mxn nodes,
 * each connected to its nearest neighbors.
 * Optional argument `optPeriodic` will connect
 * boundary nodes via periodic boundary conditions.
 *
 * @param {number} rows Number of rows
 * @param {number} columns Number of columns
 * @param {boolean=} optPeriodic
 * @param {Graph=} optCreateUsing
 * @return {Graph}
 */
export function grid2dGraph(rows: number, columns: number, optPeriodic?: boolean | undefined, optCreateUsing?: Graph | undefined): Graph;
/**
 * Return the Null graph with no nodes or edges.
 *
 * See `emptyGraph` for the use of `optCreateUsing`.
 *
 * @param {Graph=} optCreateUsing Graph instance to empty and add nodes to.
 * @return {Graph}
 */
export function nullGraph(optCreateUsing?: Graph | undefined): Graph;
/**
 * Return the Null graph with no nodes or edges.
 *
 * See `emptyGraph` for the use of `optCreateUsing`.
 *
 * @param {number} n The number of nodes to add to the graph
 * @param {Graph=} optCreateUsing Graph instance to empty and
 *      add nodes to.
 * @return {Graph}
 */
export function pathGraph(n: number, optCreateUsing?: Graph | undefined): Graph;
/**
 * Return the Trivial graph with one node (with integer label 0) and no edges.
 *
 * @param {Graph=} optCreateUsing Graph instance to empty and
 *      add nodes to.
 * @return {Graph}
 */
export function trivialGraph(optCreateUsing?: Graph | undefined): Graph;
import Graph from '../classes/Graph';
