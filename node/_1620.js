const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
	input.push(line)}
).on("close", function(){
	let a  = Number(input[0].split(' ')[0]);
	let b  = Number(input[0].split(' ')[1]);

	let map = new Map();

	for(let i = 1; i <= a; i++){
		map.set(input[i], i);
		map.set(i, input[i]);
	}

	let result = [];

	for(i = a+1; i <= a+b; i++){
		if(isNaN(input[i]))
			result.push(map.get(input[i]));
		else
			result.push(map.get(Number(input[i])));
	}
	console.log(result.join('\n'));
})