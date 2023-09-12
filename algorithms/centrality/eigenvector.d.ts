/**
 * Compute the eigenvector centrality for `G`.
 *
 * Eigenvector centrality computes the centrality for a node based on the
 * centrality of its neighbors. The eigenvector centrality for node `i` is
 *
 * ```math
 * Ax = \lambda x
 * ```
 *
 * where `$A$` is the adjacency matrix of the graph `G` with eigenvalue
 * `$\lambda$`. By virtue of the Perron-Frobinus theorem, there is a unique and
 * positive solution if `$\lambda$` is the largest eigenvalue associated with
 * the eigenvector of the adjacency matrix `$A$`. ([2])
 *
 * ### Examples
 *
 * ```
 * var G = jsnx.pathGraph(4);
 * jsnx.eigenvectorCentrality(G);
 * // Map {0: 0.37, 1: 0.6, 2: 0.6, 3: 0.37}
 * ```
 *
 * ### Notes
 *
 * The measure was introduced by ([1][]).
 *
 * The eigenvector calculation is done by the power iteration method and has
 * no guarantee of convergence. The iteration will stop after `maxIter`
 * iterations or an error tolerance of `numberOfNodes(G) * tol` has been
 * reached.
 *
 * For directed graphs this is "left" eigenvector centrality which corresponds
 * to the in-edges in the graph. For out-edges eigenvector centrality
 * first reverse the graph with `G.reverse()`.
 *
 * ### References
 *
 * [1] [Phillip Bonacich:
 *     Power and Centrality: A Family of Measures.
 *     American Journal of Sociology 92(5):1170–1182, 1986](1)
 * [1]: http://www.leonidzhukov.net/hse/2014/socialnetworks/papers/Bonacich-Centrality.pdf
 * [2] Mark E. J. Newman:
 *     Networks: An Introduction.
 *     Oxford University Press, USA, 2010, pp. 169.
 *
 * @see pagerank
 * @see hits
 *
 * @param {Graph} G
 * @param {{maxIter: ?number, tolerance: ?number, nstart: ?Map, weight: ?string}} optParameters
 *   - maxIter: Maximum number of iterations in power method.
 *   - tolerance: Error tolerance used to check convergence in power method
 *     iteration.
 *   - nstart: Starting value of eigenvector iteration for each node.
 *   - weight: If not defined, all edge weights are considered equal. Otherwise
 *     holds the name of the edge attribute used as weight.
 * @return {Map} Map of nodes with eigenvector centrality as the value
 */
export function eigenvectorCentrality<T>(G: Graph<T>, { maxIter, tolerance, nstart, weight }?: {
    maxIter?: number | null;
    tolerance?: number | null;
    nstart?: Map | null;
    weight?: string | null;
}): Map<string, T>;
import { Graph } from '../../classes';
import { Map } from '../../_internals';
