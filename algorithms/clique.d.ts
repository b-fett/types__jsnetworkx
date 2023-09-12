/**
 * @fileoverview
 * Find and manipulate cliques of graphs.
 *
 * Note that finding the largest clique of a graph has been
 * shown to be an NP-complete problem; the algorithms here
 * could take a long time to run.
 *
 * http://en.wikipedia.org/wiki/Clique_problem
 */
/**
 * Search for all maximal cliques in a graph.
 *
 * Maximal cliques are the largest complete subgraph containing
 * a given node.  The largest maximal clique is sometimes called
 * the maximum clique.
 *
 *
 * ### Notes
 *
 * Based on the algorithm published by Bron & Kerbosch (1973) ([1][])
 * as adapted by Tomita, Tanaka and Takahashi (2006) ([2][])
 * and discussed in Cazals and Karande (2008) ([3][]).
 *
 * This algorithm ignores self-loops and parallel edges as
 * clique is not conventionally defined with such edges.
 *
 * There are often many cliques in graphs.  This algorithm can
 * run out of memory for large graphs.
 *
 * ### References
 *
 * [1] [Bron, C. and Kerbosch, J. 1973.
 *    Algorithm 457: finding all cliques of an undirected graph.
 *    Commun. ACM 16, 9 (Sep. 1973), 575-577.][1]
 * [1]: http://portal.acm.org/citation.cfm?doid=362342.362367
 *
 * [2] [Etsuji Tomita, Akira Tanaka, Haruhisa Takahashi,
 *    The worst-case time complexity for generating all maximal
 *    cliques and computational experiments,
 *    Theoretical Computer Science, Volume 363, Issue 1,
 *    Computing and Combinatorics,
 *    10th Annual International Conference on
 *    Computing and Combinatorics (COCOON 2004), 25 October 2006,
 *    Pages 28-42][2]
 * [2]: http://dx.doi.org/10.1016/j.tcs.2006.06.015
 *
 * [3] [F. Cazals, C. Karande,
 *    A note on the problem of reporting maximal cliques,
 *    Theoretical Computer Science,
 *    Volume 407, Issues 1-3, 6 November 2008, Pages 564-568][3]
 * [3]: http://dx.doi.org/10.1016/j.tcs.2008.05.010
 *
 * @see findCliquesRecursive
 *
 * @param {Graph} G
 * @return {Iterator<Array<Node>>} Iterator over member lists for each maximal
 *  clique
 */
export function findCliques(G: Graph): Iterator<Node[]>;
/**
 * Recursive search for all maximal cliques in a graph.
 *
 * Maximal cliques are the largest complete subgraph containing
 * a given point.  The largest maximal clique is sometimes called
 * the maximum clique.
 *
 * ### Notes
 *
 * Based on the algorithm published by Bron & Kerbosch (1973) ([1][])
 * as adapted by Tomita, Tanaka and Takahashi (2006) ([2][])
 * and discussed in Cazals and Karande (2008) ([3][]).
 *
 * This algorithm ignores self-loops and parallel edges as
 * clique is not conventionally defined with such edges.
 *
 *
 * ### References
 *
 * [1] [Bron, C. and Kerbosch, J. 1973.
 *    Algorithm 457: finding all cliques of an undirected graph.
 *    Commun. ACM 16, 9 (Sep. 1973), 575-577.][1]
 * [1]: http://portal.acm.org/citation.cfm?doid=362342.362367
 *
 * [2] [Etsuji Tomita, Akira Tanaka, Haruhisa Takahashi,
 *    The worst-case time complexity for generating all maximal
 *    cliques and computational experiments,
 *    Theoretical Computer Science, Volume 363, Issue 1,
 *    Computing and Combinatorics,
 *    10th Annual International Conference on
 *    Computing and Combinatorics (COCOON 2004), 25 October 2006, Pages 28-42][2]
 * [2]: http://dx.doi.org/10.1016/j.tcs.2006.06.015
 *
 * [3] [F. Cazals, C. Karande,
 *    A note on the problem of reporting maximal cliques,
 *    Theoretical Computer Science,
 *    Volume 407, Issues 1-3, 6 November 2008, Pages 564-568][3]
 * [3]: http://dx.doi.org/10.1016/j.tcs.2008.05.010
 *
 * @param {Graph} G
 * @return {!Iterator<Array<Node>>} List of members in each maximal clique
 *
 * @see find_cliques
 */
export function findCliquesRecursive(G: Graph): Iterator<Node[]>;
/**
 * Return the clique number (size of the largest clique) for G.
 *
 * An optional list of cliques can be input if already computed.
 *
 * @param {Graph} G graph
 * @param {Iterable=} optCliques
 * @return {number}
 */
export function graphCliqueNumber(G: Graph, optCliques?: Iterable): number;
/**
 * Returns the number of maximal cliques in G.
 *
 * An optional list of cliques can be input if already computed.
 *
 * @param {Graph} G graph
 * @param {Iterable=} optCliques
 * @return {number}
 */
export function graphNumberOfCliques(G: Graph, optCliques?: Iterable): number;
/**
 * Returns the number of maximal cliques for each node.
 *
 * Returns a single or list depending on input nodes.
 * Optional list of cliques can be input if already computed.
 *
 * @param {Graph} G graph
 * @param {Iterable=} optNodes List of nodes
 * @param {Iterable=} optCliques List of cliques
 * @return {!(Map|number)}
 */
export function numberOfCliques(G: Graph, optNodes?: Iterable, optCliques?: Iterable): (Map | number);
import { Map } from '../_internals';
