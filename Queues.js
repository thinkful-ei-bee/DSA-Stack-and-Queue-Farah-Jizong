'use strict';

class _Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}


class Queue{
  constructor(){
    this.first = null;
    this.last = null;
  }

  enqueue(data){
    const node = new _Node(data);
    if(this.first===null){
      this.first = node;
    }
    if(this.last){
      this.last.next = node;
    }

    this.last=node;            
  }

  dequeue(){
    if(this.first===null){
      return; 
    }
    const node = this.first;
    this.first = this.first.next;
    if(node===this.last){
      this.last=null;
    }
    return node.value;
  }
}

function peek(queue){
  return queue.first.value;
}

function isEmpty(queue){
  return queue.first===null;
}

function display(queue){
  const node = queue.first;
  while(node!==null){
    console.log(node.value);
    node = node.next;
  }
}

const starTrekQ = new Queue;
starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

const newQueue = new Queue;

// test with an empty queue
// console.log(isEmpty(newQueue))
//console.log(starTrekQ.first,'test first')
display(starTrekQ)
starTrekQ.dequeue()
console.log('--------')
display(starTrekQ)