class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    //Create new node
    const newNode = new Node(value);

    //Check if this is the very first item - then make it the top and bottom
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {//if it already has sometihing
      const holdingPointer = this.top; //prev top node
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.top) {//if there isn't a top node
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push('google');
console.log(myStack.peek());
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);

while(myStack.length > 0) {
  console.log(myStack.pop());
}

//Discord
//Udemy
//google
