/* Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack. */

class _Node{
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null; // empty 1st node, indicates top of stack
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack){
    if (stack.top === null) {
        return 'Stack is empty';
    }

    return stack.top;
}

function display(stack) {
    if (stack.top === null) {
        return 'Stack is empty';
    }

    return stack.top.data;
}

function isEmpty(stack) {
    if (stack.top === null) {
        return 'Stack is empty';
    } else {
        return 'Stack is populated';
    }
}


function main() {
    const starTrek = new Stack();
    const starTrekEmpty = new Stack();
    
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    //console.log(starTrek);

    // console.log(peek(starTrek));
    // console.log(display(starTrek));
    console.log(isEmpty(starTrekEmpty));
    console.log(isEmpty(starTrek));
}

main();
