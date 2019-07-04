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
