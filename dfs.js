import InitGraph from "./graph.js";
import { Stack } from "datastructures-js";

export default function DFS(data, root, goal) {
	let node, to = 1, stack;
	const graph = InitGraph(data);

	stack = new Stack();
	stack.push(root);

	while (!stack.isEmpty()) {
        // console.log(stack);

		node = stack.pop();

		console.log(node, "==", goal);
		if (node === goal) break;

        // console.log(graph.hasEdge(0, 1));

		for (to; to < graph.getVerticesCount(); to++) {
            // console.log('to', to);
			// console.log(graph.hasEdge(node, to), node, to);
            if (graph.hasEdge(node, to)) {
                if (graph.hasEdge(to, to + 1) || graph.hasEdge(to, to + 2)) {
                    stack.push(to);
                    break;
                } else {
                    stack.push(root);
                }
				
			}
            // console.log(stack);
		}
        // stack.clear();
	}
	stack.clear();
	return;
}


// export default function DFS(data, root, goal, cb) {
//     const graph = InitGraph(data);

//     const traverseDfsRecursive = (key, visited = new Set()) => {
//         if (visited.has(key)){
//             console.log(key, '==', goal);
//         }

//         if (!graph.hasVertex(key) || visited.has(goal)) return;

        
        
  
//         cb(key, graph._vertices.get(key));
//         visited.add(key);
  
//         graph._edges.get(key).forEach((weight, destKey) => {
//           traverseDfsRecursive(destKey, visited);
//         });
//       };
//       traverseDfsRecursive(root);
// }

