import BinarySearchTree from "./bst.js";
// import G6 from "./node_modules/@antv/g6";
// import DFS from './dfs.js';
// import DLS from './dls.js';
import traverse from "./helpers/traverse-bst.js";
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

	  // 9
// 4		20
// 1	6	  15	170

// console.log(tree.breadthFirstSearch(170));
// console.log(tree.lookup(15));
// console.log(tree.depthFirstSearchInOrder());
// console.log(tree.depthFirstSearch(9));
// console.log(tree.depthLimitedSearch(15, 1));

// const test = () => {
// 	let limit = 0;
// 	while (1) {
// 		let status = tree.iterativeDeepeningSearch(15, 0, 0);
// 		// console.log(limit);
// 		// console.log(status);
// 		if (status) {
// 			return status;
// 			// break;
// 		} else limit++;
// 	}

// };

console.log(tree.iterativeDeepeningSearch(15, 0, 0));
// console.log(tree.iterativeDeepeningSearch(15, 1, depth));}

// console.log(tree.lookup(15));

// console.log(JSON.stringify(traverse(tree.root)));

G6.registerEdge(
	"circle-running",
	{
		afterDraw(cfg, group) {
			// get the first shape in the group, it is the edge's path here=
			const shape = group.get("children")[0];
			// the start position of the edge's path
			const startPoint = shape.getPoint(0);

			// add red circle shape
			const circle = group.addShape("circle", {
				attrs: {
					x: startPoint.x,
					y: startPoint.y,
					fill: "#1890ff",
					r: 3,
				},
				name: "circle-shape",
			});

			// animation for the red circle
			circle.animate(
				(ratio) => {
					// the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
					// get the position on the edge according to the ratio
					const tmpPoint = shape.getPoint(ratio);
					// returns the modified configurations here, x and y here
					return {
						x: tmpPoint.x,
						y: tmpPoint.y,
					};
				},
				{
					repeat: true, // Whether executes the animation repeatly
					duration: 3000, // the duration for executing once
				}
			);
		},
	},
	"cubic" // extend the built-in edge 'cubic'
);

const data = {
	nodes: [
		{
			id: "node1",
			x: 100,
			y: 100,
			label: "Node 1",
			labelCfg: {
				position: "top",
			},
		},
		{
			id: "node2",
			x: 300,
			y: 200,
			color: "#40a9ff",
			label: "Node 2",
			labelCfg: {
				position: "left",
				offset: 10,
			},
		},
	],
	edges: [
		{
			source: "node1",
			target: "node2",
		},
	],
};

const container = document.getElementById("container");
const width = container.scrollWidth;
const height = container.scrollHeight || 500;
const graph = new G6.Graph({
	container: "container",
	width,
	height,
	defaultEdge: {
		type: "circle-running",
		style: {
			lineWidth: 2,
			stroke: "#bae7ff",
		},
	},
});
graph.data(data);
graph.render();

if (typeof window !== "undefined")
	window.onresize = () => {
		if (!graph || graph.get("destroyed")) return;
		if (!container || !container.scrollWidth || !container.scrollHeight)
			return;
		graph.changeSize(container.scrollWidth, container.scrollHeight);
	};
