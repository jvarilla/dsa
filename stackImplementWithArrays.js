// class Node {
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.data = [];
  }
  peek() {
    if(this.data.length) {
       return this.data[this.data.length-1];
    }
    return null;
  }
  push(value){
    this.data.push(value);
    if (this.length === 0) {  
      this.bottom = this.data[0];
    } 
    this.top = this.data[this.data.length - 1];
    this.length++;
    return this;
  }
  pop(){
     if (!this.top) {
      return null;
      }
      if (this.top === this.bottom) {
        this.bottom = null;
      }
    this.data.pop();
    this.top = this.data[this.data.length - 1];
    this.length--;
    return this;
  }
}

  //isEmpty


const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());










//Discord
//Udemy
//google
