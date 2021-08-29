import BinarySearchTree from "./bst.js";
// import G6 from "./node_modules/@antv/g6";
// import DFS from './dfs.js';
// import DLS from './dls.js';
import traverse from "./helpers/traverse-bst.js";

import Graph from 'graphology';

const graph = new Graph();
graph.addNode('John');
graph.addNode('Martha');
graph.addEdge('John', 'Martha');

console.log('Number of nodes', graph.order);
console.log('Number of edges', graph.size);
console.log(graph);
// graph.forEachNode(node => {
//   graph.forEachNeighbor(node, neighbor => console.log(node, neighbor));
// });

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(170);
tree.insert(6);
tree.insert(1);
tree.insert(15);

// 9
// 4		20
// 1	6	  15	170
// console.log(tree);
// console.log(tree.breadthFirstSearch(170));
// console.log(tree.lookup(15));
// console.log(tree.depthFirstSearchInOrder());
// console.log(tree.depthFirstSearch(9));
// console.log(tree.depthLimitedSearch(15, 1));

// console.log(tree.iterativeDeepeningSearch(15, 0, 0));
// console.log(tree.iterativeDeepeningSearch(15, 1, depth));}

// console.log(tree.lookup(15));

// console.log(JSON.stringify(traverse(tree.root)));

// G6.registerEdge(
// 	"circle-running",
// 	{
// 		afterDraw(cfg, group) {
// 			// get the first shape in the group, it is the edge's path here=
// 			const shape = group.get("children")[0];
// 			// the start position of the edge's path
// 			const startPoint = shape.getPoint(0);

// 			// add red circle shape
// 			const circle = group.addShape("circle", {
// 				attrs: {
// 					x: startPoint.x,
// 					y: startPoint.y,
// 					fill: "#ff0000",
// 					r: 3,
// 				},
// 				name: "circle-shape",
// 			});

// 			// animation for the red circle
// 			circle.animate(
// 				(ratio) => {
// 					// the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
// 					// get the position on the edge according to the ratio
// 					const tmpPoint = shape.getPoint(ratio);
// 					// returns the modified configurations here, x and y here
// 					return {
// 						x: tmpPoint.x,
// 						y: tmpPoint.y,
// 					};
// 				},
// 				{
// 					repeat: false, // Whether executes the animation repeatly
// 					duration: 3000, // the duration for executing once
// 				}
// 			);
// 		},
// 	},
// 	"cubic" // extend the built-in edge 'cubic'
// );

// G6.registerNode('treeNode', {
// 	draw: (cfg, group) => {
// 	  const { id, label, collapsed, selected, children, depth } = cfg;
// 	  const rootNode = depth === 0;
// 	  const hasChildren = children && children.length !== 0;
  
// 	  const {
// 		childCountWidth,
// 		countMarginLeft,
// 		itemPadding,
// 		selectedIconWidth,
// 		nameMarginLeft,
// 		rootPadding,
// 	  } = BaseConfig;
  
// 	  let width = 0;
// 	  const height = 28;
// 	  const x = 0;
// 	  const y = -height / 2;
  
// 	  // 名称文本
// 	  const text = group.addShape('text', {
// 		attrs: {
// 		  text: label,
// 		  x: x * 2,
// 		  y,
// 		  textAlign: 'left',
// 		  textBaseline: 'top',
// 		  fontFamily: 'PingFangSC-Regular',
// 		},
// 		cursor: 'pointer',
// 		name: 'name-text-shape',
// 	  });
// 	  const textWidth = text.getBBox().width;
// 	  width = textWidth + itemPadding + nameMarginLeft;
  
// 	  width = width < minWidth ? minWidth : width;
  
// 	  if (!rootNode && hasChildren) {
// 		width += countMarginLeft;
// 		width += childCountWidth;
// 	  }
  
// 	  const keyShapeAttrs = {
// 		x,
// 		y,
// 		width,
// 		height,
// 		radius: 4,
// 	  };
  
// 	  // keyShape根节点选中样式
// 	  if (rootNode && selected) {
// 		keyShapeAttrs.fill = '#e8f7ff';
// 		keyShapeAttrs.stroke = '#e8f7ff';
// 	  }
// 	  const keyShape = group.addShape('rect', {
// 		attrs: keyShapeAttrs,
// 		name: 'root-key-shape-rect-shape',
// 	  });
  
// 	  if (!rootNode) {
// 		// 底部横线
// 		group.addShape('path', {
// 		  attrs: {
// 			path: [
// 			  ['M', x - 1, 0],
// 			  ['L', width, 0],
// 			],
// 			stroke: '#AAB7C4',
// 			lineWidth: 1,
// 		  },
// 		  name: 'node-path-shape',
// 		});
// 	  }
  
