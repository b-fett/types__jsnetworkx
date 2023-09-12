/**
 * Exception for algorithms that should return a path when running
 * on graphs where such a path does not exist.
 */
export default class JSNetworkXNoPath extends JSNetworkXUnfeasible {
}
import JSNetworkXUnfeasible from './JSNetworkXUnfeasible';
