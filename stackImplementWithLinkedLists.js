class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {//Return the top node
		return this.top;
	}

	push(value) {//Add node to the top
		//create the new top node
		let newTopNode = new Node(value);

		//Make the bottom the top node if the length is 1
		if (this.length <= 1) {
			this.bottom = this.top;
		}

		//Point the newTopNode to the old top node;
		newTopNode.next = this.top;

		//Make newTopNode the new top node
		this.top = newTopNode;

		//increment the length
		this.length++;

		//return the new top node
		return this.top;

	}

	pop() {//Remove top node
		//Get the top node
		const topNode = this.top;
		console.log('old top node', this.top);
		//Make the 2nd node the new top node
		if(topNode) {
			this.top = topNode.next;
		} else {
			this.top = null;
		}

		//Decrement length
		this.length--;

		//set bottom to null if is empty()
		if (this.isEmpty()) {
			this.bottom = null;
		}
		//Return the removed node
		return topNode;
	}

	isEmpty() {//return true if the length is 0
		return this.length === 0; 
	}

	printList() {
		let returnList = [];
		let currentNode = this.top;
		while(currentNode) {
			returnList.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return returnList;
	}
}

const myStack = new Stack();
myStack.push(1);
console.log(myStack.printList());
myStack.push(2);

console.log(myStack.printList());
myStack.push(3);

console.log(myStack.printList());
myStack.push(4);

console.log(myStack.printList());
myStack.pop();
console.log(myStack.printList());
myStack.pop();
console.log(myStack.printList());
myStack.pop();
console.log(myStack.printList());
myStack.pop();
console.log(myStack.printList());
myStack.pop();