const Stack = require('./Stack')

const starTrek = new Stack;

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

console.log(starTrek)
console.log(starTrek.peek())
console.log(starTrek.isEmpty())
starTrek.display()
starTrek.pop()
console.log('after pop')
starTrek.display()
const checkIsEmpty = new Stack;
console.log(checkIsEmpty.isEmpty())

function is_palindrome(s) {
    let stack = new Stack;
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let arr = s.split('')
    // console.log(arr,'array')
    for(item of arr){
        stack.push(item)
    }
    let arr2 = []
    while(!stack.isEmpty()){
        arr2.push(stack.pop())
    }
    // console.log(arr2,'test arr2')
    return arr2.join('')===arr.join('')
}

// True, true, true, false
console.log('is palidrome-------')
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


function parenthesesMatch(s){
    const stack = new Stack();
    for(let i = 0; i<s.length; i++){
        const char = s.charAt(i);
        if(char==='('){
            stack.push(char);
        }
        else if(char===')'){
            if(!stack.peek()){
                return false
            }
            stack.pop()
        }
    }
    console.log(stack,'test stack')
    if(stack.peek()){
        return false;
    }
    return true;
}

console.log('parenthesis match')
console.log(parenthesesMatch('(333)'))

function multipleParenthesisMatch(str){
    const stack = new Stack();
    const brackets ={
        '(':')',
        '{':'}',
        '[':']'
    };
    const openBrackets = Object.keys(brackets);
    const closeBrackets = Object.values(brackets);
    for(let i=0;i<str.length;i++){
        const char = str.charAt(i)
        if(openBrackets.includes(char)){
            stack.push(char);
        }
        else if(closeBrackets.includes(char)){
            const candidate = stack.peek()
            if(brackets[candidate]!==char){
                return false;
            }
            stack.pop()
        }
    }
    if(stack.peek()){
        return false;
    }
    return true;
}
console.log('multiple parenthesis')
console.log(multipleParenthesisMatch('{dddd}'))

function parenthesisMatchwithQuote(str){
    const stack = new Stack;
    const brackets = {
        '(':')',
        '{':'}',
        '[':']'
    }
    const openBrackets = Object.keys(brackets);
    const closeBrackets = Object.values(brackets);
    const quotes = ['"',"'"];
    let inQuotes = false;
    for(let i = 0; i<str.length;i++){
        const char = str.charAt(i);
        if(quotes.includes(char)){
            if(inQuotes){
                const candidate = stack.peek();
                if(candidate===char){
                    stack.pop();
                    inQuotes = false;
                }
            }else{
                stack.push(char);
                inQuotes = true;
            }
        }
        else if(openBrackets.includes(char)&& !inQuotes){
            stack.push(char);
        }
        else if(closeBrackets.includes(char)&& !inQuotes){
            const candidate = stack.peek();
            if(brackets[candidate]!==char){
                return false;
            }
            stack.pop()
        }
    }
    if(stack.peek()){
        return false;
    }
    return true;
}

function sortStack(originStack){
    let newStack = new Stack();
    while(!originStack.isEmpty()){
        let temp = originStack.pop()
        while((!originStack.isEmpty())&& (newStack.peek() > temp)){
            originalStack.push(newStack.pop())
        }
        newStack.push(temp);
    }
    while(!newStack.isEmpty()){
        originStack.push(newStack.pop());
    }
}

