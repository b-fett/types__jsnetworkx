/**
 * Return Zachary's Karate club graph.
 *
 * ### References
 *
 * [1] Zachary W.
 *     An information flow model for conflict and fission in small groups.
 *     Journal of Anthropological Research, 33, 452-473, (1977).
 *
 * [2] Data file from:
 *     <http://vlado.fmf.uni-lj.si/pub/networks/data/Ucinet/UciData.htm>
 *
 * @return {Graph}
 */
export function karateClubGraph(): Graph;
/**
 * Return Davis Southern women social network.
 *
 * This is a bipartite graph.
 *
 * ### References
 *
 * [1] A. Davis, Gardner, B. B., Gardner, M. R., 1941. Deep South.
 * University of Chicago Press, Chicago, IL.
 *
 * @return {Graph}
 */
export function davisSouthernWomenGraph(): Graph;
/**
 * Return Florentine families graph.
 *
 * ### References
 *
 * [1] Ronald L. Breiger and Philippa E. Pattison
 * Cumulated social roles: The duality of persons and their algebras,1
 * Social Networks, Volume 8, Issue 3, September 1986, Pages 215-256
 *
 * @return {Graph}
 */
export function florentineFamiliesGraph(): Graph;
import Graph from '../classes/Graph';
