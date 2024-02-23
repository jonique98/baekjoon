const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {

	const n = Number(input[0]);

	const dp = Array(n).fill(1);
	const arr = input[1].split(' ').map(Number);

	for(let i = 0; i < n; i++){
		for(let j = 0; j < i; j++){
			if(arr[j] > arr[i])
				dp[i] = Math.max(dp[i], dp[j]+1);
		}
	}
	console.log(Math.max(...dp));
});