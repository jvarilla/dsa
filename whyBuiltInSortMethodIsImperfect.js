/*By default the JS built in sort 
method converts all elements to unicode
including numbers and sorts ASC by unicode*/


const letters = ['a', 'd', 'z', 'e', 'r', 'b'];
//sorts properly

const basket = [2, 65 ,34, 2, 1, 7, 8]
// Sorted with .sort() -> [1, 2, 2, 34, 65, 7, 8]
//Fix with sort((a,b) => a - b);

const spanish = ['único', 'árbol', 'cosas', 'fútbol'];
// sorted with .sort() -> ['cosas', 'fútbol' 'árbol', 'único', ]
//fix with 
spanish.sort(function(a,b) => {
	return a.localeCompare(b);
});