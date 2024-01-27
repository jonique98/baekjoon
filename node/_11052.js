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

	let ans = -1;

	const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

	for(let i = 0; i <= N; i++){
		dp[0][i] = 0;
		dp[i][0] = 0;
	}


	for(let i = 1; i <= N; i++){
		for(let j = 1; j <= N; j++){
			if(j >= i)
				dp[i][j] = Math.max(dp[i-1][j], dp[i][j-i] + arr[i - 1]);
			else
				dp[i][j] = dp[i-1][j]
			if(dp[i][j] > ans)
				ans = dp[i][j];
		}
	}
	console.log(ans);
})