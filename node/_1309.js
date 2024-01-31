const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
	let a = Number(input[0]);

	dp = [];
	dp[1] = 3;
	dp[2] = 7;
	for(let i = 3; i <= a; i++)
		dp[i] = (2 * dp[i-2] + dp[i-1] + (dp[i-1] - dp[i-2]))%9901;

	console.log(dp[a]);
});