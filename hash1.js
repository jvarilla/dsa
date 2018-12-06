let user = {
	age: 54,
	name: 'Kylie',
	magic: true,
	scream: function(){
		console.log('uh uh oh uh iih oooh owa!');
	}
}

user.age //O(1) -- direct access through hash
user.spell = 'abra kadabra';//O(1) ---direct access through hash
user.scream(); //O(1)
