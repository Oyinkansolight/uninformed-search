import BinarySearchTree from "./bst.js";
// import DFS from './dfs.js';
// import DLS from './dls.js';
import traverse from "./helpers/traverse-bst.js";

// import {
// 	Stack,
// 	Queue,
// 	MinPriorityQueue,
// 	MaxPriorityQueue,
// 	Graph,
// 	DirectedGraph,
// } from "datastructures-js";

// let A = 0,
// 	B = 1,
// 	C = 2,
// 	D = 3,
// 	E = 4,
// 	F = 5,
// 	G = 6,
// 	H = 7;

// let data = [
// 	[A, B, 1],
// 	[A, C, 1],
// 	[B, D, 1],
// 	[C, E, 1],
// 	[C, F, 1],
// 	[D, G, 1],
// 	[D, H, 1],
// ];

// ===================
let S = 0,
	A = 1,
	B = 2,
	C = 3,
	D = 4;

let data = [
	[S, A, 1],
	[S, B, 1],
	[S, C, 1],
	[A, D, 1],
	[B, D, 1],
	[C, D, 1],
];

// ==================
// let data = [
//     [0,1,1],
//     [0,2,1],
//     [1,3,1],
//     [2,4,1],
// ]

// DFS(data, 0, 4);
// DLS(data, 0, 4, 2)

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

const test = () => {
	let limit = 0;
	while (1) {
		let status = tree.iterativeDeepeningSearch(15, limit, 0);
		// console.log(limit);
		// console.log(status);
		if (status) {
			return status;
			// break;
		} else limit++;
	}
	// return tree.iterativeDeepeningSearch(15, 1, depth);

};

console.log(test());
// console.log(tree.iterativeDeepeningSearch(15, 1, depth));}

// console.log(tree.lookup(15));

// console.log(JSON.stringify(traverse(tree.root)));
