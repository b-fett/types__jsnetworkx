/**
 * This module provides functions to convert JSNetworkX graphs to and from
 * non-NetworkX formats.
 */
/**
 * Return adjacency representation of graph as a map of lists.
 *
 * Completely ignores edge data for `MultiGraph` and `MultiDiGraph`.
 *
 * @param {Graph} G A graph
 * @param {Iterable=} optNodelist Use only nods specified in this list.
 *
 * @return {!Map}
 */
export function toMapOfLists(G: Graph, optNodelist?: Iterable): Map;
/**
 * Return a graph from a map of lists.
 * *
 * @param {!Map} map A map of lists adjacency representation.
 * @param {Graph=} optCreateUsing Use specified graph for result.
 *    Otherwise a new graph is created.
 *
 * @return {!Graph}
 */
export function fromMapOfLists(map: Map, optCreateUsing?: Graph): Graph;
/**
 * Return adjacency representation of graph as a map of maps.
 *
 * @param {Graph} G A jsnx Graph
 * @param {Iterable=} optNodelist Use only nodes specified in nodelist
 * @param {Object=} optEdgeData If provided,  the value of the map will be
 *      set to edgeData for all edges.  This is useful to make
 *      an adjacency matrix type representation with 1 as the edge data.
 *      If optEdgeData is null or undefined, the edge data in G is used to
 *      fill the values.
 *      If G is a multigraph, the edge data is a dict for each pair (u,v).
 *
 * @return {!Map}
 */
export function toMapOfMaps(G: Graph, optNodelist?: Iterable, optEdgeData?: any | undefined): Map;
/**
 * Return a graph from a map of maps.
 *
 * @param {!Map} map A map of maps adjacency representation.
 * @param {Graph=} optCreateUsing Use specified graph for result.
 *      Otherwise a new graph is created.
 * @param {boolean=} optMultigraphInput (default=False)
 *      When True, the values of the inner dict are assumed
 *      to be containers of edge data for multiple edges.
 *      Otherwise this routine assumes the edge data are singletons.
 *
 * @return {Graph}
 */
export function fromMapOfMaps(map: Map, optCreateUsing?: Graph, optMultigraphInput?: boolean | undefined): Graph;
import { Map } from '../_internals';
