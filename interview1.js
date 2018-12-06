/*Given 2 arrays, create
a function that let's a
user know (true/false)
whether these 2 arrays containany common items

//For example
const arr1 = ['a', 'b', 'c' ,'x'];
const arr2 = ['z', 'y', 'i'];

*/

//My Solution --------------------------------------
function findCommonItems(arr1, arr2){//O(n)
	console.time("joe solution");
	//Merge the arrays
	returnbool = false;
	const arr3 = arr1.concat(arr2);
	console.log(arr3);
	const midline = arr1.length -1;
	console.log("Mid:" + midline);
	arr1.forEach((item) => {
		if(
			arr3.indexOf(item) <= midline
			&& arr3.lastIndexOf(item) > midline
			&& arr3.indexOf(item) >= 0) {
			returnbool = true;
		}
	})
	console.log(console.timeEnd("joe solution"));
	return returnbool;

}

console.log(findCommonItems(['a', 'b', 'c', 'x'], [
	'z', 'y', 'i']));
console.log(findCommonItems(['a', 'b', 'c', 'x'], [
	'z', 'y', 'i', 'x']));
console.log(findCommonItems([], []));

//Andrei Brute force solution ----------------------------
function containsCommonItem(arr1, arr2) {//Time O(a*b) | Space O(1)
	console.time("brute")
	for (let i=0; i< arr1.length; i++) {
		for(let j=0; j< arr2.length; j++) {
			if(arr1[i] === arr2[j]) {
				return true
			}
		}
	}
	console.log(console.timeEnd("brute"));
	return false;
}

console.log(containsCommonItem(['a', 'b', 'c', 'x'], [
	'z', 'y', 'i']));
console.log(containsCommonItem(['a', 'b', 'c', 'x'], [
	'z', 'y', 'i', 'x']));
console.log(containsCommonItem([], []));


//better solution:
//Use hashtable see if it exists on object

function containsCommonItem2(arr1, arr2) { //Time O(a+b) | Space O(a)
	//Loop through first array and create object
	//where properties === items in the array
	console.time("hash");
	let map = {};//tradeoff for space
	for(let i = 0; i < arr1.length; i++) {
		if(!map[arr1[i]]) {//if the item isn't in the hash table add it to the hash table
			let item = arr1[i];
			map[item] = true;
		}
	}
	// loop through second array and check if item in
	//second array exists on created object
	for (let j =0; j < arr2.length; j++) {
		if(map[arr2[j]]) {
			console.log( console.timeEnd("hash"));
			return true
		}
	}
	console.log( console.timeEnd("hash"));
	return false;
}

//Make as error free as possible
console.log(containsCommonItem2(['a', 'b','c', 'x'], ['z', 'y', 'a']));

//Language specific methods to make code cleaner
	//Readability
function containsCommonItem3(arr1, arr2) {
	return arr1.some(item => arr2.includes(item))
}
console.log(containsCommonItem3(['a', 'b','c', 'x'], ['z', 'y', 'a']));