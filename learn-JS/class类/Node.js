//定义一个Node类，每一个Node实例之间可以建立从属关系（或父子关系），且每一个Node实例下方可以带有多个Node子实例，而Node类自身可以检索到所有实例的数量。
class Node {
    constructor(parent = null) {
        this._parent = parent;
        this._children = new Set();
        if (this.isRoot) {
            Node.addRoot(this);
        }

    }
    get isRoot() {
        return !this._parent;
    }
    static addRoot(root) {
        Node.roots = !Node.roots ? [root] : Node.roots.concat(root);
    }
    createChild() {
        let node = new Node(this);
        this._children.add(node);
        return node;
    }
    removeChild() {
        if (this.isRoot) return;
        this._parent._children.delete(this);
        this._parent = null;
    }
    get size() {
        let size = 0;
        for (let node of this._children) {
            size += node.size;
        }
        size += 1;
        return size;
    }
    static get size(){
        return Node.roots
        .map((node)=>node.size)
        .reduce((a,b)=>a+b);
    }
}

const node1 = new Node();
node1.createChild().createChild().removeChild();
console.log(node1.size);

const node2 = new Node();
node2.createChild();
console.log(node2.size);


console.log(Node.size);
