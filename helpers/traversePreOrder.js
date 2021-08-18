export default function traversePreOrder(node, arr) {
	arr.push(node.value);

	node.left !== null && traversePreOrder(node.left, arr);
	node.right !== null && traversePreOrder(node.right, arr);

	return arr;
}

// dept_first(node, search_value){
//     val = dept_first(node.right_child, search_value);
//     if(val != null) return val;
//     if (search_value == node.value) return node.value;
//     val = dept_first(node.left_child, search_value);
//     if (val != null) return val;
//     else return null