// 	  const mainX = x - 10;
// 	  const mainY = -height + 15;
  
// 	  if (rootNode) {
// 		group.addShape('rect', {
// 		  attrs: {
// 			x: mainX,
// 			y: mainY,
// 			width: width + 12,
// 			height,
// 			radius: 14,
// 			fill: '#e8f7ff',
// 			cursor: 'pointer',
// 		  },
// 		  name: 'main-shape',
// 		});
// 	  }
  
// 	  let nameColor = 'rgba(0, 0, 0, .65)';
// 	  if (selected) {
// 		nameColor = '#40A8FF';
// 	  }
  
// 	  // 名称
// 	  if (rootNode) {
// 		group.addShape('text', {
// 		  attrs: {
// 			text: label,
// 			x: mainX + rootPadding,
// 			y: 1,
// 			textAlign: 'left',
// 			textBaseline: 'middle',
// 			fill: nameColor,
// 			fontSize: 12,
// 			fontFamily: 'PingFangSC-Regular',
// 			cursor: 'pointer',
// 		  },
// 		  name: 'root-text-shape',
// 		});
// 	  } else {
// 		group.addShape('text', {
// 		  attrs: {
// 			text: label,
// 			x: selected ? mainX + 6 + nameMarginLeft : mainX + 6,
// 			y: y - 5,
// 			textAlign: 'start',
// 			textBaseline: 'top',
// 			fill: nameColor,
// 			fontSize: 12,
// 			fontFamily: 'PingFangSC-Regular',
// 			cursor: 'pointer',
// 		  },
// 		  name: 'not-root-text-shape',
// 		});
// 	  }
  
// 	  // 子类数量
// 	  if (hasChildren && !rootNode) {
// 		const childCountHeight = 12;
// 		const childCountX = width - childCountWidth;
// 		const childCountY = -childCountHeight / 2;
  
// 		group.addShape('rect', {
// 		  attrs: {
// 			width: childCountWidth,
// 			height: 12,
// 			stroke: collapsed ? '#1890ff' : '#5CDBD3',
// 			fill: collapsed ? '#fff' : '#E6FFFB',
// 			x: childCountX,
// 			y: childCountY,
// 			radius: 6,
// 			cursor: 'pointer',
// 		  },
// 		  name: 'child-count-rect-shape',
// 		});
// 		group.addShape('text', {
// 		  attrs: {
// 			text: `${children?.length}`,
// 			fill: 'rgba(0, 0, 0, .65)',
// 			x: childCountX + childCountWidth / 2,
// 			y: childCountY + 12,
// 			fontSize: 10,
// 			width: childCountWidth,
// 			textAlign: 'center',
// 			cursor: 'pointer',
// 		  },
// 		  name: 'child-count-text-shape',
// 		});
// 	  }
  
// 	  return keyShape;
// 	},
//   });

//   G6.registerEdge('smooth', {
// 	draw(cfg, group) {
// 	  const { startPoint, endPoint } = cfg;
// 	  const hgap = Math.abs(endPoint.x - startPoint.x);
  
// 	  const path = [
// 		['M', startPoint.x, startPoint.y],
// 		[
// 		  'C',
// 		  startPoint.x + hgap / 4,
// 		  startPoint.y,
// 		  endPoint.x - hgap / 2,
// 		  endPoint.y,
// 		  endPoint.x,
// 		  endPoint.y,
// 		],
// 	  ];
  
// 	  const shape = group.addShape('path', {
// 		attrs: {
// 		  stroke: '#AAB7C4',
// 		  path,
// 		},
// 		name: 'smooth-path-shape',
// 	  });
// 	  return shape;
// 	},
//   });

// const container = document.getElementById("container");
// const width = container.scrollWidth;
// const height = container.scrollHeight || 500;
// // const graph = new G6.TreeGraph({
// // 	container: "container",
// // 	width,
// // 	height,
// // 	// animate: true,
// // 	// defaultEdge: {
// // 	// 	type: "circle-running",
// // 	// 	style: {
// // 	// 		lineWidth: 2,
// // 	// 		stroke: "#bae7ff",
// // 	// 	},
// // 	// },
// // 	modes: {
// // 		default: [
// // 		  {
// // 			// Assign the collapse/expand behavior
// // 			type: 'collapse-expand',
// // 		  },
// // 		  'drag-canvas',
// // 		],
// // 	  },
// // 	  // Assign the layout
// // 	  layout: {
// // 		type: 'dendrogram', // Layout type
// // 		direction: 'TB', // Layout direction is from the left to the right. Options: 'H' / 'V' / 'LR' / 'RL' / 'TB' / 'BT'
// // 		nodeSep: 50, // The distance between nodes
// // 		rankSep: 100, // The distance between adjacent levels
// // 	  },
// // });

