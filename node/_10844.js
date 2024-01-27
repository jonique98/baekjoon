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

	dp[1][0] = 0;
	for(let i = 1; i <= 9; i++)
		dp[1][i] = 1;

	for(let i = 2; i <= N; i++){
		for(let j = 0; j <= 9; j++){
			if(j === 0)
				dp[i][j] = dp[i-1][1] % 1000000000;
			else if (j === 9)
				dp[i][j] = dp[i-1][8]  % 1000000000;
			else
				dp[i][j] = dp[i-1][j-1] % 1000000000 + dp[i-1][j+1] % 1000000000;
		}
	}

	for(let i = 0; i <= 9; i++)
		ans += dp[N][i];
	
	console.log(ans % 1000000000);
})