import { Graph } from "datastructures-js";

export default function InitGraph(param) {
	const graph = new Graph();

	param.map((item) => {
		if (!graph.hasVertex(item[0])) {
			graph.addVertex(item[0], true);
		}

		if (!graph.hasVertex(item[1])) {
			graph.addVertex(item[1], true);
		}
	});

	param.map((item) => {
		graph.addEdge(item[0], item[1], item[2]);
	});

	// console.log(graph);
    console.log(graph)
	return graph;
}
