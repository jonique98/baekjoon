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

	const dp = Array.from(Array(n+1).fill(0));
	const arr = Array(n+1);
	for(let i = 0; i < n; i++){
		arr[i+1] = Number(input[i+1]);
	}


	dp[1] = arr[1];
	for(let i = 2; i < arr.length; i++){
		dp[i] = Math.max(dp[i-2] + (arr[i-1] * arr[i]), dp[i-1] + arr[i])
	}

	console.log(dp);
})