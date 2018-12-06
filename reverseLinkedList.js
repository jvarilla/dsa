//Create a method to reverse a linked list
// add a method reverse() to the linked list that reverses the entire list of nodes

class LinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null
      };
      this.tail = this.head;
      this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    console.log(newNode)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      console.log('yes')
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters      
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
  	console.time('my');
  	let index = 0;
  	let currentNode = this.head;
  	let reversedLinkedList = null;
  	this.tail = currentNode;
  	while (index < this.length) {//O(n)
  		reversedLinkedList = {
  			value: currentNode.value,
  			next: reversedLinkedList
  		};

  		if (index === this.length - 1) {
  			this.head = reversedLinkedList;
  		}
  		currentNode = currentNode.next;
  		index++;
  	}
  	console.log(console.timeEnd('my'));
 	return this.printList();
  }

  	reverseAndrei() {//Andrei's Solution - 10x faster than my solution
  		//Check if only one node and return it
  		console.time('andrei');
  		if (!this.head.next) {
  			return this.head;
  		}

  		let first = this.head;
  		let second = first.next;
  		this.tail = this.head;
  		while(second) {
  			let temp = second.next;
  			second.next = first;
  			first = second;
  			second = temp;
  		}

  		this.head.next = null;
  		this.head = first;
  		console.log(console.timeEnd('andrei'));
  		return this.printList();
  	}


}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
// myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
console.log(myLinkedList.printList());
//myLinkedList.remove(2)
console.log(myLinkedList.reverse());
console.log(myLinkedList);
console.log(myLinkedList.printList());
console.log(myLinkedList.reverseAndrei());
//console.log(myLinkedList.printList());
