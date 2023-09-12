/**
 * Returns `true` if `sequence` is a valid degree sequence.
 * A degree sequence is valid if some graph can realize it.
 *
 * ### Example
 *
 * ```
 * var G = jsnx.pathGraph(4);
 * var sequence = G.degree().values();
 * jsnx.isValidDegreeSequence(sequence);
 * // true
 * ```
 *
 * @param {Iterable} sequence A sequence of integer node degrees.
 * @param {string=} optMethod ('eg' | 'hh')
 *      The method used to validate the degree sequence.
 *      "eg" corresponds to the Erdős-Gallai algorithm, and
 *      "hh" to the Havel-Hakimi algorithm.
 * @return {boolean}
 *      `true` if `sequence` is a valid degree sequence and `false` if not.
 */
export function isGraphical(sequence: Iterable, optMethod?: string | undefined): boolean;
/**
 * @alias isGraphical
 */
export function isValidDegreeSequence(sequence: any, optMethod: any): Promise<boolean>;
/**
 * Returns `true` if `degreeSequence` cam be realized by a simple graph.
 *
 * The Validation proceeds via the Havel-Hakimi theorem.
 * Worst-case run time is `$O(s)$`, where `$s$` is the sum of the degree
 * sequence.
 *
 * The `$ZZ$` condition says that for the sequence `$d$`, if
 *
 * ```math
 *     |d| >= \frac{(\max(d) + \min(d) + 1)^2}{4*\min(d)}
 * ```
 *
 * then `$d$` is graphical.
 *
 * ### References
 *
 * [1] I.E. Zverovich and V.E. Zverovich. "Contributions to the theory
 *     of graphic sequences", Discrete Mathematics, 105, pp. 292-303 (1992).
 *
 * @param {Iterable} degreeSequence
 *   A list of integers where each element specifies the degree of a node
 *   in a graph.
 * @return {boolean} `true` if `degreeSequence` is graphical and `false` if not.
 */
export function isValidDegreeSequenceHavelHakimi(degreeSequence: Iterable): boolean;
/**
 * Returns `true` if `degreeSequence` can be realized by a simple graph.
 * The validation is done using the Erdős-Gallai theorem.
 *
 * This implementation uses an equivalent form of the Erdős-Gallai criterion.
 * Worst-case run time is `$O(n)$` where `$n$` is the length of the sequence.
 *
 * Specifically, a sequence `$d$` is graphical if and only if the sum of the
 * sequence is even and for all strong indices `$k$` in the sequence,
 *
 * ```math
 * \sum_{i=1}^{k} d_i \leq k(k-1) + \sum_{j=k+1}^{n} \min(d_i,k)
 *    = k(n-1) - ( k \sum_{j=0}^{k-1} n_j - \sum_{j=0}^{k-1} j n_j )
 * ```
 *
 * A strong index `$k$` is any index where `$d_k \geq k$` and the value `$n_j$`
 * is the number of occurrences of `$j$` in `$d$`. The maximal strong index is
 * called the Durfee index.
 *
 * This particular rearrangement comes from the proof of Theorem 3 in (2)
 *
 * The `$ZZ$` condition says that for the sequence `$d$`, if
 *
 * ```math
 * |d| >= \frac{(\max(d) + \min(d) + 1)^2}{4*\min(d)}
 * ```
 *
 * then `$d$` is graphical. This was shown in Theorem 6 in (2).
 *
 * ### References
 * [1] A. Tripathi and S. Vijay. "A note on a theorem of Erdős & Gallai",
 *     Discrete Mathematics, 265, pp. 417-420 (2003).
 *
 * [2] I.E. Zverovich and V.E. Zverovich. "Contributions to the theory
 *     of graphic sequences", Discrete Mathematics, 105, pp. 292-303 (1992).
 *
 * @param {Iterable} degreeSequence
 *      A list of integers where each element specifies the degree of a node
 *      in a graph.
 * @return {boolean} `true` if `degreeSequence` is graphical and f`alse` if not.
 */
export function isValidDegreeSequenceErdosGallai(degreeSequence: Iterable): boolean;
