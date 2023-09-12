/**
 * Return a random graph `$G_{n,p}$` (Erdős-Rényi graph, binomial graph).
 *
 * The `$G_{n,p}$` graph algorithm chooses each of the `$[n(n-1)]/2$`
 * (undirected) or `$n(n-1)$` (directed) possible edges with probability `$p$`.
 *
 * This algorithm is `$O(n+m)$` where `$m$` is the expected number of
 * edges `$m = p*n*(n-1)/2$`.
 *
 * It should be faster than `gnpRandomGraph` when `p` is small and
 * the expected number of edges is small (sparse graph).
 *
 * ### References
 *
 * [1] Vladimir Batagelj and Ulrik Brandes,
 *     "Efficient generation of large random networks",
 *     Phys. Rev. E, 71, 036113, 2005.
 *
 * @param {number} n The number of nodes
 * @param {number} p Probability for edge creation
 * @param {boolean} optDirected If true return a directed graph
 * @return {Graph}
 */
export function fastGnpRandomGraph(n: number, p: number, optDirected?: boolean): Graph;
/**
 * Return a random graph `$G_{n,p}$` (Erdős-Rényi graph, binomial graph).
 *
 * Chooses each of the possible edges with probability `p.
 *
 * This is also called `binomialGraph` and `erdosRenyiGraph`.
 *
 * This is an `$O(n^2)$` algorithm.  For sparse graphs (small `$p$`) see
 * `fastGnpRandomGraph for a faster algorithm.
 *
 * @param {number} n The number of nodes
 * @param {number} p Probability for edge creation
 * @param {boolean} optDirected
 *  If true returns a directed graph
 * @return {Graph}
 */
export function gnpRandomGraph(n: number, p: number, optDirected?: boolean): Graph;
/**
 * @alias gnpRandomGraph
 */
export function binomialGraph(n: any, p: any, optDirected: any): Promise<Graph>;
/**
 * @alias gnpRandomGraph
 */
export function erdosRenyiGraph(n: any, p: any, optDirected: any): Promise<Graph>;
import Graph from '../classes/Graph';
