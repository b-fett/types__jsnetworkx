/**
 * Return a simple graph with given degree sequence constructed
 * using the Havel-Hakimi algorithm.
 *
 * ### Notes
 *
 * The Havel-Hakimi algorithm constructs a simple graph by
 * successively connecting the node of highest degree to other nodes
 * of highest degree, resorting remaining nodes by degree, and
 * repeating the process. The resulting graph has a high
 * degree-associativity. Nodes are labeled `1,.., degreeSequence.length`,
 * corresponding to their position in `degreeSequence`.
 *
 * The basic algorithm is from Hakimi (1) and was generalized by
 * Kleitman and Wang (2).
 *
 * ### References
 *
 * [1] Hakimi S.,
 *   On Realizability of a Set of Integers as Degrees of the
 *   Vertices of a linear Graph. I,
 *   Journal of SIAM, 10(3), pp. 496-506 (1962)
 * [2] Kleitman D.J. and Wang D.L.
 *   Algorithms for Constructing Graphs and Digraphs with Given Valences and
 *   Factors,
 *   Discrete Mathematics, 6(1), pp. 79-88 (1973)
 *
 * @param {Iterable} degreeSequence list of integers
 *      Each integer corresponds to the degree of a node (need not be sorted).
 * @param {Graph} optCreateUsing
 *      Return graph of this type. The instance will be cleared.
 *      Directed graphs are not allowed.
 * @return {Graph}
 */
export function havelHakimiGraph(degreeSequence: Iterable, optCreateUsing: Graph): Graph;
