class Graph {//undirected unweighted
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList ={};//use objects bc array shifting is costly
		/* Ex this.adjacentList = {
			0: [1,2]
		}*/
	}

	addVertex(node) {
		if(!this.adjacentList[node]) {
			this.numberOfNodes++;
			this.adjacentList[node] = new Set();
		}
	}

	addEdge(node1, node2) {
		//undirected graph
		//no duplicates if you have (1,3) don't add (3,1)
		if(!this.adjacentList[node1] || !this.adjacentList[node2]) {
			return false; //because one of the nodes is invalid
		}
		//Taken care of uniqueness because set won't add it

		//add edge for both connections
		this.adjacentList[node1].add(node2);
		this.adjacentList[node2].add(node1);
	}

	showConnections() {
		const allNodes = Object.keys(this.adjacentList); 
    	for (let node of allNodes) { 
	      let nodeConnections = this.adjacentList[node]; 
	      let connections = ""; 
	      let vertex;
	      for (vertex of nodeConnections) {
	        connections += vertex + " ";
	      } 
	      console.log(node + "-->" + connections); 
 	   } 
	}
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
//Does not get added bc the set object recognizes that it is a duplicate
myGraph.addEdge('0', '1'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5