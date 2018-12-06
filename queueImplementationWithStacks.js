
//run node --expose-gc <this file> to allow for the line global.gc() to run the garbage collector
class Stack {
  constructor(){
    this.array = [];
  }
  peek() {
    if(!this.array.length) {
      return null;
    }
    return this.array[this.array.length - 1];
  }
  push(value){
    this.array.push(value);
    return this;
  }
  pop(){
   return this.array.pop();
  }
  
  isEmpty() {
    return this.array.length === 0;
  }
}

class Queue {
    constructor(){
    this.stackA = new Stack();
    this.stackB = new Stack();
    // this.first = null;
    // this.last = null;
    // this.length = 0;
  }
  peek() {
    //Check if the elements are in A(normal stack order) or B(reversed stack order)
    if (this.stackA.peek() === this.stackB.peek()) {
      return null; //if they are both equal it's bc they are both null
    } else if (this.stackB.peek() === null) {
      /*if stack B is null it means the items are in A which means the
      first in line is at the bottom of the stack so the elements have
      to be switched from A to B so the first element in line is at the top
      of stack B and can be properly peeked;*/
      this.switchStackAToB();
    }//Otherwise the items are in B so the are in the correct order to be peeked
    return this.stackB.peek();//The top item in stackB should be the first item in the Queue
  }
  
  enqueue(value){
    //Check order of the elements in the stacks
    //Check what order the items are
     //Check if the elements are in A(normal stack order) or B(reversed stack order)
    if (this.stackA.peek() === null && this.stackB.peek() !== null) {
      /*if stack A is null and B isn't null it means the items are in stack B 
      which means the the last in line is at the bottom of stack B, so the
      items need to be transferred to stack A so the end of the line is the top
      of stack A and the newest item can be pushed to the top of stack A properly
      which would be the end of the Queue*/
      this.switchStackBToA();
    }//Otherwise Assumes that both A & B are empty or that the items are in the correct order for the operation in stack A

    //Push the newest item to the top of stack A aka the back/end of the queue
    this.stackA.push(value);
    return this;
  }
  dequeue(){
    //Check what order the items are
     //Check if the elements are in A(normal stack order) or B(reversed stack order)
    if (this.stackA.peek() === this.stackB.peek()) {
      return null; //if they are both equal it's bc they are both null
    } else if (this.stackB.peek() === null) {
      /*if stack B is null it means the items are in a which means the
      first in line is at the bottom of the stack so the elements have
      to be switched from A to B so the first element in line is at the top
      of stack B and can be properly peeked;*/
      this.switchStackAToB();
    }//Otherwise the items are in B so the are in the correct order to be peeked

    //The top item in stackB should be the first item in the Queue
    //By popping it you essentially dequeue the first item in line
    return this.stackB.pop();
  }

  switchStackAToB() {
    //Keep doing until all of stackA is transferred to stackB
   // while(!this.stackA.isEmpty()) {//this.stackA.peek() !== null) {
    const stackALength = this.stackA.array.length;
    for(let i = 0; i < stackALength; i++) {
      //This transfers the contents of stack A to stackB in reverse order
      this.stackB.push(this.stackA.pop());
    }

    return this.printQ();

  }

  switchStackBToA() {
    // while(!this.stackB.isEmpty()) {//this.stackB.peek() !== null) {
      //This transfers the contents of stack B to stackA back to original order of the queue
      const stackBLength = this.stackB.array.length;
      for(let i = 0; i < stackBLength; i++) {
        this.stackA.push(this.stackB.pop());
      }

    return this.printQ();
  }

  printQ() {
    console.log(`Stack A: ${this.stackA.array} \n StackB: ${this.stackB.array}`);
  }

}


const myQueue = new Queue();
myQueue.printQ();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);
myQueue.enqueue(8);
myQueue.enqueue(9);
myQueue.printQ();
myQueue.switchStackAToB();
myQueue.switchStackBToA();
myQueue.switchStackAToB();
//global.gc()
myQueue.switchStackBToA();
//Here the items should switch between A to B to properly peek at 0;
console.log(myQueue.peek());
// //No switch in stack should occur since it is in the correct order for dequeueing
console.log(myQueue.dequeue());

// //Here the items should switch from stack B to A to properly enqueue the item
myQueue.enqueue(10);
myQueue.printQ();


//Discord
//Udemy
//google
