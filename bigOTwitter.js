//Find the newest tweet and oldest tweet
//Find 1st and Nth
const array = [{
	tweet: 'hi',
	date: 2012,
	}, {
	tweet:'my',
	date: 2014}, {
	tweet: 'teddy',
	date: 2018
	}];

// < Oldest -------- Newest >
array[0]; //Oldest O[1]
array[array.length -1]; //Most Recent O[1]

//Finding Tweets
//Big O => O(2) => O(1) Constant Time

//Comparing Dates
//Compare each element to other ones nested loop
// => O(n^2)
	//Costly So
	// Store the info in a different format to 
	// save money

'hfuieniufnwu'.length; //Need to know the cost of length
//Length depends on the lanugage
//.length property is O(1)