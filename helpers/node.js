export default class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.id = value;
        this.children = [];
        this.depth = 0;
        this.x = Math.random() * 1000;
        this.y = Math.random() * 1000;
    }
}