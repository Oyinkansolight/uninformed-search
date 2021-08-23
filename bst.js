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

		this.left_x = 300,
		this.left_y = 200,
		this.right_x = 500,
		this.right_y = 200;
	}

	insert(value) {
		const newNode = new Node(value);

		if (!this.root) {
			this.root = newNode;
			this.nodes.push({
				id: `node ${newNode.value}`,
				x: 400,
				y: 100,
				color: "#40a9ff",
				label: `${newNode.value}`,
				labelCfg: {
					position: "top",
				},
			});
			return;
		} else {
			let currentNode = this.root;

			while (true) { 
				this.left_y >= 400 ? this.left_y -= 100 : ''
				this.left_y >= 450 ? this.left_y -= 100 : ''
				
				if (value < currentNode.value) {
					//GO LEFT
					if (!currentNode.left) {
						currentNode.left = newNode;
						currentNode.children.push(newNode);
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
						});

						this.left_x -= 50;
						this.left_y += 100;

						this.edges.push({
							source: `node ${currentNode.value}`,
							target: `node ${newNode.value}`,
						});
						return this;
					}
					currentNode = currentNode.left;
					
				} else {
					//GO RIGHT
					if (!currentNode.right) {
						currentNode.right = newNode;
						currentNode.children.push(newNode);
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
						this.right_x += 50;
						this.right_y += 100;

						this.edges.push({
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
		let stack = [];
		stack.push(this.root);

		//May need to change the output for the GUI
		while (stack.length) {
			for (let i = 0; i < stack.length; i++) {
				let node = stack.pop();

				if (node.value === goal) {
					return node;
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
			depth = 0;
		stack.push(this.root);

		//May need to change the output for the GUI
		if (depth < limit) {
			while (stack.length) {
				for (let i = 0; i < stack.length; i++) {
					let node = stack.pop();

					if (node.value === goal) {
						return node;
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
			visited = {};
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

						// return visited;

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
		//not done
	}
}
