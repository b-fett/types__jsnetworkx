/**
 * Returns `false` if graphs are definitely not isomorphic.
 * `true` does **not** guarantee isomorphism.
 *
 * Checks for matching degree, triangle, and number of cliques sequences.
 *
 * @param {!Graph} G1
 * @param {!Graph} G2
 * @return {boolean}  `false` if graphs are definitely not isomorphic.
 */
export function couldBeIsomorphic(G1: Graph, G2: Graph): boolean;
/**
 * Returns `false` if graphs are definitely not isomorphic.
 * `true` does **not** guarantee isomorphism.
 *
 * Checks for matching degree and triangle sequences.
 *
 * @param {!Graph} G1
 * @param {!Graph} G2
 * @return {boolean}  `false` if graphs are definitely not isomorphic.
 */
export function fastCouldBeIsomorphic(G1: Graph, G2: Graph): boolean;
/**
 * Returns `false` if graphs are definitely not isomorphic.
 * `true` does **not** guarantee isomorphism.
 *
 * Checks for matching degree sequences.
 *
 * @param {!Graph} G1
 * @param {!Graph} G2
 *
 * @return {boolean}  False if graphs are definitely not isomorphic.
 *
 * @export
 */
export function fasterCouldBeIsomorphic(G1: Graph, G2: Graph): boolean;
