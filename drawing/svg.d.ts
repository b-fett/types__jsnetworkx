/**
 * Draw graph G with D3.
 *
 * This method draws `G` with the provided `options`. If `optBind` is set to
 * `true`, changes to the graph structure will automatically update the
 * visualization.
 *
 * Returns the force layout used to compute the position of the nodes.
 *
 * The following options are available:
 *
 * - element (Element|String): This option is **required**. Specifies the
 *   container of the visualization. A string is interpreted as CSS selector.
 * - d3 (d3): Use to explicitly pass a reference to D3. If not present, the
 *   global variable d3 will be used instead.
 * - width (number): The width of the canvas in pixels. Defaults to the width
 *   of the container.
 * - height (number): The height of the canvas in pixels. Defaults to the
 *   height of the container.
 * - layoutAttr (Object): Layout options. The default layout is "force", so
 *   the options size, linkDistance, linkStrength, friction, charge, theta
 *   and gravity can be set. For example, setting `{linkDistance: 10}` will call
 *   `force.linkDistance(10)`.
 * - nodelist (Iterable): An iterable of nodes. If present, only nodes in that
 *   list will be drawn.
 * - nodeShape (string): The tag name of the SVG element to be used as nodes.
 *   Defaults to "circle".
 * - nodeAttr (Object): The attributes to set on the node SVG element. This
 *   object is passed along to D3's `.attr()` method.
 * - nodeStyle (Object): The style properties to set on the node SVG element.
 *   This object is passed along to D3's `.style()` method.
 * - edgeAttr (Object): The attributes to set on an edge SVG element. Edges are
 *   represented by SVG path elements.
 * - edgeStyle (Object): The style properties to set on the edge SVG element.
 *   Note: Even though the edge element is a SVG path element, you cannot set
 *   `stroke-width` to set the stroke width. Instead, the value of
 *   `stroke-width` is used as maximum value for the edge width.
 * - withLabels (boolean): Whether or not to draw node labels. SVG text elements
 *   are used for labels.
 * - labels (string|Object|function): The node labels to use.
 *   If `withLabels` is `true`, but `labels` is not present, defaults to the
 *   node itself.
 *   If a string is passed, the value of the property of the node data with the
 *   same name will be used.
 *   If an object is passed, the label is looked up in the object using the node
 *   as property name.
 *   If a function is passed, it gets called and passed the corresponding D3
 *   data object.
 * - labelAttr (Object): Like `nodeAttr` but for the label nodes. Labels are
 *   represented by SVG text nodes.
 * - labelStyle (Object): Like `nodeStyle` but for the label nodes. Labels are
 *   represented by SVG text nodes.
 * - withEdgeLabels (boolean): See `withLabels`, but for edges.
 * - edgeLabels (string|Object|function): See `labels`.
 * - edgeLabelAttr (Object): Like `labelAttr`.
 * - edgeLabelStyle (Object): Like `labelStyle`.
 * - weighted (boolean): Whether the edge width depends on the weight of the
 *   edge. The max and min weight are automatically computed. This is a
 *   convenience option so that you don't have to compute the edge weights
 *   yourself.
 * - weights (string|function): Specifies the weight for each edge.
 *   If `weighted` is `true` but `weights` is not present, defaults to
 *   `"weight"`.
 *   If a string is passed, the value of the property of the edge data with the
 *   same name is used as weight.
 *   If a function is passed, it gets called and passed the corresponding D3
 *   data object.
 * - edgeOffset (number|function): The distance in pixels between the edge start
 *   and the node. If not set and `nodeShape` is a `"circle"`, the offset will
 *   be automatically computed based on the radius.
 *   If a different shape for nodes is used it might be necessary to set the
 *   offset manually.
 * - edgeLabelOffset (number|function): By default edge labels are drawing in
 *   in the center of the edge. Can be used to adjust the position.
 * - panZoom (Object):
 *      - enabled (boolean): Enables panning and zooming of the canvas.
 *      - scale (boolean): Whether nodes and labels should keep their size
 *        when zooming or not.
 *
 * @param {jsnx.classes.Graph} G The graph to draw
 * @param {?Object=} config A dictionary of configuration parameters.
 * @param {?boolean=} optBind Set to true to automatically update
 *      the output upon graph manipulation. Only works for adding nodes or edges
 *      for now.
 * @return {d3.layout.force}
 */
export function draw(G: jsnx.classes.Graph, config?: (any | null) | undefined, optBind?: (boolean | null) | undefined): d3.layout.force;
