export default class BstToGo{
    constructor(bst){
        this.bst = bst;
        this.current_animation = [];
        this.anim_index = 0;
    }



    getGoTreeNodes(){
        let toReturn = [];
        this._addAllNodes(this.bst.root, toReturn);
        return toReturn;
    }

    _addAllNodes(node, arr, parent = null){
        arr.push({key: node.value, parent: parent?.value});
        node.children.forEach(childNode => {
            this._addAllNodes(childNode, arr, node);
        });
    }

    startAnimation(arr){
        this.current_animation = arr;
        this.anim_index = -1;
    }

    nextFrame(){
        if (this.anim_index == this.current_animation.length-1){
            return null;
        }
        this.anim_index += 1;
        return {last: this.anim_index == 0 ? null : this.current_animation[this.anim_index-1],
            current: this.current_animation[this.anim_index],
            is_done: this.anim_index == this.current_animation.length-1};
    }
}