export default function traverseInOrder(node, arr) {
	node.left !== null && traverseInOrder(node.left, arr);
	arr.push(node.value);
	node.right !== null && traverseInOrder(node.right, arr);

	return arr;
}
