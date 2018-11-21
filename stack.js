// STACKS

// Functions : push, pop, peek, length

Palindrome

let letters = [];

let word = 'racecar';

let rword = '';


for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for(let i = 0; i < word.length; i++){
    rword += letters.pop();
}

if(rword === word) {
    console.log(word + " is palindrome");
} else {
    console.log(word + " is not palindrome");
}


// Stack class

const Stack = function(){
    this.count = 0;
    this.storage = {};

this.push = function(value){
    this.storage[this.count] = value;
    this.count++
}

this.pop = function(){
    if(this.count === 0)
    {
        return 'undefined';
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

this.size = function(){
    return this.count;
}

this.peek = function(){
    return this.storage[this.count-1];
}

}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push('Code Camp')
console.log(myStack.peek());
console.log(myStack.size());