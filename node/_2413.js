const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
	input.push(line)}
).on("close", function(){
	let a = input[0].split(' ').map(Number);

	const na = (n, v) => {
		if(v % n === 0)
			return n;
		else
			return v % n;
	}

	let i = 1;
	while(1){
		if(na(15, i) === a[0] && na(28, i) === a[1] && na(19, i) === a[2]){
			console.log(i);
			console.log(process.memoryUsage());
			break;
		}
		i++;
	}
})
