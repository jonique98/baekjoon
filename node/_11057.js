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
	let ans = 0;

	 const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

	for(let i = 1; i <= 9; i++)
		dp[0][i] = 0;
	for(let i = 1; i <= N; i++)
		dp[i][0] = 1;


	for(let i = 1; i <= N; i++){
		for(let j = 1; j <= 9; j++){
				dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % 10007;
		}
	}

	for(let i = 0; i <= 9; i++)
		ans += dp[N][i];
	
	console.log(ans % 10007);
})