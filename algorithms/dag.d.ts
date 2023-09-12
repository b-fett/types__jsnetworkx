/**
 * Return `true` if the graph G is a directed acyclic graph (DAG) or
 * `false` if not.
 *
 * @param {Graph} G A graph
 * @return {boolean} true of G is a DAG, false otherwise
 */
export function isDirectedAcyclicGraph(G: Graph): boolean;
/**
 * Return a list of nodes in topological sort order.
 *
 * A topological sort is a non-unique permutation of the nodes such that an edge
 * from `$u$` to `$v$` implies that `$u$` appears before `$v$` in the
 * topological sort order.
 *
 * ### Notes
 *
 * This algorithm is based on a description and proof in
 * The Algorithm Design Manual ([1][]).
 *
 * ### References
 *
 *
 * [1] [Skiena, S. S. The Algorithm Design Manual  (Springer-Verlag, 1998).][1]
 * [1]: http://www.amazon.com/exec/obidos/ASIN/0387948600/ref=ase_thealgorithmrepo/
 *
 * @see #is_directed_acyclic_graph
 *
 * @param {Graph} G A directed Graph
 * @param {Iterable=} optNbunch Explore graph in specified order given
 *    in optNbunch.
 * @return {!Array}
 */
export function topologicalSort(G: Graph, optNbunch?: Iterable): any[];
/**
 * Return a list of nodes in topological sort order.
 *
 * A topological sort is a non-unique permutation of the nodes such that an edge
 * from `$u$` to `$v$` implies that `$u$` appears before `$v$` in the
 * topological sort order.
 *
 * ### Notes
 *
 * This is a recursive version of topological sort.
 *
 * @see #topological_sort
 * @see #is_directed_acyclic_graph
 *
 * @param {Graph} G A directed Graph
 * @param {Iterable=} optNbunch Explore graph in specified order given
 *    in optNbunch.
 * @return {!Array}
 */
export function topologicalSortRecursive(G: Graph, optNbunch?: Iterable): any[];
/**
 * Return true if G is aperiodic.
 *
 * A directed graph is aperiodic if there is no integer `$k > 1$` that
 * divides the length of every cycle in the graph.
 *
 * ### Notes
 *
 * This uses the method outlined in (1), which runs in `$O(m)$` time
 * given `$m$` edges in `$G$`. Note that a graph is not aperiodic if it is
 * acyclic as every integer trivial divides length `$0$` cycles.
 *
 *
 * ### References
 *
 * [1] Jarvis, J. P.; Shier, D. R. (1996),
 *     Graph-theoretic analysis of finite Markov chains,
 *     in Shier, D. R.; Wallenius, K. T., Applied Mathematical Modeling:
 *     A Multidisciplinary Approach, CRC Press.
 *
 * @param {Graph} G
 * @return {boolean} true if the graph is aperiodic false otherwise
 */
export function isAperiodic(G: Graph): boolean;
