//Create a function to reverse a string

//MY SOLUTION
function reverse(str){//O(n)
  let reverseString = "";
  for(let idx = str.length -1; idx >= 0; idx--) {
  	reverseString += str[idx];
  }
  return reverseString;
}

console.log(reverse("bozo"));
console.log(reverse(""));
//process.exit();

//ANDREI'S SOLUTION
function reverse2(str){
	//check input
	if (!str 
		|| str.length < 2 
		|| typeof str !== 'string') {
		return 'hmmm that is not good';
	}

	const backwards = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
		//str.split() also exists
	}

	console.log(backwards);

	return backwards.join(''); //or .toString()
}

console.log(reverse2('Hi my name is Andrei!'));

//ALTERNATE SOLUTION
function reverse3(str) {
	return str.split('').reverse().join('');
}

console.log(reverse3('Hi my name is Andrei!'));

const reverse4 = str => [...str].reverse()
	.join('');
//Spread operator ...str splits the string
console.log(reverse4('Hi my name is Andrei!'));