const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let N = Number(input[0]);
	let arr = input[1].split(' ').map(Number);
	let M = Number(input[2]);

	let low = 1;
	let high = Math.max(...arr);

	while(low <= high) {
		let mid = Math.floor((low + high) / 2);
		let tmp = arr.reduce((sum,cur) => {
			return sum + (cur < mid ? cur : mid);
		}, 0)
		if(tmp <= M)
			low = mid+1;
		else
			high = mid-1;
	}

	console.log(low-1);
});