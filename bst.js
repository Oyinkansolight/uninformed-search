import {
	Node,
	traverseInOrder,
	traversePreOrder,
	traversePostOrder,
} from "./helpers/index.js";

export default class BinarySearchTree {
	constructor() {
		this.root = null;
		this.nodes = [];
		this.edges = [];
		this.data = {
			nodes: this.nodes,
			edges: this.edges,
		};
	}

	insert(value, weight = 0) {
		const newNode = new Node(value);
		let parent_distance = 0
		if (!this.root) {
			this.root = newNode;
			this.nodes.push({
				id: `node ${newNode.value}`,
				x: 400,
				y: 100,
				color: "#40a9ff",
				label: `${newNode.value}`,
				depth: 0,
				labelCfg: {
					position: "top",
				},
				children: [],
			});
			return;
		} else {
			let currentNode = this.root;

			while (true) {
				parent_distance = currentNode.distance_to_root;
				if (value < currentNode.value) {
					//GO LEFT
					if (!currentNode.left) {
						currentNode.left = newNode;
						currentNode.weights.push(weight);
						currentNode.distance_to_root = parent_distance + weight;
						//UNSHIFT IS USED INSTEAD OF PUSH TO MAKE SURE THAT THE LEFT-NODE IS ALWAYS THE FIRST CHILD IF PRESENT
						currentNode.children.unshift(newNode);
						this.nodes[0].children = {
							id: `node ${newNode.value}`,
							x: this.left_x,
							y: this.left_y,
							depth: currentNode.depth + 1,
							status: 0,
							color: "#40a9ff",
							label: `${newNode.value}`,
							labelCfg: {
								position: "left",
								offset: 10,
							},
							children: [],
						}
						currentNode.left.depth = currentNode.depth + 1;
						this.nodes.push({
							id: `node ${newNode.value}`,
							x: this.left_x,
							y: this.left_y,
							depth: currentNode.depth + 1,
							status: 0,
							color: "#40a9ff",
							label: `${newNode.value}`,
							labelCfg: {
								position: "left",
								offset: 10,
							},
							children: [],
						});

						this.edges.push({
							weight: weight,
							source: `node ${currentNode.value}`,
							target: `node ${newNode.value}`,
							type: 'polyline',
							style: {
								fill: 'steelblue',
							  },
						});

						

						return this;
					}
					currentNode = currentNode.left;
				} else {
					//GO RIGHT
					if (!currentNode.right) {
						currentNode.right = newNode;
						currentNode.children.push(newNode);
						currentNode.weights.push(weight);
						currentNode.distance_to_root = parent_distance + weight;
						currentNode.right.depth = currentNode.depth + 1;
						this.nodes.push({
							id: `node ${newNode.value}`,
							x: this.right_x,
							y: this.right_y,
							color: "#40a9ff",
							label: `${newNode.value}`,
							labelCfg: {
								position: "right",
								offset: 10,
							},
						});

						this.edges.push({
							weight: weight,
							source: `node ${currentNode.value}`,
							target: `node ${newNode.value}`,
						});

						

						return this;
					}
					currentNode = currentNode.right;
					// console.log(this.left_y, this.right_y);
				}
			}
		}
	}

	lookup(value) {
		if (!this.root) return false;
		if (value === this.root.value) return this.root;

		let currentNode = this.root;
		let parentNode = null;
		// const result = [];

		while (currentNode) {
			// result.push(currentNode.value);

			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (value === currentNode.value) {
				return currentNode;
			}
		}

		return "Not found";
	}

	depthFirstSearch(goal) {
		let stack = [], result = [];
		stack.push(this.root);

		//May need to change the output for the GUI
		while (stack.length) {
			for (let i = 0; i < stack.length; i++) {
				let node = stack.pop();
				result.push(node.value)

				if (node.value === goal) {
					return result
					// return node;
				}

				if (node.right) {
					stack.push(node.right);
				}

				if (node.left) {
					stack.push(node.left);
				}
			}
		}

		return null;
	}

	depthFirstSearchInOrder() {
		return traverseInOrder(this.root, []);
	}

	depthFirstSearchPreOrder(goal) {
		return traversePreOrder(this.root, [], goal);
	}

	depthFirstSearchPostOrder() {
		return traversePostOrder(this.root, []);
	}

	depthLimitedSearch(goal, limit) {
		let stack = [],
			depth = 0,
			allNodes = [];
		stack.push(this.root);

		//May need to change the output for the GUI
		if (depth < limit) {
			while (stack.length) {
				for (let i = 0; i < stack.length; i++) {
					let node = stack.pop();
					allNodes.push(node.value);

					if (node.value === goal) {
						return allNodes;
						// return node;
					}

					if (node.right) {
						stack.push(node.right);
					}

					if (node.left) {
						stack.push(node.left);
					}

					if (node.right || node.left) {
						depth += 1;
					}
				}
			}
		}

		return null;
	}

	iterativeDeepeningSearch(goal, limit, depth) {
		while (1) {
			let status = this._iterativeDeepeningSearch(goal, limit, depth);
			if (status) {
				return status;
			} else limit++;
		}
	}

	_iterativeDeepeningSearch(goal, limit, depth) {
		let stack = [],
			status = 0,
			visited = {},
			all = [],
			allDepths = [depth];
		// NEED TO RETURN TRAVERSED  PATH
		stack.push(this.root);

		if (depth < limit) {
			let allVisited = [];
			while (stack.length) {
				for (let i = 0; i < stack.length; i++) {
					let node = stack.pop();

					allVisited.push(node.value);

					if (node.value === goal) {
						status = 1;
						console.log(allDepths);
						return allVisited;

						return node;
					}

					if (node.right) {
						stack.push(node.right);
						allVisited.push(node.right.value);
					}

					if (node.left) {
						stack.push(node.left);
						allVisited.push(node.left.value);
					}

					if (node.right || node.left) {
						depth += 1;
					}
					allDepths.push(depth);

				}

				visited[depth] = allVisited;
			}
		}

		return null;
		// return null;
	}

	breadthFirstSearch(goal) {
		//Iterative Approach
		let currentNode = this.root;
		let result = [];
		let queue = [];
		queue.push(currentNode);

		while (queue.length > 0) {
			currentNode = queue.shift();
			result.push(currentNode.value);

			if (currentNode.value === goal) return result;

			//CHECK IF NODES HAVE LEFT OR RIGHT NODES AND THEN ADD TO QUEUE
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}

		return "Not found!";
	}

	uniformCostSearch(goal) {
		const queue = new PriorityQueueMin();
		queue.enqueue(this.root);
		let nodes = [this.root.value]
		while(true){
			let e;
			if (queue.arr.length === 0) return null;
			e = queue.dequeue();
			nodes.push(e.value)

			if(e.value === goal){
				return nodes;
				// return e;
			}
			e.children.forEach(element => {
				queue.enqueue(element);
			});
		}
	}
}


class PriorityQueueMin{
	constructor(){
		this.arr = [];
	}

	enqueue(v){
		for (let i = 0; i < this.arr.length; i++) {
			const value = this.arr[i].distance_to_root;
			if (v.distance_to_root < value){
				this.arr.splice(i, 0, v);
				return;
			}
		}
		this.arr.push(v);
	}
	
	dequeue(){
		return this.arr.splice(0,1)[0];
	}
}