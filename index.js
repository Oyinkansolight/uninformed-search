import BinarySearchTree from "./bst.js";

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4, 7);
tree.insert(20, 20);
tree.insert(170, 50);
tree.insert(6, 1);
tree.insert(1, 60);
tree.insert(15, 400);

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
