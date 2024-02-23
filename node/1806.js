const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

const input = [];
rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {


	const s = input[0].split(' ').map(Number)[2];
	const arr = input[1].split(' ').map(Number);

	let right = 0;
	let left = 0;

	let ans = -Infinity
	let sum = 0;
	while(right < arr.length){
		if(sum <= )
	}
})