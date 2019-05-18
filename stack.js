/* Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack. */

// Node class

class _Node{
  constructor(data, next) {
      this.data = data;
      this.next = next;
  }
}

// Stack

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
      return true;
  } else {
      return false;
  }
}

function is_palindrome(s) {
s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
const palindromeStack = new Stack()
const palindromeString = []
for(letter of s){
  palindromeStack.push(letter)
}

while(!isEmpty(palindromeStack )){
    palindromeString.push(palindromeStack.pop())  
}

for(let i=0;i<s.length;i++){
  if(s[i]!==palindromeString[i]){
    return false
  }
}
return true
}

//expected answer => True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// Matching parenthesis
function matchingParenthesis(s){
    // input: ((7 + 2 ) * ( 4 + 2 ))
    // output: number of '(':3    number of ')':3

    // push exp into a stack 
    // pop out each
    let counter = 0;
    let counter2=0;
    const expressionStack = new Stack();

    for(letter of s){
        counter2++;

        if (letter === '('){
            expressionStack.push(letter)
        }
       
        if (letter === ')') {
            if ( !isEmpty(expressionStack)){
                expressionStack.pop();
            }
            else{
              console.log (`Closing parenthesis at position ${counter2} is missing it's opening parenthesis.`);
            }
        }
    }

    while(!isEmpty(expressionStack)){
        expressionStack.pop();
        counter++;
    }

    if(counter === 0 && counter2===0){
      return 'everything looks good';  
    } 
    else{
      for(let i = 0; i < counter; i++) {
        console.log (`Parentheses at position ${i + 1} is missing it's closing parenthesis.`);
    } }
      return
}


// 5. Sort stack
function sortStack(stack){
    const tempStack = new Stack();

    let tempVar=null;

    while(!isEmpty(stack)){
      tempVar = stack.pop()      
      while(!isEmpty(tempStack)&& display(tempStack)>tempVar){        
        stack.push(tempStack.pop())        
      }
      tempStack.push(tempVar)
    }
    return tempStack
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
    // console.log(isEmpty(starTrekEmpty));
    // console.log(isEmpty(starTrek));

    // console.log(matchingParenthesis('()()())))((('))
    
    const originalStack = new Stack();

    originalStack.push(1);
    originalStack.push(5);
    originalStack.push(2);
    originalStack.push(4);
    
    let sorted = sortStack(originalStack)
    console.log('test pop')
    console.log(sorted)
    console.log(sorted.pop())
    console.log(sorted.pop())
    console.log(sorted.pop())
    
 
    
  }
  
  main();