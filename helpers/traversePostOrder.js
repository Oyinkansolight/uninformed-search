export default function traversePostOrder(node, arr) {
	node.left !== null && traversePostOrder(node.left, arr);
	node.right !== null && traversePostOrder(node.right, arr);
	arr.push(node.value);

	return arr;
}
