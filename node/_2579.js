const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let n = Number(input[0]);

	let arr = input.slice(1, n+1).map(Number);

	let dp = Array.from(n).fill(0);

	dp[0] = arr[0];
	dp[1] = arr[0] + arr[1];
	dp[2] = Math.max(arr[2] + arr[1], arr[2] + dp[0]);

	for(let i = 3; i < n; i++) {
		dp[i] = Math.max(arr[i] + arr[i-1] + dp[i-3], arr[i] + dp[i-2]);
	}

	console.log(dp[n-1]);

})