// const BaseConfig = {
// 	nameFontSize: 12,
// 	childCountWidth: 22,
// 	countMarginLeft: 0,
// 	itemPadding: 16,
// 	nameMarginLeft: 4,
// 	rootPadding: 18,
//   };

// const graph = new G6.TreeGraph({
// 	container: 'container',
// 	width,
// 	height,
// 	modes: {
// 	  default: [
// 		{
// 		  type: 'collapse-expand',
// 		},
// 		'drag-canvas',
// 		'zoom-canvas',
// 	  ],
// 	},
// 	defaultNode: {
// 	  type: 'treeNode',
// 	  anchorPoints: [
// 		[0, 0.5],
// 		[1, 0.5],
// 	  ],
// 	},
// 	defaultEdge: {
// 	  type: 'smooth',
// 	},
// 	layout: {
// 	  type: 'compactBox',
// 	  direction: 'LR',
// 	//   getId: function getId(d) {
// 	// 	return d.id;
// 	//   },
// 	//   getHeight: function getHeight() {
// 	// 	return 16;
// 	//   },
// 	//   getWidth: function getWidth(d) {
// 	// 	const labelWidth = G6.Util.getTextSize(d.label, BaseConfig.nameFontSize)[0];
// 	// 	const width =
// 	// 	  BaseConfig.itemPadding +
// 	// 	  BaseConfig.nameMarginLeft +
// 	// 	  labelWidth +
// 	// 	  BaseConfig.rootPadding +
// 	// 	  BaseConfig.childCountWidth;
// 	// 	return width;
// 	//   },
// 	//   getVGap: function getVGap() {
// 	// 	return 15;
// 	//   },
// 	//   getHGap: function getHGap() {
// 	// 	return 30;
// 	//   },
// 	},
//   });
// graph.data(tree.data);
// graph.render();

// if (typeof window !== "undefined")
// 	window.onresize = () => {
// 		if (!graph || graph.get("destroyed")) return;
// 		if (!container || !container.scrollWidth || !container.scrollHeight)
// 			return;
// 		graph.changeSize(container.scrollWidth, container.scrollHeight);
// 	};


// fetch(
// 	"https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json"
// )
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data);
// 		const container = document.getElementById("container");
// 		const width = container.scrollWidth;
// 		const height = container.scrollHeight || 500;
// 		const graph = new G6.TreeGraph({
// 			container: "container",
// 			width,
// 			height,
// 			linkCenter: true,
// 			modes: {
// 				default: [
// 					{
// 						type: "collapse-expand",
// 						onChange: function onChange(item, collapsed) {
// 							const data = item.getModel();
// 							data.collapsed = collapsed;
// 							return true;
// 						},
// 					},
// 					"drag-canvas",
// 					"zoom-canvas",
// 				],
// 			},
// 			defaultNode: {
// 				size: 26,
// 				anchorPoints: [
// 					[0, 0.5],
// 					[1, 0.5],
// 				],
// 			},
// 			defaultEdge: {
// 				type: "cubic-vertical",
// 			},
// 			layout: {
// 				type: "compactBox",
// 				direction: "TB",
// 				getId: function getId(d) {
// 					return d.id;
// 				},
// 				getHeight: function getHeight() {
// 					return 16;
// 				},
// 				getWidth: function getWidth() {
// 					return 16;
// 				},
// 				getVGap: function getVGap() {
// 					return 80;
// 				},
// 				getHGap: function getHGap() {
// 					return 20;
// 				},
// 			},
// 		});

// 		graph.node(function (node) {
// 			let position = "right";
// 			let rotate = 0;
// 			if (!node.children) {
// 				position = "bottom";
// 				rotate = Math.PI / 2;
// 			}
// 			return {
// 				label: node.id,
// 				labelCfg: {
// 					position,
// 					offset: 5,
// 					style: {
// 						rotate,
// 						textAlign: "start",
// 					},
// 				},
// 			};
// 		});
// 		console.log(JSON.stringify(tree.data()));
// 		graph.data(data);
// 		graph.render();
// 		graph.fitView();

// 		if (typeof window !== "undefined")
// 			window.onresize = () => {
// 				if (!graph || graph.get("destroyed")) return;
// 				if (
// 					!container ||
// 					!container.scrollWidth ||
// 					!container.scrollHeight
// 				)
// 					return;
// 				graph.changeSize(container.scrollWidth, container.scrollHeight);
// 			};
// 	});
