const strings = ['a', 'b', 'c', 'd'];
				  0    1    2    3
//4items * 4bytes each = 16 bytes of memory to store array

strings[2] //go to strings array and grab item @ idx 3
//O(1)

//push - add something to end of array
strings.push('e') //O(1)

//pop - remove last item of array
strings.pop(); //O(1)

//unshift -add 'x' to beginning of array
strings.unshift('x'); //O(n) 
//is O(n) because you need to move the rest of the items back one an index
// ['x', 'a', 'b', 'c', 'd']
//   0   ----->  1 ->    2  ->  3 -> 4

//splice
strings.splice(2, 0, 'alien'); //O(n/2) -> O(n)
//Go to idx 2 and add 'alien' while shifting the others
console.log(strings);