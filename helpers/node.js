export default class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.id = value;
        this.children = [];
        this.weights = [];
        this.depth = 0;
        this.distance_to_root = 0;
        this.tooltip = "Thing"
        this.label = `${value}`
        // this.subTypeCount = 9
        // this.status = 0
    }
}