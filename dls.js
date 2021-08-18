import InitGraph from "./graph.js";
import { Stack } from "datastructures-js";

export default function DLS(data, root, goal, limit) {
	let node,
		depth = 0,
		stack;
	const graph = InitGraph(data);

	stack = new Stack();
	stack.push(root);

	while (!stack.isEmpty()) {
		node = stack.pop();

		console.log(node, "==", goal);
		if (node === goal) break;

		if (depth < limit) {
			for (let to = 0; to < graph.getVerticesCount(); to++) {
				if (graph.hasEdge(node, to)) {
					stack.push(to);
					depth += 1;
				}
			}
		} else {
            console.log('Solution not found in depth!');
            return
        }
	}
	stack.clear();
	return;
}
