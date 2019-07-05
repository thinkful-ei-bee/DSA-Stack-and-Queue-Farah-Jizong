class _Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }    
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(data){
        if(this.top === null){
            this.top = new _Node(data,null);
            return this.top;
        }
        const node = new _Node(data,this.top)
        this.top = node;
    }

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){
        if(this.top ===null){
            return null;
        }
        return this.top.data;
    }

    isEmpty(){
        return this.top === null;
    }

    display(){
        let node = this.top;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}

module.exports = Stack;