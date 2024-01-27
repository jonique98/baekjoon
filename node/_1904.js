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

	 const dp = Array.from({ length: N });

	 dp[0] = 1;
	 dp[1] = 2;


	for(let i = 2; i < N; i++)
		dp[i] = dp[i-2] % 15746 + dp[i-1] % 15746;

	console.log(dp[N-1] % 15746);

})